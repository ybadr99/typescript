function identity<T>(arg: T): T {
  return arg;
}

const echo = <T>(arg: T): T => arg;

const result = echo<string>('Hello, TypeScript!');
console.log(result); // Output: "Hello, TypeScript!"
const age = echo<number>(23);
console.log(age);

////////////////////////////////////
const isObj = <T>(arg: T): boolean => {
  return arg !== null && typeof arg === 'object' && !Array.isArray(arg);
};

console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'John' }));
console.log(isObj(null));
///////////////////////////////////

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

///////////////////////////////////////////////
type boolCheck<T> = { arg: T; is: boolean };

const checkBooleanValue = <T>(arg: T): boolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
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
//////////////////////////////////////////////////////
interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
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

const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const names: string[] = getUsersProperty(users, 'name');
console.log(names); // Output: ['Alice', 'Bob', 'Charlie']

///////////////////////////////////////

class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject('John');
console.log(store.state);
store.state = 'Yousef';
//store.state = 12

const myState = new StateObject<(string | number | boolean)[]>([15]);
myState.state = ['Yousef', 23, true];
console.log(myState.state);
