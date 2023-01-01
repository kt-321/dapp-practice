import { expect } from "chai";
import { loadFixture } from "ethereum-waffle";
import { ethers, upgrades } from "hardhat";

import { ERC721KV1__factory } from "../src/types";

const _name = "ERC721KV1";

describe("ERC721KV1", () => {
  // let admin, signer, user1, user2, user3;
  // let addr, addrToken, addrEx; //コントラクトアドレス
  // let thisChainId;
  // let idPHS, idPHX;
  // let ContAdmin, Cont1, Cont2, Cont3;
  // let tokenAdmin, token1;
  // let exAdmin, ex1;
  const name = "ERC721K";
  const symbol = "ERK";
  const onlyAllowlisted = true;
  const maxSupply = 5;
  const cost = 10000;

  // it(`${_name} Contract deploy`, async () => {
  //   console.log("deploy!!");

  //   const [admin, signer, user1, user2, user3] = await ethers.getSigners();
  //   const ERC721KV1Factory = new ERC721KV1__factory(admin);

  //   const ERC721KV1Contract = await upgrades.deployProxy(ERC721KV1Factory, [], {
  //     initializer: "initialize",
  //   });

  //   console.log("Deploying...: ", ERC721KV1Contract.address);
  //   await ERC721KV1Contract.deployed();
  //   console.log("ERC721KV1 deployed to:", ERC721KV1Contract.address);

  //   expect(await ERC721KV1Contract.name()).to.equal(name);
  //   expect(await ERC721KV1Contract.symbol()).to.equal(symbol);
  //   expect(await ERC721KV1Contract.onlyAllowlisted()).to.equal(onlyAllowlisted);
  //   expect(await ERC721KV1Contract.cost()).to.equal(cost);
  //   expect(await ERC721KV1Contract.maxSupply()).to.equal(maxSupply);
  // });

  async function deployFixture() {
    const [admin, signer, user1, user2, user3] = await ethers.getSigners();
    const ERC721KV1Factory = new ERC721KV1__factory(admin);

    const ERC721KV1Contract = await upgrades.deployProxy(
      ERC721KV1Factory,
      ["0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e"],
      {
        initializer: "initialize",
      }
    );

    console.log("Deploying...: ", ERC721KV1Contract.address);
    await ERC721KV1Contract.deployed();
    console.log("ERC721KV1 deployed to:", ERC721KV1Contract.address);

    expect(await ERC721KV1Contract.name()).to.equal(name);
    expect(await ERC721KV1Contract.symbol()).to.equal(symbol);
    expect(await ERC721KV1Contract.onlyAllowlisted()).to.equal(onlyAllowlisted);
    expect(await ERC721KV1Contract.cost()).to.equal(cost);
    expect(await ERC721KV1Contract.maxSupply()).to.equal(maxSupply);

    return { admin, signer, user1, user2, user3, ERC721KV1Contract };
  }

  it("hoge", async function () {
    const { admin, signer, user1, user2, user3, ERC721KV1Contract } = await loadFixture(deployFixture);
    console.log("hoge");
  });
});
