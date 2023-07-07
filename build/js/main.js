class Coder {
    constructor(name, age, lang = 'JavaScript') {
        this.name = name;
        this.age = age;
        this.lang = lang;
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
    constructor(computer, name, age, lang = 'javascript') {
        super(name, age, lang);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I Write ${this.lang}`;
    }
}
const badr = new WebDev('mAC', 'badr', 22);
console.log(badr.getLang());
class Programmer {
    constructor(name, lang) {
        this.name = name;
        this.lang = lang;
    }
    play(computer) {
        return `${this.name} Write ${this.lang} on ${computer} `;
    }
}
const Ali = new Programmer('Ali', 'PHP');
console.log(Ali.play('Hp'));
//////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Amy.id);
console.log(Steve.id);
console.log(John.id);
console.log(Peeps.count);
//////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
// MyBands.data = ['Van Halen', 5150]; // must be string data
