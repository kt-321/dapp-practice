// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";

contract ERC20K is ERC20, VRFConsumerBaseV2, Ownable{
    uint256 public _totalSupply = 10000;
    string public _name;
    string public _symbol;

    AggregatorV3Interface public priceFeed;

    // TODO 調整 https://docs.chain.link/vrf/v2/subscription/examples/get-a-random-number
    VRFCoordinatorV2Interface immutable COORDINATOR;
    // Your subscription ID.
    uint64 immutable s_subscriptionId;
    // The gas lane to use, which specifies the maximum gas price to bump to.
    // For a list of available gas lanes on each network,
    // see https://docs.chain.link/docs/vrf-contracts/#configurations
    bytes32 immutable s_keyHash;
    uint256[] public s_randomWords;
    uint256 public s_requestId;
    address s_owner;
    uint32 constant CALLBACK_GAS_LIMIT = 100000;
    // The default is 3, but you can set this higher.
    uint16 constant REQUEST_CONFIRMATIONS = 3;
    // For this example, retrieve 2 random values in one request.
    // Cannot exceed VRFCoordinatorV2.MAX_NUM_WORDS.
    uint32 constant NUM_WORDS = 2;

    constructor(address vrfCoordinator_, bytes32 keyHash, uint64 subscriptionId, address priceFeedAddress) ERC20("ERC20K", "ERK") VRFConsumerBaseV2(vrfCoordinator_) {
        COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator_);
        // ETH / USD
        priceFeed = AggregatorV3Interface(
            priceFeedAddress
        );
        s_keyHash = keyHash;
        s_owner = msg.sender;
        s_subscriptionId = subscriptionId;
        _mint(msg.sender, _totalSupply);
    }

    modifier callerIsUser() {
        require(tx.origin == msg.sender, "The caller is another contract.");
        _;
    }

    event ReturnedRandomness(uint256[] randomWords);

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function transfer(address from, address to, uint256 amount) public onlyOwner {
        _transfer(from, to, amount);
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

    function requestRandomWords() external onlyOwner {
        // Will revert if subscription is not set and funded.
        s_requestId = COORDINATOR.requestRandomWords(
            s_keyHash,
            s_subscriptionId,
            REQUEST_CONFIRMATIONS,
            CALLBACK_GAS_LIMIT,
            NUM_WORDS
        );
    }

    function fulfillRandomWords(uint256 requestId, uint256[] memory randomWords)
        internal
        override
    {
        s_randomWords = randomWords;
        emit ReturnedRandomness(randomWords);
    }
}
