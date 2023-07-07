// Index Signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
todaysTransactions.Pizza = 40;
console.log(todaysNet(todaysTransactions));
// Equivalent to: type PersonKeys = "name" | "age" | "email"
function getProperty(obj, key) {
    return obj[key];
}
const person = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
};
const fitstName = getProperty(person, 'name'); // type of 'name' is 'unknown'
const age = getProperty(person, 'age'); // type of 'age' is 'unknown'
