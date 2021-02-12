// "use strict"
//
// let rectancle = {
//     A: {
//        x: 1,
//        y: 10,
//     },
//
//     D: {
//         x: 14,
//         y: 5,
//     }
// }
//
// function getWidth(rectangle) {
//     let width = rectangle.A.x - rectangle.D.x;
//     if (width < 0) width *= -1;
//     return width;
// }
//
// function getHeigth(rectangle) {
//     let heigth = rectangle.A.y - rectangle.D.y;
//     if (heigth < 0) heigth *= -1;
//     return heigth;
// }
//
// function getS(rectangle) {
//     return (getWidth(rectangle) * getHeigth());
// }
//
// function getP(rectangle) {
//     return 2 * (getWidth(rectangle) + getHeigth(rectangle));
// }
//
// function setWidth(rectangle, newWidth){
//     if (rectangle.A.x == 0)
//         rectangle.A.x -= newWidth;
//     else rectangle.D.x -= newWidth;
// }
//
// function setHeigth(rectangle, newHeigth) {
//     if (rectangle.A.y == 0)
//         rectangle.A.y -= newHeigth;
//     else rectangle.D.y -= newHeigth;
// }
//
// function setNewRec(rectangle, newHeigth, newWidth) {
//     setWidth(rectangle, newWidth);
//     setHeigth(rectangle, newHeigth);
// }
//
// function DisX(rectangle, x) {
//     rectangle.A.x += x;
//     rectangle.D.x += x;
// }
//
// function DisY(rectangle, y) {
//     rectangle.A.y += y;
//     rectangle.D.y += y;
// }
//
// function allDix(rectangle, x, y) {
//     DisX(x);
//     DisY(y);
// }
//
// function chectPoint(rectangle, pX, pY) {
//     if ((rectangle.A.x >= pX || rectangle.D.x >= pX)
//      && rectangle.A.y >= pY || rectangle.D.y >= pY) {
//         return 'Okey';
//     }
//     else {
//         return 'not okey';
//     }
// }
//
// function printRectangle(rectangle) {
//     console.log(`A (${rectangle.A.x}, ${rectangle.A.y})\n`);
//     console.log(`B (${rectangle.D.x}, ${rectangle.A.y})`);
//     console.log(`C (${rectangle.A.x}, ${getHeigth(rectangle)})`);
//     console.log(`D (${rectangle.D.x}, ${rectangle.D.y})\n`);
// }
//
// printRectangle(rectancle);

// let auto = {
//     developer:'Germani',
//     brend: 'BMW',
//     year: 2020,
//     speed: 280,
// };
//
// function printAuto(auto) {
//     console.log(`Developer: ${auto.developer}\n`);
//     console.log(`Brend: ${auto.brend}\n`);
//     console.log(`Year: ${auto.year}\n`);
//     console.log(`Speed: ${auto.speed}\n`);
// }
//
// function roadTime(auto, kilo) {
//     let srcSpeed = auto.speed / 2;
//     let sleep = 4;
//     let time = (kilo / srcSpeed);
//     time = Math.round(time);
//     while (true) {
//         if (time >= sleep) {
//             time++;
//             sleep *= 2;
//         } else {break};
//     }
//     return time;
// }
//
// printAuto(auto);
// console.log(roadTime(auto, 390));

// let drob = {
//     chislo: 2,
//     snam: 4
// };
//
// function Drob(chislo, snam) {
//     this.chislo = chislo;
//     this.snam = snam;
// }
//
// function sumDrob(drob1, drob2) {
//     let drob3 = new Drob(drob1.chislo + drob2.chislo, drob1.snam + drob2.snam);
//     return drob3;
// }
//
// function minusDrob(drob1, drob2) {
//     let drob3 = new Drob(drob1.chislo - drob2.chislo, drob1.snam - drob2.snam);
//     return drob3;
// }
//
// function ymnoDrob(drob1, drob2) {
//     let drob3 = new Drob(drob1.chislo * drob2.chislo, drob1.snam * drob2.snam);
//     return drob3;
// }
//
// function delDrob(drob1, drob2) {
//     let drob3 = new Drob(drob1.chislo / drob2.chislo, drob1.snam / drob2.snam);
//     return drob3;
// }
//
// function socrDrob(drob) {
//     if (drob.chislo % drob.snam == 0) {
//         drob.chislo = drob.chislo / drob.snam
//     }
//     else if (drob % drob.snam != 0) { //?????
//
//     }
// }
//
// let newDrop = new Drob(23, 11);
// console.log(newDrop);
// console.log(sumDrob(newDrop, drob));


// function outTime(now) {
//     console.log(`Now: ${now}`);
// }
//
// function setSec(now, seconds) {
//     now.setSeconds((now.getSeconds() + seconds));
//     return now;
// }
//
// function setMin(now, min) {
//     now.setMinutes((now.getMinutes() + min));
//     return now;
// }
//
// function setHour(now, hour) {
//     now.setHours((now.getHours() + hour));
//     return hour;
// }
//
// let data = new Date();
//
// outTime(data);
// setSec(data, 10);
// setMin(data, 60);
// setHour(data, 3);
// data = outTime(data);

