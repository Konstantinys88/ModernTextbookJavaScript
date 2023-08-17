'use strict';

// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.
// Например:

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(obj) {
    let res = 0;
    for (let value of Object.values(obj)) {
        res += value;
    }
    return res;
}

console.log(sumSalaries(salaries)); // 650

// Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
    name: 'John',
    age: 30,
    asdas: 23
};

function count(obj) {
    return Object.keys(obj).length
}

console.log(count(user)); // 2