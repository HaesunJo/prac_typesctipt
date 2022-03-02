// console.log("hello world");

// const name = "Haillie",
//         age = "29",
//         gender = "famale";

// this will return string value
const sayHi = (name: string , age: number, gender: string): string => {
    return `Hello, ${name}, You are ${age}, and you are a ${gender}! Nice to meet you.`;
}


const sayHiVoid = (name: string , age: number, gender: string): void => {
    return console.log(`Hello, ${name}, You are ${age}, and you are a ${gender}! Nice to meet you.`);
}

sayHiVoid("Haillie-void", 1993, "famale");

console.log(sayHi("Haillie", 1993, "famale"));

// if you don't declare export{}, TS will compain and show you an error. it's a rule.
export {};