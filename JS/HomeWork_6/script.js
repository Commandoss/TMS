// // 1 Создайте массив styles с элементами «Джаз» и «Блюз».
//
// let styles = ['Джаз', 'Блюз'];
//
// // 2 Добавьте «Рок-н-ролл» в конец.
//
// styles.push('Рок-н-ролл');
//
// // 3 Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
//
// function findSenter(arr) {
//     let size = arr.length;
//     if (size % 2 === 0) {
//         return size / 2;
//     }
//     else {
//         return Math.floor(size / 2);
//     }
// }
//
// function replacement(arr) {
//     arr[findSenter(arr)] = 'Классика';
//     return arr;
// }
//
// console.log(replacement(styles));
//
// // 4 Удалите первый элемент массива и покажите его.
//
// console.log(styles.shift());
//
// // 5 Вставьте «Рэп» и «Регги» в начало массива.
//
// styles.unshift('Рэп')
// styles.unshift('Регги')
// console.log(styles)

// let shop = [{name: 'C', price: 32},
//             {name: 'F', price: 3},
//             {name: 'A', price: 42},
//             {name: 'G', price: 52},
//             {name: 'Z', price: 21},
//             {name: 'D', price: 11},
//             {name: 'E', price: 0},
// ];
//
// console.log(shop);
//
// shop.sort((a, b) => {
//     if (a.name > b.name) return 1;
//     else if (a.name < b.name) return -1;
//     else return 0;
// })
//
// console.log(shop);
//
// shop.sort((a, b) => {
//     if (a.price > b.price) return 1;
//     else if (a.price < b.price) return -1;
//     else return 0;
// })
//
// console.log(shop);