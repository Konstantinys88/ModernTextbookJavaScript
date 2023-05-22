'use strict';

function polindrom(str) {
    str.toLowerCase();

    return str === str.split("").reverse().join("");
}


console.log(polindrom("фхфф"));