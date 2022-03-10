// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WeebPortal {
    uint256 totalWaves;

    event NewWave(address indexed from, uint256 timestamp , string msg);


    struct Wave{
        address waver;
        string message;
        uint256 timestamp;
    }

    Wave[] waves;

    constructor() {
        console.log("I am smart contract new");
    }

    function wave(string memory message) public{
        totalWaves+=1;
        console.log("%s waved w/ message %s", msg.sender, message);

        waves.push(Wave(msg.sender , message, block.timestamp));

        emit NewWave(msg.sender , block.timestamp , message);

    }

    function getAllWaves() public view returns(Wave[] memory){
        return  waves;
    }

    function getTotalWaves() public view returns(uint256){
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

}