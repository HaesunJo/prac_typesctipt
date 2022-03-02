"use strict";
// console.log("hello world");
Object.defineProperty(exports, "__esModule", { value: true });
// const name = "Haillie",
//         age = "29",
//         gender = "famale";
// this will return string value
const sayHi = (name, age, gender) => {
    return `Hello, ${name}, You are ${age}, and you are a ${gender}! Nice to meet you.`;
};
const sayHiVoid = (name, age, gender) => {
    return console.log(`Hello, ${name}, You are ${age}, and you are a ${gender}! Nice to meet you.`);
};
sayHiVoid("Haillie-void", 1993, "famale");
console.log(sayHi("Haillie", 1993, "famale"));
//# sourceMappingURL=index.js.map