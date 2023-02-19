// import { loadFixture } from "ethereum-waffle";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { keccak256 } from "keccak256";

// import "hardhat/console.sol";
import { ERC20K__factory } from "../src/types";

describe("ERC20K", () => {
  const name = "ERC20K";
  const symbol = "ERK";
  const _totalSupply = 10000;
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
    const [admin, user1, user2, user3] = await ethers.getSigners();

    const ERC20KFactory = new ERC20K__factory(admin);

    const contract = await ERC20KFactory.deploy(
      "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
      "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
      8392,
      "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e"
    );

    console.log("Deploying...: ", contract.address);
    await contract.deployed();
    console.log("ERC20K deployed to:", contract.address);

    expect(await contract.name()).to.equal(name);
    expect(await contract.symbol()).to.equal(symbol);
    expect(await contract._totalSupply()).to.equal(_totalSupply);

    // TODO

    return { admin, user1, user2, user3, contract };
  }

  describe("isAdmin", function () {
    it("admin address has admin role", async function () {
      const { admin, user1, user2, user3, contract } = await loadFixture(deployFixture);

      const connectedAdmin = ERC20K__factory.connect(contract.address, admin);

      expect(await connectedAdmin.isAdmin(admin.address)).to.equal(true);
    });
  });
  //   describe("mint", function () {
  //     it("admin can execute setOnlyAllowlisted", async function () {
  //       const { admin, user1, user2, user3, contract } = await loadFixture(deployFixture);

  //       const connectedAdmin = ERC721KV1__factory.connect(contract.address, admin);

  //       await connectedAdmin.setOnlyAllowlisted(true);
  //       expect(await contract.onlyAllowlisted()).to.equal(true);
  //     });

  //   });
});
