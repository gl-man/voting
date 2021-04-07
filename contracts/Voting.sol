//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;

import "hardhat/console.sol";

contract Voting {
    using console for *;

    // Owner of this Voting Mechanism
    address public owner;

    // A Type for Voting Proposals
    struct Proposal {
        string name;
        string desc;
        uint8 status;
    }

    // List of Options to vote for.
    struct Option {
        string name;
        string desc;
    }

    // A mapping of address to vote counts
    mapping(address => Proposal[]) private proposals;
    mapping(bytes32 => Option[]) private options;
    mapping(bytes32 => mapping(address => uint)) private votes;

    // On contract Creation, set the creator to
    // the owner of the contract
    constructor() {
        owner = msg.sender;
    }

    // Check if has name
    modifier hasName(string memory name) {
        require(bytes(name).length != 0);
        _;
    }

    // Check if has Description
    modifier hasDesc(string memory desc) {
        require(bytes(desc).length != 0);
        _;
    }

    // CreateProposal Function
    function createProposal(
        string memory name,
        string memory desc
    ) public
    hasName(name)
    hasDesc(desc)
    returns (bool) {
        // Generate Unique ID for proposal
        bytes20 hash = bytes20(sha256(abi.encodePacked(msg.sender, block.timestamp)));

        // Propagating Mappings
        proposals[msg.sender].name = name;
        proposals[msg.sender].desc = desc;

        // Successful
        return true;
    }

    // Create Option Function
    function createOption(
        string memory name,
        string memory desc
    ) public hasName(name) returns (bool) {
        Option storage o;

        o.name = name;
        o.desc = desc;

        options[proposals[msg.sender]][options[proposals[msg.sender]].length + 1] = o;

        return true;
    }

    function voteOption(address proposer, string memory option) public payable returns (uint) {
        require(msg.value > 0);
        proposals[proposer].options[option].votes[msg.sender] += msg.value;
        return 0;
    }

    function endVoting() public {

    }
}
