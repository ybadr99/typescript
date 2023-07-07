class Coder {
  constructor(
    public name: string,
    private age: number,
    protected lang: string = 'JavaScript'
  ) {
    this.name = name;
    this.age = age;
    this.lang = lang;
  }

  getAge() {
    return `I'm ${this.name} I am ${this.age}`;
  }
}

const yousef = new Coder('yousef', 23, 'Ruby');
console.log(yousef.name);
console.log(yousef.getAge());

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    age: number,
    lang: string = 'javascript'
  ) {
    super(name, age, lang);
    this.computer = computer;
  }

  getLang() {
    return `I Write ${this.lang}`;
  }
}

const badr = new WebDev('mAC', 'badr', 22);
console.log(badr.getLang());
/////////////////////////////////////

interface Person {
  name: string;
  lang: string;
  play(action: string): string;
}

class Programmer implements Person {
  name: string;
  lang: string;

  constructor(name: string, lang: string) {
    this.name = name;
    this.lang = lang;
  }

  play(computer: string) {
    return `${this.name} Write ${this.lang} on ${computer} `;
  }
}

const Ali = new Programmer('Ali', 'PHP');
console.log(Ali.play('Hp'));
//////////////////////////////////////

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');

console.log(Amy.id);
console.log(Steve.id);
console.log(John.id);
console.log(Peeps.count);
//////////////////////////////////

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
      this.dataState = value;
      return;
    } else throw new Error('Param is not an array of strings');
  }
}

const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
// MyBands.data = ['Van Halen', 5150]; // must be string data
