// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract ERC721KV1 is ERC721Upgradeable, OwnableUpgradeable{
    bytes32 public merkleRoot;
    bool public onlyAllowlisted;
    mapping(address => uint256) public userMintedAmount;
    uint256 public cost;

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
        __Ownable_init();

        onlyAllowlisted = true;
        cost = 3;
    }

    modifier callerIsUser() {
        require(tx.origin == msg.sender, "The caller is another contract.");
        _;
    }

    function mint(uint256 _maxMintAmount, bytes32[] calldata _merkleProof) public payable callerIsUser {
        // TODO add require
        require(cost <= msg.value, "insufficient funds");
        uint256 maxMintAmountPerAddress;
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        if(onlyAllowlisted == true) {
            //Merkle tree
            bytes32 leaf = keccak256(abi.encodePacked(msg.sender, _maxMintAmount));
            require(MerkleProof.verify(_merkleProof, merkleRoot, leaf), "user is not allowlisted");
            maxMintAmountPerAddress = _maxMintAmount;
        }

        userMintedAmount[msg.sender] ++;

        _safeMint(msg.sender, newTokenId);
    }

    function transfer(address from, address to, uint256 tokenId) public {
        _transfer(from, to, tokenId);
    }

    function burn(uint256 tokenId) public {
        _burn(tokenId);
    }

    function setMerkleRoot(bytes32 _merkleRoot) public onlyOwner {
        merkleRoot = _merkleRoot;
    }

    function setOnlyAllowlisted(bool _state) public onlyOwner {
        onlyAllowlisted = _state;
    }
}
