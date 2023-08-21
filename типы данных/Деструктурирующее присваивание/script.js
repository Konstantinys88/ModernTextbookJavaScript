'use strict';


// Деструктурирующее присваивание
// важность: 5
// У нас есть объект:

// let user = {
//   name: "John",
//   years: 30
// };

// Напишите деструктурирующее присваивание, которое:
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:

let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
// ... = user

// let {name} = user;
// let {years: age} = user;
// let {isAdmin = false} = user;

// console.log( name ); // John
// console.log( age ); // 30
// console.log( isAdmin ); // false


// У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Pete3": 600,
  "Mary": 250,
  "Mary2": 550,
  "qwe": 300,
  "qwe7": 700,
};
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function topSalary(salaries) {
    let res = Object.entries(salaries);
    let bigSalaris = 0;
    let name ='';
    res.forEach(item => {
        if(item[1] > bigSalaris) {
            bigSalaris = item[1];
            name = item[0];
        }
    }) 

    return name
}

console.log(topSalary(salaries))




