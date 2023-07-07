// Index Signatures

// interface TransactionObj {
//   readonly [index: string]: number;
// }

interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);

let prop: string = 'Pizza';
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

todaysTransactions.Pizza = 40;
console.log(todaysNet(todaysTransactions));
///////////////////////////////////////////////////////
interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonKeys = keyof Person;
// Equivalent to: type PersonKeys = "name" | "age" | "email"

function getProperty(obj: Person, key: keyof Person): unknown {
  return obj[key];
}

const person: Person = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com',
};

const fitstName = getProperty(person, 'name'); // type of 'name' is 'unknown'
const age = getProperty(person, 'age'); // type of 'age' is 'unknown'
