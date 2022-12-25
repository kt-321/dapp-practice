import { ethers, upgrades } from "hardhat";

const PROXY_CONTRACT_ID = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"; // 最初にデプロイした時のコントラクトID。

async function main() {
  const ERC721KFactory = await ethers.getContractFactory("ERC721KV2");
  const ERC721KContract = await upgrades.upgradeProxy(PROXY_CONTRACT_ID, ERC721KFactory, {});
  console.log("Deploying...: ", ERC721KContract.address);
  await ERC721KContract.deployed();
  console.log("ERC721KV2 deployed to:", ERC721KContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
