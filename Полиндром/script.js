'use strict';
// 1

let str = "zzz1";

function polindrom(str) {
    str.toLowerCase();

    return str === str.split("").reverse().join("");
}
console.log(polindrom(str));

// 2

function polindrom2(str) {
    let res = "";
    for(let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }  
    return str === res;
}
console.log(polindrom(str));