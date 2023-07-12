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
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
console.log( getMaxSubSum([1, 2, 3]) ); // 6
console.log( getMaxSubSum([-1, -2, -3]) ); // 0




