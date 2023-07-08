function identity(arg) {
    return arg;
}
const echo = (arg) => arg;
const result = echo('Hello, TypeScript!');
console.log(result); // Output: "Hello, TypeScript!"
const age = echo(23);
console.log(age);
////////////////////////////////////
const isObj = (arg) => {
    return arg !== null && typeof arg === 'object' && !Array.isArray(arg);
};
console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'John' }));
console.log(isObj(null));
///////////////////////////////////
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const checkBooleanValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(checkBooleanValue(false));
console.log(checkBooleanValue(0));
console.log(checkBooleanValue(true));
console.log(checkBooleanValue(1));
console.log(checkBooleanValue('Yousef'));
console.log(checkBooleanValue(''));
console.log(checkBooleanValue(null));
console.log(checkBooleanValue(undefined));
console.log(checkBooleanValue({})); // modified
console.log(checkBooleanValue({ name: 'Yousef' }));
console.log(checkBooleanValue([])); // modified
console.log(checkBooleanValue([1, 2, 3]));
console.log(checkBooleanValue(NaN));
console.log(checkBooleanValue(-0));
const processUser = (user) => {
    // process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: 'Yousef' }));
//console.log(processUser({ name: 'Yousef'}
/////////////////////////////////////////////////////////////
// interface User extends HasID {
//   name: string;
//   age: number;
// }
const users = [
    { id: 1, name: 'Alice', age: 25, email: 'alice@gmail.com' },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
];
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
const names = getUsersProperty(users, 'name');
console.log(names); // Output: ['Alice', 'Bob', 'Charlie']
///////////////////////////////////////
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject('John');
console.log(store.state);
store.state = 'Yousef';
//store.state = 12
const myState = new StateObject([15]);
myState.state = ['Yousef', 23, true];
console.log(myState.state);
