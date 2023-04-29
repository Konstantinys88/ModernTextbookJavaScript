'use strict';
// Работа с переменными
// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).

let admin, name1;
name1 = "Джон";
admin = name1;
alert(admin);

// Придумайте правильные имена
// Создайте переменную для названия нашей планеты. Как бы вы её назвали?
// Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?

const ourTerra = "Планета земля";
let userNow = "текущий пользователь";

// Какие буквы (заглавные или строчные) использовать для имён констант?
// Рассмотрим следующий код:

const birthday = '18.04.1982';
const age = someCode(birthday);

// У нас есть константа birthday, а также age, которая вычисляется при помощи некоторого кода, используя значение из birthday (в данном случае детали не имеют значения, поэтому код не рассматривается).
// Можно ли использовать заглавные буквы для имени birthday? А для age? Или одновременно для обеих переменных?

const BIRTHDAY = '18.04.1982'; // использовать заглавные буквы?
const AGE = someCode(BIRTHDAY); // а здесь?

// решение
// Обычно мы используем буквы в верхнем регистре для констант, которые «жёстко закодированы». Или, другими словами, когда значение известно до выполнения скрипта и записывается непосредственно в код.
// В нашем примере, birthday именно такая переменная. Поэтому мы можем использовать заглавные буквы.
// В отличие от предыдущей, переменная age вычисляется во время выполнения скрипта. Сегодня у нас один возраст, а через год уже совсем другой. Она является константой, потому что не изменяется при выполнении кода. Но она является «менее константной», чем birthday: она вычисляется, поэтому мы должны сохранить её в нижнем регистре.