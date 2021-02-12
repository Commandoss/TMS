
//-----------Часть первая----------

// 1 В массиве, состоящем из n элементов, вычислить:
// – номер минимального элемента массива;
// – сумму модулей элементов массива, расположенных после первого
// отрицательного элемента.

// let array = [2, 3, 5, 8 , 9, 11 , 1, 15, -8, 33, -31, -18];
//
// function findMin(arr) {
//     let num = arr[0];
//     for(let i = 0; i < arr.length; i++) {
//         if(num >= arr[i]) num = arr[i];
//         else continue
//     }
//     console.log(`min num: ${num}`);
// }
//
// function sumMod(arr) {
//     let sum = 0;
//     for (let i = 0, flag = 0; i < arr.length; i++) {
//         if(flag == 0 && arr[i] < 0) flag++;
//         else if(flag > 0) {
//             sum += Math.abs(arr[i]);
//         }
//     }
//     console.log(`Sum abs: ${sum}`);
// }
//
// findMin(array);
// sumMod(array);


// 2 В массиве, состоящем из n элементов,
//     вычислить:
// – номер максимального элемента массива;
// – сумму элементов массива, расположенных после первого положительного элемента.

// let array = [-1, -4, -10, 5, -25, 13, 3];
//
// function findMax(arr) {
//     let num = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (num <= arr[i]) num = arr[i];
//         else continue
//     }
//     console.log(`max num: ${num}`);
// }
//
// function sumPlus(arr) {
//     let sum = 0;
//     for (let i = 0, flag = 0; i < arr.length; i++) {
//         if (flag == 0 && arr[i] > 0) flag++;
//         else if (flag > 0) {
//             sum += Math.abs(arr[i]);
//         }
//     }
//     console.log(`Sum abs: ${sum}`);
// }
//
// findMax(array);
// sumPlus(array);

// 3 В массиве, состоящем из n элементов, вычислить:
// – количество элементов массива, лежащих в диапазоне от А до В;
// – сумму элементов массива, расположенных после максимального
// элемента.

// let array = [-1, -4, -10, 5, -25, 133, 3, 35, 21];
//
// function findMax(arr) {
//     let num = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (num <= arr[i]) num = arr[i];
//         else continue
//     }
//     console.log(`max num: ${num}`);
//     return num;
// }
//
// function range(arr, a, b) {
//     let counter = 0
//     for (; a < b && a < arr.length; a++) {
//             counter++;
//     }
//     console.log(`Counter = ${counter}`);
// }
//
//
// function sum(arr) {
//     let sum = 0;
//     let max = findMax(arr);
//     for(let i = 0, flag = 0; i < arr.length; i++) {
//         if(flag === 0 && arr[i] >= max) flag++;
//         else if(flag > 0) {
//             sum += Math.abs(arr[i]);
//         }
//     }
//     console.log(`Sum: ${sum}`);
// }
//
// range(array, 0, 144);
// sum(array)

// 4 В массиве, состоящем из n элементов,
//     вычислить:
// – количество элементов массива, равных 0;
// – сумму элементов массива, расположенных после минимального
// элемента.

// function findMin(arr)

// let array = [-1, -4, 0, -10, 5, -25, 133, 0, 3, 35, 21, 0];
//
// function findMin(arr) {
//     let num = arr[0];
//     for(let i = 0; i < arr.length; i++) {
//         if(num >= arr[i]) num = arr[i];
//         else continue
//     }
//     // console.log(`min num: ${num}`);
//     return num;
// }
//
// function sum(arr) {
//     let sum = 0;
//     let min = findMin(arr);
//     for(let i = 0, flag = 0; i < arr.length; i++) {
//         if(flag === 0 && min <= arr[i]) flag++;
//         else if(flag > 0) {
//             sum += Math.abs(arr[i]);
//         }
//     }
//     console.log(`Sum: ${sum}`);
// }
//
// function nullNum(arr) {
//     let counter = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === 0) counter++;
//     }
//     console.log(`Counter: ${counter}`);
// }
//
// sum(array);
// nullNum(array);

// 5 В массиве, состоящем из n элементов, вычислить:
// – количество элементов массива, больших С;
// – произведение элементов массива, расположенных после максимального по модулю элемента.

// let array = [-1, -4, 0, -10, 5, -25, 283, 1, 3, 35, 21, 1,
//     200, 255, 2, 1, 45];
//
// function moreC(arr, c) {
//     let counter = 0;
//     for (let i in arr) {
//         if (c < arr[i]) counter++;
//     }
//     console.log(`Counter: ${counter}`);
// }
//
// function findMaxABS(arr) {
//     let num = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (num <= Math.abs(arr[i])) num = arr[i];
//         else continue
//     }
//     console.log(`max num: ${num}`);
//     return num;
// }
//
// function op(arr) {
//     let oper = 1;
//     let max = findMaxABS(arr);
//     let flag = 0;
//     for (let i in arr) {
//         if (arr[i] >= max) flag++;
//         else if (flag > 0) oper *= Math.abs(arr[i]);
//     }
//     console.log(`Result op: ${oper}`);
// }
//
// moreC(array, 12);
// op(array);


//6 7 8 9 10 не делал однотипно и нудно)

