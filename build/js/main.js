// Literal types
let myName;
let userName;
userName = 'Amy';
//Functions
const logMsg = (message) => console.log(message);
const add = (a, b) => a + b;
logMsg('Hello!');
logMsg(add(2, 3));
// interface mathFunction {
//     (a: number, b: number): number
// }
const multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 3));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// custom guard
const isNumber = (value) => typeof value === 'number' ? true : false;
// use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('this cannot be happened!');
};
logMsg(numberOrString(12));
