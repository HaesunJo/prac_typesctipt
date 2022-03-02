"use strict";
// console.log("hello world");
Object.defineProperty(exports, "__esModule", { value: true });
// creaet Obj
const person = {
    name: "Haillie",
    gender: "female",
    age: 1993
};
// this will return string value
const sayHi = (person) => {
    return `Hello, ${person.name}, You are born in ${person.age}, and you are a ${person.gender}! Nice to meet you.`;
};
console.log(sayHi(person));
//# sourceMappingURL=index.js.map