// 6 В массиве, состоящем из n элементов,
//     вычислить:
// – отрицательных элементов массива;
// – сумму модулей элементов массива, расположенных после минимального по модулю элемента.
// 7 В массиве, состоящем из n элементов, вычислить:
// – количество положительных элементов массива;
// – сумму элементов массива, расположенных после последнего элемента, равного нулю.
// 8 В массиве, состоящем из n элементов,
//     вычислить:
// – количество элементов массива, меньших С;
// – сумму целых частей элементов массива, расположенных после последнего отрицательного элемента.
// 9 В массиве, состоящем из n элементов, вычислить:
// – произведение отрицательных элементов массива;
// – сумму положительных элементов массива, расположенных до максимального элемента.
// 10 В массиве, состоящем из n элементов,
//     вычислить:
// – номер максимального элемента;
// – сумму элементов массива, расположенных до минимального
// элемента.


//--------Часть вторая-------

// 1 Создать массив из 10 случайных чисел:
//     1. Программа выводит его на экран.

// let array = [];
//
// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }
//
// function randArray(arr) {
//     for(let i = 0; i < 10; i++) {
//         arr[i] = (getRandomInt(3333));
//     }
//     return arr;
// }
//
// function outputArr(arr) {
//     for (let i in arr) {
//         console.log(`${arr[i]}`);
//     }
// }
//
// array = randArray(array);
// outputArr(array)
//
// // 2. Программа выводит только четные элементы.
//
// function evenElem(arr) {
//     for(let i in arr) {
//         if (arr[i] % 2 === 0) console.log(`Even ${i} = ${arr[i]}`)
//     }
// }
//
// evenElem(array);
//
// // 3. Программа возвращает сумму всех элементов массива.
//
// function sumArray(arr) {
//     let sum = 0;
//     for (let i in arr) {
//         sum += arr[i];
//     }
//     console.log(`Sum = ${sum}`);
// }
//
// sumArray(array);
//
// // 4. Программа возвращает его максимальный элемент.
//
// function findMax(arr) {
//     let num = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (num <= arr[i]) num = arr[i];
//         else continue
//     }
//     // console.log(`max num: ${num}`);
//     return num;
// }
//
// console.log(`Find max = ${findMax(array)}`);
//
// // 5. Программа добавляет новый элемент в массив по указанному индексу.
//
// function addElem(arr, index, value) {
//     arr.splice(index, 0, value);
//     return arr;
// }
//
// array = addElem(array, 1 , 12);
// outputArr(array);
// console.log(`End add`);
//
// // 6. Программа удаляет элемент из массива по указанному
//
// function deleteElemArray(arr, index) {
//     delete arr[index];
//     return arr;
// }
//
// deleteElemArray(array, 0);
// outputArr(array);


//------------Часть 3 решение примеров----------

//1
//
// function f1(a, b, c, x) {
//     if (x < 0 && b != 0) {
//         console.log(a * x**2 + b);
//     }
//     else if (x > 0 && b != 0) {
//         console.log((x - a)/(x - c));
//     }
//     else {
//         console.log(x / c);
//     }
// }
//
// //2
//
// function f2(a, b, c, x) {
//     if (a < 0 && c != 0) {
//         console.log(a * x**2 + b * x + c);
//     }
//     else if (a > 0 && c != 0) {
//         console.log(-a/(x-c));
//     }
//     else {
//         console.log(a*(x+c));
//     }
// }
//
// //3
//
// function f3(a, b, c, x) {
//     if ((x-a) < 0 && c != 0) {
//         console.log(a - (x/(10 + b)));
//     }
//     else if ((x- a) > 0 && b != 0) {
//         console.log((x - a) / (x - c));
//     }
//     else {
//         console.log(3*x+(2/c));
//     }
// }
//
// //4
//
// function f4(a, b, c, x) {
//     if (x < 5 && c != 0) {
//         console.log(-1 * (a * (x**2) - b));
//     }
//     else if (x > 5 && c != 0) {
//         console.log((x - a) / (x));
//     }
//     else {
//         console.log((-1 * x) / c);
//     }
// }
//
// //5
//
// function f5(a, b, c, x) {
//     if (a < 0 && x != 0) {
//         console.log(a * (x**2) + (b**2) * x);
//     }
//     else if (a > 0 && x != 0) {
//         console.log(x - (a / (x - c)));
//     }
//     else {
//         console.log(1 + x / c);
//     }
// }
//
// let arr = [1, 2, 3, 4, 55, 77, 544, -398, -4, -444, 9, 0, 11];
//
// for(let i in arr) {
//     f1(2, 3, 4, arr[i]);
//     f2(2, 3, 4, arr[i]);
//     f3(2, 3, 4, arr[i]);
//     f4(2, 3, 4, arr[i]);
//     f5(2, 3, 4, arr[i]);
// }

//дальше нет смысла 6 - 10

// ----------Часть 4 список покупок--------

// let product = {
//     name: "",
//     quantity: 0,
//     buy: false
// };
//
//
// let array = [];
//
// function outputArray(array) {
//     let flag = 0;
//     while (flag != 2) {
//         for (let i in array) {
//             if (array.buy === false && flag === 0) {
//                 console.log(array[i]);
//             } else if (flag == 1) {
//                 console.log(array[i]);
//             }
//         }
//         flag++;
//     }
// }
//
// function findName(arr, name) {
//     for (let i in arr) {
//         if (arr[i].name === name) return i;
//     }
//     return false
// }
//
// function addProduct(array, product) {
//     let num;
//     product.name = prompt(`Name: `);
//     product.quantity = prompt('Quantity: ');
//     product.buy = confirm('Buy?');
//     if ((num = findName(array, product.name))) {
//         array[num].quantity++;
//     } else {
//         array.push(product);
//     }
// }
//
// function buyProd(arr, name) {
//     for (let i in arr) {
//         if (arr[i].name === name) {
//             arr[i].buy == true;
//         }
//     }
// }
//
// while(confirm(`Continue?`) != false) {
//     addProduct(array, product);
//     outputArray(array);
// }