"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHASH = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
// everything has to be a true
Block.validBlockStructure = (aBlock) => typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";
const genesisBlock = new Block(0, "hash20220301", "", "Hello", 123456789);
let blockchain = [genesisBlock];
//this retrun a block array
const getBlockchain = () => blockchain;
// shows the length of the chain
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimestamp = () => Math.round(new Date().getTime() / 1000);
// create a function to generate a new block
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = getNewTimestamp();
    const newHash = Block.calculateBlockHASH(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    addBlock(newBlock);
    return newBlock;
};
// console.log(createNewBlock("hello-test"), createNewBlock("this was a test"));
// console.log(blockchain);
const getHashforBlock = (aBlock) => Block.calculateBlockHASH(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);
// block validation
const isBlockValid = (candidateBlock, previousBlock) => {
    if (!Block.validBlockStructure(candidateBlock)) {
        // console.log("structure fail");
        return false;
    }
    else if (previousBlock.index + 1 !== candidateBlock.index) {
        // console.log("index fail");
        return false;
    }
    else if (previousBlock.hash !== candidateBlock.previousHash) {
        // console.log("hash fail");
        return false;
    }
    else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
        // console.log("get hash block fail");
        return false;
    }
    else {
        return true;
    }
};
//this will return nothing
const addBlock = (candidateBlock) => {
    if (isBlockValid(candidateBlock, getLatestBlock())) {
        blockchain.push(candidateBlock);
    }
};
// let's test
createNewBlock("second Block");
createNewBlock("3rd Block");
createNewBlock("4th Block");
console.log(blockchain);
//# sourceMappingURL=index.js.map