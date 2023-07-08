// Utility Types

//Partials

interface Person {
  name: string;
  age: number;
  email: string;
}

const updatePerson = (person: Person, updateData: Partial<Person>) => {
  return { ...person, ...updateData };
};

const person1: Person = { name: 'John', age: 23, email: 'john@example.com' };

console.log(updatePerson(person1, { email: 'test@example.com' }));

//Required
interface Book {
  title?: string;
  author?: string;
  publicationYear: number;
  pageCount?: number;
}

type RequiredBook = Required<Book>;

const book1: RequiredBook = {
  title: 'test',
  pageCount: 120,
  author: 'test',
  publicationYear: 1997,
};

console.log(book1);

// Readonly
interface Skills {
  readonly name: string;
  readonly year: number;
}

type ReadonlySkills = Readonly<Skills>;

const ping: ReadonlySkills = {
  name: 'ping pong',
  year: 1,
};

// ping.year = 3;

console.log(ping);

// Record
type Fruit = 'apple' | 'banana' | 'orange';

const inventory: Record<Fruit, number> = {
  apple: 12,
  banana: 13,
  orange: 14,
};

console.log(inventory);
