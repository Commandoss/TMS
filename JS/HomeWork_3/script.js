"use strict"

// 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.

// let pos1 = +prompt('Enter position start: ');
// let pos2 = +prompt('Enter position end: ');
// let sum;
//
// for(sum = 0; pos1 <= pos2; pos1++) {
//     sum += pos1;
// }
// alert(sum);


// 2. Запросить 2 числа и найти только наибольший общий делитель.

// let pos1 = +prompt('Enter num 1: ');
// let pos2 = +prompt('Enter num 2: ');
//
// for(let i = pos1; i > 0; i--) {
//     if(((pos1 % i == 0) && (pos2 % i == 0))) {
//         alert('nod = ' + i);
//         break;
//     }
// }

// 3. Запросить у пользователя число и вывести все делители этого числа.

// let num = prompt('Enter num: ');
//
// for(let i = num; i > 0; i--) {
//     if (num % i == 0) {
//         console.log(i);
//     }
// }



// 4. Определить количество цифр в введенном числе.

// let num = prompt('Enter num: ');
//
// for(let i = 1, j = 0; ; i *= 10, j++) {
//     if (i > num) {
//         alert(j);
//         break;
//     }
//
// }


// 5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей.
// При этом также посчитать, сколько четных и нечетных.
// Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

// let num = prompt('Enter num: ');
// let positive = 0, negative = 0, nulle = 0, even = 0, odd = 0;
//
// if(num % 2 == 0 && num != 0) {
//     even++;
// }
// else {
//     odd++;
// }
//
// if(num == 0) {
//     nulle++;
//
// }
// else if(num > 0) {
//     positive++;
//
// }
// else {
//     negative++;
// }
//
// alert('positive = ' + positive
//     + '\nnegative = ' + negative
//     + '\nnull = ' + nulle
//     + '\neven = ' + even
//     + '\nodd = ' + odd);

// 6. Зациклить калькулятор.
// Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример.
// И так до тех пор, пока пользователь не откажется.

// let num1 = 0, num2 = 0, operator = 0;
// let answer = 0;
//
// while (operator != 'n') {
//     num1 = prompt('Enter num 1 = ');
//     num2 = prompt('Enter num 2 = ');
//     operator = prompt('Enter operator: ');
//     switch (operator) {
//         case '+':
//             answer = num1 + num2;
//             break
//         case '-':
//             answer = num1 - num2;
//             break;
//         case '*':
//             answer = num1 * num2;
//             break;
//         case '/':
//             answer = num1 / num2;
//             break;
//         case '%':
//             answer = num1 % num2;
//             break;
//         case '^':
//             answer = num1**num2;
//             break;
//         default:
//             break;
//     }
//     alert(answer);
//     operator = prompt('Do you want exit?\n Answer: ');
// }

// 7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат
// (если число 123456 сдвинуть на 2 цифры, то получится 345612). 2 Домашнее задание №3

// let num = prompt('Enter num: ');
// let sdvig = +prompt('Enter sdvig: ');
// let newStr;

// for(let i = 1; i <= sdvig; i++) {
//     newStr = num.slice(1, num.substr());
//     num = newStr + num[0];
// }

// alert(num);

// 8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

// let array = ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday', 'Sunday'];
// let counter = 0;
// while(1) {
//     alert(array[counter] + ' want to next day?')
//     counter++;
// }

// 9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
// for (let num = 1; num < 10; num++) {
//     for (let multiplied = 1; multiplied <= 10; multiplied++) {
//         console.log(num * multiplied);
//     }
//     console.log('\n');
// }

// 10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом:
// каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?».
// В зависимости от того что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50.
// Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.


// 11. Посчитать факториал введенного пользователем числа.
// let fac = +prompt('Fac in: ');
// for(let answer = 1, counter = fac; answer <= counter; answer++) {
//     fac *= answer;
// }
// alert('fac = ' + fac);