/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import { FactoryOptions, HardhatEthersHelpers as HardhatEthersHelpersBase } from "@nomiclabs/hardhat-ethers/types";
import { ethers } from "ethers";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV3Interface__factory>;
    getContractFactory(
      name: "VRFCoordinatorV2Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFCoordinatorV2Interface__factory>;
    getContractFactory(
      name: "VRFConsumerBaseV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFConsumerBaseV2__factory>;
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "IERC1822ProxiableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822ProxiableUpgradeable__factory>;
    getContractFactory(
      name: "IERC2981Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC2981Upgradeable__factory>;
    getContractFactory(
      name: "IBeaconUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeaconUpgradeable__factory>;
    getContractFactory(
      name: "ERC1967UpgradeUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967UpgradeUpgradeable__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "UUPSUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSUpgradeable__factory>;
    getContractFactory(
      name: "PausableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PausableUpgradeable__factory>;
    getContractFactory(
      name: "ERC2981Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC2981Upgradeable__factory>;
    getContractFactory(
      name: "ERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Upgradeable__factory>;
    getContractFactory(
      name: "IERC20MetadataUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20MetadataUpgradeable__factory>;
    getContractFactory(
      name: "IERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Upgradeable__factory>;
    getContractFactory(
      name: "ERC721Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Upgradeable__factory>;
    getContractFactory(
      name: "IERC721MetadataUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721MetadataUpgradeable__factory>;
    getContractFactory(
      name: "IERC721ReceiverUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721ReceiverUpgradeable__factory>;
    getContractFactory(
      name: "IERC721Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Upgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "ERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165Upgradeable__factory>;
    getContractFactory(
      name: "IERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165Upgradeable__factory>;
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC2771Context",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC2771Context__factory>;
    getContractFactory(
      name: "MinimalForwarder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MinimalForwarder__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(name: "Box", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.Box__factory>;
    getContractFactory(
      name: "BoxV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BoxV2__factory>;
    getContractFactory(
      name: "ERC20K",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20K__factory>;
    getContractFactory(
      name: "ERC721dyn",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721dyn__factory>;
    getContractFactory(
      name: "ERC721K",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721K__factory>;
    getContractFactory(
      name: "ERC721KV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721KV1__factory>;
    getContractFactory(
      name: "ERC721KV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721KV2__factory>;
    getContractFactory(
      name: "Greeter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Greeter__factory>;
    getContractFactory(
      name: "ITManToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITManToken__factory>;
    getContractFactory(
      name: "TryInlineAssembly",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TryInlineAssembly__factory>;
    getContractFactory(
      name: "ERC721A__IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721A__IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC721A",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721A__factory>;
    getContractFactory(
      name: "IERC721A",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721A__factory>;

    getContractAt(
      name: "AggregatorV3Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorV3Interface>;
    getContractAt(
      name: "VRFCoordinatorV2Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFCoordinatorV2Interface>;
    getContractAt(
      name: "VRFConsumerBaseV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFConsumerBaseV2>;
    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "IERC1822ProxiableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822ProxiableUpgradeable>;
    getContractAt(
      name: "IERC2981Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC2981Upgradeable>;
    getContractAt(
      name: "IBeaconUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeaconUpgradeable>;
    getContractAt(
      name: "ERC1967UpgradeUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967UpgradeUpgradeable>;
    getContractAt(name: "Initializable", address: string, signer?: ethers.Signer): Promise<Contracts.Initializable>;
    getContractAt(name: "UUPSUpgradeable", address: string, signer?: ethers.Signer): Promise<Contracts.UUPSUpgradeable>;
    getContractAt(
      name: "PausableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PausableUpgradeable>;
    getContractAt(
      name: "ERC2981Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC2981Upgradeable>;
    getContractAt(
      name: "ERC20Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Upgradeable>;
    getContractAt(
      name: "IERC20MetadataUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20MetadataUpgradeable>;
    getContractAt(
      name: "IERC20Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Upgradeable>;
    getContractAt(
      name: "ERC721Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Upgradeable>;
    getContractAt(
      name: "IERC721MetadataUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721MetadataUpgradeable>;
    getContractAt(
      name: "IERC721ReceiverUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721ReceiverUpgradeable>;
    getContractAt(
      name: "IERC721Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Upgradeable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "ERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165Upgradeable>;
    getContractAt(
      name: "IERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165Upgradeable>;
    getContractAt(name: "AccessControl", address: string, signer?: ethers.Signer): Promise<Contracts.AccessControl>;
    getContractAt(name: "IAccessControl", address: string, signer?: ethers.Signer): Promise<Contracts.IAccessControl>;
    getContractAt(name: "Ownable", address: string, signer?: ethers.Signer): Promise<Contracts.Ownable>;
    getContractAt(name: "ERC2771Context", address: string, signer?: ethers.Signer): Promise<Contracts.ERC2771Context>;
    getContractAt(
      name: "MinimalForwarder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MinimalForwarder>;
    getContractAt(name: "ERC20", address: string, signer?: ethers.Signer): Promise<Contracts.ERC20>;
    getContractAt(name: "IERC20Metadata", address: string, signer?: ethers.Signer): Promise<Contracts.IERC20Metadata>;
    getContractAt(name: "IERC20", address: string, signer?: ethers.Signer): Promise<Contracts.IERC20>;
    getContractAt(name: "ERC721", address: string, signer?: ethers.Signer): Promise<Contracts.ERC721>;
    getContractAt(name: "IERC721Metadata", address: string, signer?: ethers.Signer): Promise<Contracts.IERC721Metadata>;
    getContractAt(name: "IERC721", address: string, signer?: ethers.Signer): Promise<Contracts.IERC721>;
    getContractAt(name: "IERC721Receiver", address: string, signer?: ethers.Signer): Promise<Contracts.IERC721Receiver>;
    getContractAt(name: "ERC165", address: string, signer?: ethers.Signer): Promise<Contracts.ERC165>;
    getContractAt(name: "IERC165", address: string, signer?: ethers.Signer): Promise<Contracts.IERC165>;
    getContractAt(name: "Box", address: string, signer?: ethers.Signer): Promise<Contracts.Box>;
    getContractAt(name: "BoxV2", address: string, signer?: ethers.Signer): Promise<Contracts.BoxV2>;
    getContractAt(name: "ERC20K", address: string, signer?: ethers.Signer): Promise<Contracts.ERC20K>;
    getContractAt(name: "ERC721dyn", address: string, signer?: ethers.Signer): Promise<Contracts.ERC721dyn>;
    getContractAt(name: "ERC721K", address: string, signer?: ethers.Signer): Promise<Contracts.ERC721K>;
    getContractAt(name: "ERC721KV1", address: string, signer?: ethers.Signer): Promise<Contracts.ERC721KV1>;
    getContractAt(name: "ERC721KV2", address: string, signer?: ethers.Signer): Promise<Contracts.ERC721KV2>;
    getContractAt(name: "Greeter", address: string, signer?: ethers.Signer): Promise<Contracts.Greeter>;
    getContractAt(name: "ITManToken", address: string, signer?: ethers.Signer): Promise<Contracts.ITManToken>;
    getContractAt(
      name: "TryInlineAssembly",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TryInlineAssembly>;
    getContractAt(
      name: "ERC721A__IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721A__IERC721Receiver>;
    getContractAt(name: "ERC721A", address: string, signer?: ethers.Signer): Promise<Contracts.ERC721A>;
    getContractAt(name: "IERC721A", address: string, signer?: ethers.Signer): Promise<Contracts.IERC721A>;

    // default types
    getContractFactory(name: string, signerOrOptions?: ethers.Signer | FactoryOptions): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(nameOrAbi: string | any[], address: string, signer?: ethers.Signer): Promise<ethers.Contract>;
  }
}
