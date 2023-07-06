'use strict';


function User(name, age) {
    this.name = name;
    this.age = age;

    this.saiHi = function () {
        console.log(`Привет меня зовут ${this.name} , мне ${this.age} лет`);
    }
}

let John = new User("John", 23);
John.saiHi();

const Oleg = new User("Oleg", 123);
Oleg.saiHi();


let obj = {
    name: "adasd"
};

function A() { return obj; }
function B() { return obj; }

console.log(new A() == new B());



// function Calculator() {
//     this.read = function() {
//         this.number1 = +prompt("Введите первое число:", 0)
//         this.number2 = +prompt("Введите второе число:", 0)
//     }

//     this.sum = function() {
//         return this.number1 + this.number2;
//     }

//     this.mul = function() {
//         return this.number1 * this.number2
//     }
// }

// const calc = new Calculator();
// calc.read();
// console.log("sum " + calc.sum());
// console.log("mul " + calc.mul());

// console.log(calc.number1);
// console.log(calc.number2);

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function(number) {
        return this.value = this.value + number;
    }
}

let accumulator = new Accumulator(1);
console.log(accumulator.value);

accumulator.read(1);
console.log(accumulator.value);

accumulator.read(2);
console.log(accumulator.value);

accumulator.read(3);
console.log(accumulator.value);

accumulator.read(3);
console.log(accumulator.value);
