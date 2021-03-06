# TypeScript - practice wiht block chain

- Learning TypeScript by making a BlockChain with it

### npm init -y
- Initialize with npm init -y
```bash
    npm init -y
```

### Install Typescript
```bash
    npm i -g typescript
```


- Check the version of TS

```bash
    tsc -v
```


- download typescript watch package

```bash
    npm i tsc-watch --save-dev
```

- edit debug in package.json

    ```javascript
        "start": "tsc-watch --onSuccess \"node ./dist/server.js\""
    ```


    - edit tsconfig.json, as of now it will compile everything in src folder. Move index.ts file in to src folder


    ```javascript
        "include": ["src/**/*"],
    ```


    - add this line in compilerOptions


    ```javascript
        "outDir": "dist"
    ```


### First step to do TS

- Create tsconfig.json to set up some rules :
    ```javascript
        {
            "compilerOptions": {
                "module": "commonjs",
                "target": "ES2015",
                "sourceMap": true
            },
            "include": ["index.ts"],
            "exclude": ["node_modules"]
        }
    ```
        

- Create index.ts to test compile the file to normal js file and create js map
    - When you type some TS code, type tsc in your terminal.
    - JS and JS map file will be creted.

- Compile the code with normal JS because Node.js cannot compile TS


### Debug TS

- Add these codes below, when you type "npm start", tsc will be executed 

```bash
    > practice_typescript@1.0.0 prestart
    > tsc


    > practice_typescript@1.0.0 start
    > node index.js

    hello world
```


### Cool to know a little thing about TS

If you type "?" in the parameter like this:

```javascript
    const sayHi = (name, age, gender?) => {
        console.log(`Hello, ${name}, You are ${age}, and you are a ${gender}! Nice to meet you.`);
    }

    sayHi(name, age);
```

it will be shown as "undefined" in console:

```bash
 npm start

    > practice_typescript@1.0.0 prestart
    > tsc


    > practice_typescript@1.0.0 start
    > node index.js

    Hello, Haillie, You are 29, and you are a undefined! Nice to meet you.
```



### Use Interface and Object
- Make an interface, thie doesn't compile to JS. If you want to do something like Interface, you can do 'class'

```javascript
    interface Human {
    name: string;
    age: number;
    gender: string;
}
```


- Create an Object

```javascript
    const person = {
        name: "Haillie",
        gender: "female",
        age: 1993
    };
```


- How to this will be used is:
```javascript
    const sayHi = (person: Human): string => {
    return `Hello, ${person.name}, You are born in ${person.age}, and you are a ${person.gender}!
     Nice to meet you.`;
}

console.log(sayHi(person));
```


- Practice code
```javascript
// console.log("hello world");

// create interface, it works only in TS, doesn't compile to JS
// but if you use interface is more secure on the TS side.
// if you work with react, espress, you have to use class
// interface Human {
//     name: string;
//     age: number;
//     gender: string;
// }

// creaet Obj
// const person = {
//     name: "Haillie",
//     gender: "female",
//     age: 1993
// };

// if you wannt to something like interface, you can go with class
class Human {
    public name: string;
    public age: number;
    public gender: string;

    constructor(name: string, age: number, gender: string) {
			this.name = name;
			this.age = age;
			this.gender = gender;
    }
}

const person = new Human("Haillie - work with class", 1993, "famale");


// this will return string value
const sayHi = (person: Human): string => {
    return `Hello, ${person.name}, You are born in ${person.age}, and you are a ${person.gender}! Nice to meet you.`;
}

console.log(sayHi(person));
// if you don't declare export{}, TS will complain and show you an error. it's a rule.
export {};
```



### Install Crypto-JS
- To make a new block, Hash needs to be calculated, refer to the [link](https://www.npmjs.com/package/crypto-js) 


```bash
	npm install crypto-js
```

- and import crypto-js


```javacsript
	import * as Crypto from "crypto-js";
```