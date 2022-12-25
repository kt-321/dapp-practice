// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";

contract ERC721KV1 is ERC721Upgradeable{
    // counter for tokenId
    using CountersUpgradeable for CountersUpgradeable.Counter;
    CountersUpgradeable.Counter private _tokenIds;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    // initialize updatable in openzeppelin
    function initialize() public initializer {
        // initialize ERC721
        __ERC721_init("ERC721K", "ERK");
        // Ownable（generate onlyOwner）
        // __Ownable_init();
    }

    function mint(address to) public {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        _safeMint(to, newTokenId);
    }

    function transfer(address from, address to, uint256 tokenId) public {
        _transfer(from, to, tokenId);
    }

    function burn(uint256 tokenId) public {
        _burn(tokenId);
    }
}
