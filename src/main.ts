// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// Literal types
let myName: 'Dave';

let userName: 'Dave' | 'John' | 'Amy';
userName = 'Amy';

//Functions
const logMsg = (message: stringOrNumber): void => console.log(message);

const add = (a: number, b: number): number => a + b;
logMsg('Hello!');
logMsg(add(2, 3));

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//     (a: number, b: number): number
// }

const multiply: mathFunction = function (c, d) {
  return c * d;
};
logMsg(multiply(2, 3));

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};

// default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(10, 2, 3));

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

// custom guard
const isNumber = (value: any): boolean =>
  typeof value === 'number' ? true : false;

// use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string';
  if (isNumber(value)) return 'number';

  return createError('this cannot be happened!');
};

logMsg(numberOrString(12))