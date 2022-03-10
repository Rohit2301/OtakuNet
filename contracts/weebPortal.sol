// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WeebPortal {
    uint256 totalWaves;

    uint256 private seed;

    event NewWave(address indexed from, uint256 timestamp, string msg);

    struct Wave {
        address waver;
        string message;
        uint256 timestamp;
    }

    mapping(address => uint256) public lastWavedAt;

    Wave[] waves;

    constructor() payable {
        console.log("I am smart contract new");
        seed = (block.difficulty + block.timestamp) % 100;
    }

    function wave(string memory message) public {
        require(
            lastWavedAt[msg.sender] + 15 minutes <= block.timestamp,
            "Wait for cooldown to complete"
        );
        lastWavedAt[msg.sender] = block.timestamp;

        totalWaves += 1;
        console.log("%s waved w/ message %s", msg.sender, message);

        waves.push(Wave(msg.sender, message, block.timestamp));

        seed = (block.difficulty + block.timestamp + seed) % 100;

        if (seed < 50) {
            console.log("%s won!", msg.sender);

            uint256 prizeAmount = 0.00001 ether;

            require(
                prizeAmount <= address(this).balance,
                "Trying to withdraw more money than the contract has."
            );
            (bool success, ) = (msg.sender).call{value: prizeAmount}(" ");
            require(success, "Failed to withdraw money");
        }
        emit NewWave(msg.sender, block.timestamp, message);
    }

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}
