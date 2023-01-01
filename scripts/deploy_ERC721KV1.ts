import { ethers, upgrades } from "hardhat";

// import { ERC721KV1__factory } from "../src/types";

async function main() {
  // deployContract
  // const ERC721KV1Factory = new ERC721KV1__factory();

  const ERC721KV1Factory = await ethers.getContractFactory("ERC721KV1");
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
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
