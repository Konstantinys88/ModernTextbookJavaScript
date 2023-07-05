'use strict';

// const user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
// console.log(user);


// function isEmpty(obj) {
//     for (let key in obj) {
//         return "Чтото есть";
//     }
//     return "Пусто";
// }

// console.log(isEmpty(user));

// let salaries = {
// John: 100,
// Ann: 160,
// Pete: 130
// }



// function calkPay(obj) {
//     let sum = 0;
//     for (let key in obj) {
//         sum += obj[key];
//     }
//     return sum;
// }

// console.log(calkPay(salaries));

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Например:

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};


function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) === "number") {
            obj[key] *= 2;
        }
    }
    return obj;
}

// multiplyNumeric(menu);
console.log(multiplyNumeric(menu));