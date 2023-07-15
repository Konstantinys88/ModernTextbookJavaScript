'use strict';

// Создайте массив styles с элементами «Джаз» и «Блюз».
let styles = ["Джаз", "Блюз"];

// Добавьте «Рок-н-ролл» в конец.
styles.push("Рок-н-ролл");




// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
for (let i = 0; i < styles.length; i++) {
    if (i == (Math.floor(styles.length - 1) / 2)) {
        styles[i] = "Класика";
    }
}

// Удалите первый элемент массива и покажите его.
const firstElem = styles.shift();
console.log(firstElem);

// Вставьте Рэп и Регги в начало массива.
styles.unshift("Рэп", "Регги");


console.log(styles)


let arr = ["a", "b"];

arr.push(function () {
    console.log(this);
});

arr[2]();



function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            partialSum = 0;
        }
        if (arr[i] > 0) {
            partialSum += arr[i];
        }
        maxSum = Math.max(maxSum, partialSum);
    }

    return maxSum;
}

console.log(getMaxSubSum([-1, -2, 3, 9,]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([-1, -2, -3])); // 0



// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

function camelize(str) {
    const res = str.split("-")
        .map((item, index) => index === 0 ? item : item[0]
            .toUpperCase() + item.slice(1))
        .join("");
    return res;
}

console.log(camelize("background-color"));


// Фильтрация по диапазону
// важность: 4
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.
// Например:


function filterRange(arr, a, b) {
    return arr.filter(item => (item >= a && item <= b));
}

let arr1 = [5, 3, 8, 1, 2, 7];
console.log(filterRange(arr1, 1, 4));
console.log(arr1);
// let filtered = filterRange(arr1, 1, 4);
// console.log(filtered); // 3,1 (совпадающие значения)





// Фильтрация по диапазону "на месте"
// важность: 4
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
// Например:

filterRangeInPlace = (arr, a, b) => {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        // console.log(item)
        if (item < a || item > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}


let arr2 = [5, 3, 8, 1, 6, 7, 2];
console.log(arr2);
filterRangeInPlace(arr2, 2, 5); // удалены числа вне диапазона 1..4
console.log(arr2); // [3, 1]


// Сортировать в порядке по убыванию
// важность: 4
let arr3 = [5, 2, 1, -10, 8];

// function compareNumeric(a, b) {
//     if (a > b) return -1;
//     if (a == b) return 0;
//     if (a < b) return 1;
// }
// arr3.sort(compareNumeric);
// or
arr3.sort((a, b) => b - a);

console.log(arr3); // 8, 5, 2, 1, -10



// _______________________________________________________________________________________________________________ СЮДА
// Скопировать и отсортировать массив
// важность: 5
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.



let arr4 = ["HTML", "JavaScript", "CSS"];

copySorted = (arr) => {
    let res = [...arr];
    return res.sort((a, b) => a.localeCompare(b))
}


console.log(copySorted(arr4)); // CSS, HTML, JavaScript
console.log(arr4); // HTML, JavaScript, CSS (без изменений)


// Создать расширяемый калькулятор
