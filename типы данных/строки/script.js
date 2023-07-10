'use strict';

let vasia = `vasia`;

function ucFirst(str) {
    return str = str[0].toUpperCase() + str.slice(1, str.length);
}

console.log(ucFirst(vasia));

function checkSpam(str) {
    let res = str.toLowerCase();

    return res.includes("viagra") || res.includes("xxx")

}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xx'));
console.log(checkSpam("i rabbit"));


function truncate(str, maxlength) {
    if (str.length > maxlength) {
        let res = str.slice(0, maxlength-1) + `...`
        return console.log(res);
    }
    return console.log(str);
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
truncate("Всем привет!", 20);

let dolsrs = `$123`

function extractCurrencyValue(str) {
    return +str.slice(1, str.length);
}

console.log(extractCurrencyValue(dolsrs) === 123);