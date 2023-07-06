'use strict';

// Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

// let calculator = {
//   read() {
//     this.number1 = +prompt("Введите первое число:", 0)
//     this.number2 = +prompt("Введите второе число:", 0)
//   },

//   sum() {
//     return this.number1 + this.number2
//   },

//   mul() {
//     return this.number1 * this.number2
//   }

// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// console.log(calculator.number1);
// console.log(calculator.number2);


let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // показывает текущую ступеньку
        console.log(this.step);
        return this;
    }
};


// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep();

ladder.up().up().down().showStep().down().showStep();