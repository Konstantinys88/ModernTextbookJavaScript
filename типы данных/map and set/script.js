'use strict';

// Фильтрация уникальных элементов массива
// важность: 5
// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
// Например:

function unique(arr) {
    let set = Array.from(new Set(arr))
    return set;

}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // Hare,Krishna,:-O


// Отфильтруйте анаграммы
// важность: 4
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
// Например:
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
// Например:
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

function aclean(arr) {
    let map = new Map();
    
    arr.forEach(item => {
        let sort = item.toLowerCase().split('').sort().join('');
        map.set(sort, item);
    })

    return Array.from(map);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
// "nap,teachers,ear" или "PAN,cheaters,era"


// Перебираемые ключи
// важность: 5
// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
// Но это не выходит:

let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys()) ;
console.log(keys);

keys.push("more");

console.log(keys);
