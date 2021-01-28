// 1. Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран.
// alert("Number entered: " +prompt("Enter number: "));

// 2. Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.
// let num1 = 0, num2 = 0;
// num1 = +prompt("Enter number 1: ");
// num2 = +prompt("Enter number 2: ");
// alert("The arithmetic mean of two numbers: " + ((num1 + num2)/2));

// 3. Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.

// let size = 0;
// size  = prompt("Enter size: ");
// alert("Square area: " + size**2)

// 4. Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили)

// let kilo = 0;
// const mile = 0.621371;
// kilo = prompt("Enter number of kilometers: ");
// alert("miles: " + kilo * mile);

// 1 км = 0,621371 миль. Это значение укажите в коде как константу.

// 5. Реализуйте калькулятор. Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами.

// let num1 = 0, num2 = 0;
// num1 = +prompt("Enter number 1: ");
// num2 = +prompt("Enter number 2: ");
// alert("result (+): " + (num1 + num2) +
// "\nresult (-): " + (num1 - num2) +
// "\nresult (*): " + (num1 * num2) +
// "\nresult (/): " + (num1 / num2));

// 6. Пользователь вводит значения a и b для формулы a * x + b = 0, а программа считает и выводит значение x.

// let num1 = 0, num2 = 0;
// num1 = +prompt("Enter a: ");
// num2 = +prompt("Enter b: ");
// alert("x = " + ((-1 * num2) / num1));

// 7. Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня.

// let hour = 0, min = 0;
// hour = +prompt("Enter hour: ");
// min = +prompt("Enter min: ");
//
// const sisHour = 24;
// const sisMin = 60;
//
// alert("left until next day: " + (sisHour - hour) + ":" + (sisMin - min));


// 2 Практическое задание №1
// 8. Запросите у пользователя трехзначное число и выведите вторую цифру этого числа. Для решения задачи используйте оператор % (остаток от деления).

// let num = 0;
// num = prompt("Enter num: ");
// let str = num.toString();
// alert(str[1]);

// 9. Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234).

// let num = prompt("Enter");
// let newNum = num[4] + num.slice(0, 4);
// alert('Новое число - ' + newNum);

// 10. Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.

// let sum = 0;
// const pay = 250;
// sum = prompt('Enter sum ');
// alert('total sum : ' + pay + (sum * 0.1));


