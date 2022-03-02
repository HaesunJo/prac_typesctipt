// console.log("hello world");

const name = "Haillie",
        age = "29",
        gender = "famale";

const sayHi = (name, age, gender?) => {
    console.log(`Hello, ${name}, You are ${age}, and you are a ${gender}! Nice to meet you.`);
}

sayHi(name, age);

// if you don't declare export{}, TS will compain and show you an error. it's a rule.
export {};