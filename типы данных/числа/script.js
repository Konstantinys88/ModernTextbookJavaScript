'use strict';

// function sumNumber () {
//     const a = +prompt("введите число")
//     const b = +prompt("введите число")
//     return alert(a + b);
// }

// sumNumber();


// alert( Math.round(6.35 * 10) / 10 );

// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.


// function readNumber() {
//     const a = +prompt("Введите число");
//     if (Number.isFinite(a)) {
//         return alert(a);
//     }
//     else {
//         readNumber();
//     }
// }

// readNumber();

// function random(min, max) {
//     const a = min + Math.random() * (max - min); 
//     return Math.round(a)
// }

// console.log(random(1,3))

let a = 1 + Math.random()  * (10);
console.log(Math.round(a));