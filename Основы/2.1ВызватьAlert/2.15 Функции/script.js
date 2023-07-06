'use strict';

// Перепишите функцию, используя оператор '?' или '||'
// важность: 4
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
// Сделайте два варианта функции checkAge:
// Используя оператор ?
// Используя оператор ||

function checkAge(age) {
    // return (age > 18) ? true : confirm('Родители разрешили?');
    return (age > 18) || confirm('Родители разрешили?')
}

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// Пример вызовов:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a,b) {
  if(a < b) {
    return console.log("a < b");
  } else if(b < a) {
    return console.log("b < a");
  } else {
    return console.log("равны")
  }
}

min(10,2);

// Функция pow(x,n)
// важность: 4
// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

function pow(x,n) {
    let res = 1;
    for(let i = 0; i < n; i++) {
        res *= x;

    }
    return console.log(res);

}

pow(3,3)

