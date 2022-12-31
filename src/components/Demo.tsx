import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from "@web3-react/walletconnect-connector";
import { ethers, Signer, PayableOverrides } from "ethers";
import { keccak256 } from "keccak256";
import { MerkleTree } from "merkletreejs";
import { useEffect, useState } from "react";

import { allowlistAddresses } from "../../allowlist.mjs";
import { injected, walletconnect, POLLING_INTERVAL } from "../dapp/connectors";
import { useEagerConnect, useInactiveListener } from "../dapp/hooks";
import logger from "../logger";
import { ERC721KV2__factory } from "../types";
import { Header } from "./Header";

function getErrorMessage(error: Error) {
  if (error instanceof NoEthereumProviderError) {
    return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
  }
  if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network.";
  }
  if (error instanceof UserRejectedRequestErrorInjected || error instanceof UserRejectedRequestErrorWalletConnect) {
    return "Please authorize this website to access your Ethereum account.";
  }
  logger.error(error);
  return "An unknown error occurred. Check the console for more details.";
}

export function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
}

export const Demo = function () {
  const context = useWeb3React<Web3Provider>();
  const { connector, library, account, activate, deactivate, active, error } = context;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState<any>();
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  const activating = (connection: typeof injected | typeof walletconnect) => connection === activatingConnector;
  const connected = (connection: typeof injected | typeof walletconnect) => connection === connector;
  const disabled = !triedEager || !!activatingConnector || connected(injected) || connected(walletconnect) || !!error;
  // an address which was got when deployed V1
  const address = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
  const toAddress = "";
  const tokenId = 1;

  return (
    <>
      <Header />
      <div>{!!error && <h4 style={{ marginTop: "1rem", marginBottom: "0" }}>{getErrorMessage(error)}</h4>}</div>
      <div className="grid grid-cols-2 gap-2 py-4 px-2">
        <div className="card bordered">
          <figure>
            <img
              className="h-24"
              src="https://images.ctfassets.net/9sy2a0egs6zh/4zJfzJbG3kTDSk5Wo4RJI1/1b363263141cf629b28155e2625b56c9/mm-logo.svg"
              alt="metamask"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <a className="link link-hover" href="https://metamask.io/" target="_blank" rel="noreferrer">
                MetaMask
              </a>
            </h2>
            <p>A crypto wallet & gateway to blockchain apps</p>
            <div className="justify-end card-actions">
              <button
                type="button"
                className="btn btn-primary"
                disabled={disabled}
                onClick={() => {
                  setActivatingConnector(injected);
                  activate(injected);
                }}
              >
                <div className="py-4 px-2">
                  {activating(injected) && <p className="btn loading">loading...</p>}
                  {connected(injected) && (
                    <span role="img" aria-label="check">
                      ✅
                    </span>
                  )}
                </div>
                Connect with MetaMask
              </button>
              {connected(injected) && (
                <>
                  {!!(library && account) && (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        library
                          .getSigner(account)
                          .signMessage("👋")
                          .then((signature: any) => {
                            window.alert(`Success!\n\n${signature}`);
                          })
                          .catch((err: Error) => {
                            window.alert(`Failure!${err && err.message ? `\n\n${err.message}` : ""}`);
                          });
                      }}
                    >
                      Sign Message
                    </button>
                  )}
                  {!!(library && account) && (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={async () => {
                        console.log("mint");
                        console.log("address:", address);

                        const erc721KV1 = ERC721KV2__factory.connect(address, library.getSigner(account));

                        const cost = ethers.utils.parseEther("0.01");
                        // const  gasLimit = 285000;
                        let allowlistMaxMintAmount;

                        const nameMap = allowlistAddresses.map((list) => list[0]);
                        const leafNodes = allowlistAddresses.map((addr) =>
                          ethers.utils.solidityKeccak256(["address", "uint256"], [addr[0], addr[1]])
                        );

                        const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

                        const addressId = nameMap.indexOf(account);
                        const claimingAddress = ethers.utils.solidityKeccak256(
                          ["address", "uint256"],
                          [allowlistAddresses[0][0], allowlistAddresses[0][1]]
                        );
                        const hexProof = merkleTree.getHexProof(claimingAddress);

                        console.log("hexProof:", hexProof);
                        console.log("addressId:", addressId);
                        console.log("claimingAddress:", claimingAddress);

                        if (addressId == -1) {
                          allowlistMaxMintAmount = 0;
                          const claimingAddress = ethers.utils.solidityKeccak256(
                            ["address", "uint256"],
                            [allowlistAddresses[0][0], allowlistAddresses[0][1]]
                          );
                          const hexProof = merkleTree.getHexProof(claimingAddress);
                          console.log("hexProof:", hexProof);
                        } else {
                          allowlistMaxMintAmount = allowlistAddresses[addressId][1];
                          const claimingAddress = ethers.utils.solidityKeccak256(
                            ["address", "uint256"],
                            [allowlistAddresses[addressId][0], allowlistAddresses[addressId][1]]
                          );
                          const hexProof = merkleTree.getHexProof(claimingAddress);
                          console.log("hexProof:", hexProof);
                        }

                        const p: PayableOverrides = {
                          value: cost,
                        };
                        const txRequest = await erc721KV1.populateTransaction.mint(allowlistMaxMintAmount, hexProof, p);

                        console.log("txRequest:", txRequest);
                        console.log("txRequest.data:", txRequest.data);

                        await library
                          .getSigner(account)
                          .sendTransaction(txRequest)
                          .then((res) => {
                            window.alert("Minted!");
                            console.log("hash:", res.hash);
                          })
                          .catch((err) => {
                            window.alert(`err:${err}`);
                            console.log("err:", err);
                          });
                      }}
                    >
                      Mint
                    </button>
                  )}
                  {!!(library && account) && (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={async () => {
                        console.log("transfer");

                        const erc721KV1 = ERC721KV2__factory.connect(address, library.getSigner(account));

                        const txRequest = await erc721KV1.populateTransaction.transfer(account, toAddress, tokenId);

                        await library
                          .getSigner(account)
                          .sendTransaction(txRequest)
                          .then((res) => {
                            window.alert(`Transfered!\nhash:${res.hash}`);
                            console.log("hash:", res.hash);
                          })
                          .catch((err) => console.log("err:", err));
                      }}
                    >
                      Transfer
                    </button>
                  )}
                  {!!(library && account) && (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={async () => {
                        console.log("burn");

                        const erc721KV1 = ERC721KV2__factory.connect(address, library.getSigner(account));

                        const txRequest = await erc721KV1.populateTransaction.burn(tokenId);

                        await library
                          .getSigner(account)
                          .sendTransaction(txRequest)
                          .then((res) => {
                            window.alert(`Burned!\nhash:${res.hash}`);
                            console.log("hash:", res.hash);
                          })
                          .catch((err) => console.log("err:", err));
                      }}
                    >
                      Burn
                    </button>
                  )}
                  {!!(library && account) && (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={async () => {
                        console.log("balance");

                        const erc721KV1 = ERC721KV2__factory.connect(address, library.getSigner(account));

                        await erc721KV1
                          .balanceOf(account)
                          .then((res) => window.alert(`Balance: ${res.toString()}`))
                          .catch((err) => console.log("err:", err));
                      }}
                    >
                      balance
                    </button>
                  )}
                  {!!(library && account) && (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={async () => {
                        console.log("SetMerkleRoot");

                        const erc721KV1 = ERC721KV2__factory.connect(address, library.getSigner(account));

                        await erc721KV1
                          .setMerkleRoot(process.env.NEXT_PUBLIC_MERKLE_PROOF)
                          .then((res) => {
                            window.alert(`success:${res}`);
                            console.log("res:", res);
                          })
                          .catch((err) => console.log("err:", err));
                      }}
                    >
                      SetMerkleRoot
                    </button>
                  )}
                  {!!(library && account) && (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={async () => {
                        console.log("helloV2");

                        const erc721KV1 = ERC721KV2__factory.connect(address, library.getSigner(account));

                        await erc721KV1
                          .helloV2()
                          .then((res) => {
                            window.alert(`success:${res}`);
                            console.log("res:", res);
                          })
                          .catch((err) => console.log("err:", err));
                      }}
                    >
                      helloV2
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      if (connected(walletconnect)) {
                        (connector as any).close();
                      }
                      deactivate();
                    }}
                  >
                    Deactivate
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="card bordered">
          <figure>
            <img
              className="h-24"
              src="https://docs.walletconnect.com/img/walletconnect-logo.svg"
              alt="wallet connect"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <a className="link link-hover" href="https://walletconnect.org/" target="_blank" rel="noreferrer">
                Wallet Connect
              </a>
            </h2>
            <p>Open protocol for connecting Wallets to Dapps</p>
            <div className="justify-end card-actions">
              <button
                type="button"
                className="btn btn-primary"
                disabled={disabled}
                onClick={() => {
                  setActivatingConnector(walletconnect);
                  activate(walletconnect);
                }}
              >
                <div className="py-4 px-2">
                  {activating(walletconnect) && <p className="btn loading">loading...</p>}
                  {connected(walletconnect) && (
                    <span role="img" aria-label="check">
                      ✅
                    </span>
                  )}
                </div>
                Connect with WalletConnect
              </button>
              {(active || error) && connected(walletconnect) && (
                <>
                  {!!(library && account) && (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        library
                          .getSigner(account)
                          .signMessage("👋")
                          .then((signature: any) => {
                            window.alert(`Success!\n\n${signature}`);
                          })
                          .catch((err: Error) => {
                            window.alert(`Failure!${err && err.message ? `\n\n${err.message}` : ""}`);
                          });
                      }}
                    >
                      Sign Message
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      if (connected(walletconnect)) {
                        (connector as any).close();
                      }
                      deactivate();
                    }}
                  >
                    Deactivate
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
