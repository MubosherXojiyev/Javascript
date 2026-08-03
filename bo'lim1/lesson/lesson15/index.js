// let algoritm = {
//     ism: "Algoritm IT Center",
//     yil: 2016,
//     manzil: "Chorsu DXA Binosi",
//     telraqam: "+998 99 111 22 33" 
// }
// console.log(algoritm.ism)

// console.log(algoritm["ism"]);

// let str = "ism"
// console.log(algoritm[str]);


// let algoritm = {
//     ism: "Algoritm IT Center",
//     yil: 2016,
//     manzil: "Chorsu DXA Binosi",
//     telraqam: "+998 99 111 22 33" 
// }

// // let start21 = Object.assign({},algoritm)
// let start21 = structuredClone(algoritm)
// start21.ism = "start 21"

// console.log(start21)
// console.log(algoritm);

// //link o'zgartirishni ikkita usuli bor.

// // 1. object.assing()
// //2.structuredClone()

// let algoritm = {
//     ism1: "Algoritm",
//     yil1: 2016
// }

// let start21 = {
//     ism2: "Start 21",
//     yil2: 2021
// }

// let birlashgan = Object.assign(algoritm,start21)
// console.log(birlashgan);

// let obj = {
//     ism: "eshmat",
//     yil: 2010,
//     ism: "toshmat"
// }

// console.log(obj)

let obj = {
    ism: "Eshmat",
    yosh: 20,
    status: "talaba",
    manzil: "Toshkent"
}

let obj2 = Object.assign({},obj)

obj2.ism = "toshmat"
obj2.yosh = 27
obj2.status = "ishchi"
obj2.manzil = "Namangan"


let obj3 = structuredClone(obj)

obj3.ism = "Ali"
obj3.yosh = 17
obj3.status = "Maktab"
obj3.manzil = "Farg'ona"

console.log(obj);

console.log("=====================================");

console.log(obj2);

console.log("=====================================");

console.log(obj3);
console.log("=====================================");
1