// Utility Types
const updatePerson = (person, updateData) => {
    return Object.assign(Object.assign({}, person), updateData);
};
const person1 = { name: 'John', age: 23, email: 'john@example.com' };
console.log(updatePerson(person1, { email: 'test@example.com' }));
const book1 = {
    title: 'test',
    pageCount: 120,
    author: 'test',
    publicationYear: 1997,
};
console.log(book1);
const ping = {
    name: 'ping pong',
    year: 1,
};
// ping.year = 3;
console.log(ping);
const inventory = {
    apple: 12,
    banana: 13,
    orange: 14,
};
console.log(inventory);
