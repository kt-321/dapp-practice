import { ethers, upgrades } from "hardhat";

// import { ERC20KV1__factory } from "../src/types";

async function main() {
  // deployContract
  // const ERC721KV1Factory = new ERC721KV1__factory();

  const ERC20KFactory = await ethers.getContractFactory("ERC20K");
  const ERC20KContract = await ERC20KFactory.deploy(
    "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
    "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
    8392,
    "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e"
  );

  console.log("Deploying...: ", ERC20KContract.address);
  await ERC20KContract.deployed();
  console.log("ERC20KV1 deployed to:", ERC20KContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
