'use strict';
// 1

let str = "шалаш";

/**
 * Сравнивает строку с ее перевернутым значением
 * @param {string} str Строка например шашаш
 * @returns true или false
 */

function palindrom(str) {
    return str === str.split(" ").reverse().join("");
}
console.log(palindrom(str));

// 2

function palindrom2(str) {
    let res = "";
    for(let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }  
    return str === res;
}
console.log(palindrom(str));


// const str1 = '   Hello World   ';
// console.log(str1.replace(/ /g,''));