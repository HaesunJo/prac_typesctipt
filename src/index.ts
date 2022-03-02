// console.log("hello world");

// create interface, it works only in TS
interface Human {
    name: string;
    age: number;
    gender: string;
}

// creaet Obj
const person = {
    name: "Haillie",
    gender: "female",
    age: 1993
};


// this will return string value
const sayHi = (person: Human): string => {
    return `Hello, ${person.name}, You are born in ${person.age}, and you are a ${person.gender}! Nice to meet you.`;
}

console.log(sayHi(person));
// if you don't declare export{}, TS will compain and show you an error. it's a rule.
export {};