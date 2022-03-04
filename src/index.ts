import * as CryptoJS from "crypto-js";

class Block {
	static calculateBlockHASH = (
		index: number, 
		previousHash: string, 
		timestamp: number, 
		data: string) : string => CryptoJS.SHA256(
			index + previousHash + timestamp + data).toString();

	// everything has to be a true
	static validBlockStructure = (aBlock: Block) : boolean => 
		typeof aBlock.index === "number" &&
		typeof aBlock.hash === "string" &&
		typeof aBlock.previousHash === "string" &&
		typeof aBlock.timestamp === "number" &&
		typeof aBlock.data === "string";
	
	public index: number;
	public hash: string;
	public previousHash: string;
	public data: string;
	public timestamp: number;

	constructor( 
			index: number,
			hash: string,
			previousHash: string,
			data: string,
			timestamp: number
	) {
			this.index = index;
			this.hash = hash;
			this.previousHash = previousHash;
			this.data = data;
			this.timestamp = timestamp;
	}
}

const genesisBlock:Block = new Block(0, "hash20220301", "", "Hello", 123456789);

let blockchain: [Block] = [genesisBlock];

//this retrun a block array
const getBlockchain = () : Block[] => blockchain;

// shows the length of the chain
const getLatestBlock = () : Block => blockchain[blockchain.length - 1];

const getNewTimestamp = (): number => Math.round(new Date().getTime() / 1000);

// create a function to generate a new block
const createNewBlock = (data: string) : Block => {
	const previousBlock: Block = getLatestBlock();
	const newIndex : number = previousBlock.index + 1;
	const newTimestamp : number = getNewTimestamp();
	const newHash : string = Block.calculateBlockHASH(
		newIndex, 
		previousBlock.hash, 
		newTimestamp, 
		data
	);

	const newBlock : Block = new Block(
		newIndex, 
		newHash, 
		previousBlock.hash, 
		data, 
		newTimestamp);

	addBlock(newBlock);

	return newBlock;
};

// console.log(createNewBlock("hello-test"), createNewBlock("this was a test"));
// console.log(blockchain);

const getHashforBlock = (aBlock: Block) : string => 
	Block.calculateBlockHASH(
		aBlock.index,
		aBlock.previousHash, 
		aBlock.timestamp, 
		aBlock.data
	);

// block validation
const isBlockValid = (candidateBlock : Block, previousBlock: Block) : boolean => {
	if(!Block.validBlockStructure(candidateBlock)){
		// console.log("structure fail");
		return false;
	} else if (previousBlock.index + 1 !== candidateBlock.index){
		// console.log("index fail");
		return false;
	} else if (previousBlock.hash !== candidateBlock.previousHash){
		// console.log("hash fail");
		return false;
	} else if (getHashforBlock(candidateBlock) !== candidateBlock.hash){
		// console.log("get hash block fail");
		return false;
	} else {
		return true;
	}
};

//this will return nothing
const addBlock = (candidateBlock: Block) : void => {
	if (isBlockValid(candidateBlock, getLatestBlock())){
		blockchain.push(candidateBlock);
	}
};

// let's test
createNewBlock("second Block");
createNewBlock("3rd Block");
createNewBlock("4th Block");

console.log(blockchain);



export {};