import { expect } from "chai";
import { loadFixture } from "ethereum-waffle";
import { ethers, upgrades } from "hardhat";
import { keccak256 } from "keccak256";
import { MerkleTree } from "merkletreejs";

// import "hardhat/console.sol";
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
  const onlyAllowlisted = false;
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
    const [admin, user1, user2, user3] = await ethers.getSigners();
    const ERC721KV1Factory = new ERC721KV1__factory(admin);

    const contract = await upgrades.deployProxy(ERC721KV1Factory, ["0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e"], {
      initializer: "initialize",
    });

    console.log("Deploying...: ", contract.address);
    await contract.deployed();
    console.log("ERC721KV1 deployed to:", contract.address);

    expect(await contract.name()).to.equal(name);
    expect(await contract.symbol()).to.equal(symbol);
    expect(await contract.onlyAllowlisted()).to.equal(onlyAllowlisted);
    expect(await contract.cost()).to.equal(cost);
    // expect(await contract.maxSupply()).to.equal(maxSupply);

    return { admin, user1, user2, user3, contract };
  }

  describe("setOnlyAllowlisted", function () {
    it("admin can execute setOnlyAllowlisted", async function () {
      const { admin, user1, user2, user3, contract } = await loadFixture(deployFixture);

      const connectedAdmin = ERC721KV1__factory.connect(contract.address, admin);
      const connectedUser1 = ERC721KV1__factory.connect(contract.address, user1);

      await connectedAdmin.setOnlyAllowlisted(true);
      expect(await contract.onlyAllowlisted()).to.equal(true);
    });

    it("not-admin user can't execute setOnlyAllowlisted", async function () {
      const { admin, user1, user2, user3, contract } = await loadFixture(deployFixture);

      const connectedUser1 = ERC721KV1__factory.connect(contract.address, user1);

      await expect(connectedUser1.setOnlyAllowlisted(true)).revertedWith("Ownable: caller is not the owner");
    });
  });

  describe("mint", function () {
    it("if onlyAllowlisted is true", async function () {
      const { admin, user1, user2, user3, contract } = await loadFixture(deployFixture);
      // TODO
      // setmerkleroot

      const connectedAdmin = ERC721KV1__factory.connect(contract.address, admin);
      const connectedUser1 = ERC721KV1__factory.connect(contract.address, user1);
      await connectedAdmin.setOnlyAllowlisted(true);

      // allow user1 to mint 5 tokens
      await connectedAdmin
        .setMerkleRoot("0x81153aa1dd3241905eabdd87dfedf6b5f99983cc923512307c025520a7b51cf2")
        .then(() => {
          console.log("successed setMerkleRoot");
        })
        .catch((err) => {
          // TODO fail the test
          console.log("failed setMerkleRoot:", err);
        });

      const claimingAddress = ethers.utils.solidityKeccak256(["address", "uint256"], [user1.address, 5]);

      console.log("+++claimingAddress:", claimingAddress);

      const leafNodes = [claimingAddress];
      const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
      const hexProof = merkleTree.getHexProof(claimingAddress);

      await connectedUser1
        .mint(5, hexProof, {
          value: ethers.utils.parseEther("0.01"),
        })
        .then(() => console.log("successed mint"))
        .catch((err) => {
          console.log("failed mint:"), err;
        });

      expect(await contract.balanceOf(user1.address)).to.be.equal(1);
      expect(await contract.ownerOf(1)).to.be.equal(user1.address);
    });
  });

  // describe("transfer", function () {
  //   it("Should transfer tokens between accounts", async function () {
  //     const { admin, user1, user2, user3, contract } = await loadFixture(deployFixture);

  //     const connectedAdmin = ERC721KV1__factory.connect(contract.address, admin);
  //     const connectedUser1 = ERC721KV1__factory.connect(contract.address, user1);
  //     const connectedUser2 = ERC721KV1__factory.connect(contract.address, user2);

  //     // await connectedUser1
  //     //   .mint(10, hexProof, {
  //     //     value: ethers.utils.parseEther("0.01"),
  //     //   })
  //     //   .then(() => console.log("successed mint"))
  //     //   .catch((err) => {
  //     //     console.log("failed mint:"), err;
  //     //   });

  //   });
  // });
});
