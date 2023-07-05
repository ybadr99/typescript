//basic types [string, number, boolean]
let myName: string = 'Yousef';
let myAge: number = 23;
let state: boolean = false;

myAge = 24;
myName = 'mohamed';
state = true;

// union types
const userID: string | number = 11;
let isActive: boolean | number;
isActive = false;
isActive = 12;

//arrays
let stringArr = ['one', 'hey', 'Dave'];

let guitars = ['Strat', 'Les Paul', 5150];

let mixedData = ['EVH', 1984, true];

stringArr[0] = 'John';
stringArr.push('hey');

guitars[0] = 1984;
guitars.unshift('Jim');

let test = [];
let bands: string[] = [];
let numbersArray: number[] = [];
numbersArray.push(42);
bands.push('Van Halen');

// Tuple-> it's fixed
let p: [string, number, boolean];
p = ['John Doe', 25, true];

p[1] = 0;

// Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const person = {
  name: 'John Doe',
  myAge: 25,
};

person.name = 'yousef';
person.myAge = 23;

interface Person {
  name?: string;
  age: number;
  active: boolean;
  hobbies?: (string | number)[];
}

const hr: Person = {
  name: 'John Doe',
  age: 25,
  active: false,
};

const greetPerson = (prop: Person) => {
  let res = `${prop.name.toLowerCase()} is ${prop.age} and he is  ${
    prop.active ? 'active' : 'not active'
  } ${prop.hobbies.join('')} `;

  return res;
};

console.log(greetPerson(hr));
