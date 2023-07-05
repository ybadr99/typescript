//basic types [string, number, boolean]
let myName = 'Yousef';
let myAge = 23;
let state = false;
myAge = 24;
myName = 'mohamed';
state = true;
// union types
const userID = 11;
let isActive;
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
let bands = [];
let numbersArray = [];
numbersArray.push(42);
bands.push('Van Halen');
// Tuple-> it's fixed
let p;
p = ['John Doe', 25, true];
p[1] = 0;
// Objects
let myObj;
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
const hr = {
    name: 'John Doe',
    age: 25,
    active: false,
};
const greetPerson = (prop) => {
    let res = `${prop.name.toLowerCase()} is ${prop.age} and he is  ${prop.active ? 'active' : 'not active'} ${prop.hobbies.join('')} `;
    return res;
};
console.log(greetPerson(hr));
