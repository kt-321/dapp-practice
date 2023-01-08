// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
// import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
// import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract ERC20KV1 is ERC20Upgradeable, OwnableUpgradeable{
    AggregatorV3Interface public priceFeed;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    // initialize updatable in openzeppelin
    function initialize(address priceFeedAddress) public initializer {
        // initialize ERC721
        __ERC20_init("ERC20K", "ERK");
        // Ownable（generate onlyOwner）
        __Ownable_init();

        // ETH / USD
        priceFeed = AggregatorV3Interface(
            priceFeedAddress
        );
    }

    modifier callerIsUser() {
        require(tx.origin == msg.sender, "The caller is another contract.");
        _;
    }

    // TODO tokenURI

    function getLatestPrice() public view returns (int256) {
        (
            uint80 roundID,
            int256 price,
            uint256 startedAt,
            uint256 timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        // for ETH / USD price is scaled up by 10 ** 8
        return price / 1e8;
    }
}
