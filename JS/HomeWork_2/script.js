// 1. Запросить у пользователя число и определить, оно положительное, отрицательное или ноль.

// let num = +prompt('Enter num');
// if(isNaN(num)) alert('is not num');
// else if(num > 0) alert('The number is positive')
// else if(num < 0) alert('The number is negative')
// else alert('enter num == 0')

// 2. Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).

// let age = +prompt('Enter how old are you?');
// if (isNaN(age)) alert('Is not number')
// else if(age > 120 || age < 0) alert('enter old is not correctly')
// else alert('very good');

// 3. Запросить у пользователя число и вывести его модуль

// (|7| = 7, |-7| = 7).
// let num = +prompt('Enter num');
// if (isNaN(num)) alert('Is not number')
// else {
//     alert('|' + Math.abs(num) + '| = ' + num);
// }

// 4. Запросить у пользователя время (часы, минуты, секунды)
// и проверить корректность введенных данных.

// let min, hour, seconds;
// hour = +prompt('Enter hour');
// min = +prompt('Enter min');
// seconds = +prompt('Enter seconds');
// if (min > 59 || seconds > 59 || hour > 23) alert("Error entered data is not correctly");
// else if (min < 0 || seconds < 0 || hour < 0) alert("Error entered data is not correctly");
// else {
//     alert('very good');
// }

// 5. Запросить координаты точки (x, y) и определить номер
// четверти, в которую попала эта точка. Необходимо учесть
// случаи попадания точки на оси X или Y или в начало
// координат.

let x = prompt('Enter X-coordinate');
if ((x === null)) alert('Canceled');
else if ((x.trim() === '')) alert('String is empty');
else if ((isNaN(+x))) alert('You enter not a number');
else {
    let y = prompt('Enter Y-coordinate');
    if ((y === null)) alert('Canceled');
    else if ((y.trim() === '')) alert('String is empty');
    else if (isNaN(+y)) alert('You enter not a number');
    else {
        if ((+x > 0) && (+y > 0)) alert('1');
        else if ((+x > 0) && (+y < 0)) alert('2');
        else if ((+x < 0) && (+y < 0)) alert('3');
        else if ((+x < 0) && (+y > 0)) alert('4');
        else if ((+x == 0) && (+y == 0)) alert('Right to the center');
        else if ((+x == 0) && (+y > 0)) alert('Between IV and I quadrants');
        else if ((+x == 0) && (+y < 0)) alert('Between III and II quadrants');
        else if ((+x > 0) && (+y == 0)) alert('Between I and II quadrants');
        else if ((+x < 0) && (+y == 0)) alert('Between IV and III quadrants');
        
    }
}

// 6. Запросить у пользователя год и вывести его имя по китайскому календарю. (Использовать if) (Задача со звездочкой)

let year = prompt('Enter a year');
if ((year === null)) alert('Canceled');
else if ((year.trim() === '')) alert('String is empty');
else if ((isNaN(+year))) alert('You enter not a number');
else {
    if ((+year % 12) === 0) alert('Monkey');
    else if ((+year % 12) === 1) alert('Chicken');
    else if ((+year % 12) === 2) alert('Dog');
    else if ((+year % 12) === 3) alert('Pig');
    else if ((+year % 12) === 4) alert('Rat');
    else if ((+year % 12) === 5) alert('Bull');
    else if ((+year % 12) === 6) alert('Tiger');
    else if ((+year % 12) === 7) alert('Rabbit');
    else if ((+year % 12) === 8) alert('Dragon');
    else if ((+year % 12) === 9) alert('Snake');
    else if ((+year % 12) === 10) alert('Horse');
    else if ((+year % 12) === 11) alert('Sheep');
    else if ((+year % 12) === 12) alert('Monkey');
}