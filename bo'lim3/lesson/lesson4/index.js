// sort()

// let arr = [4, 2, 5, 1, 7, 3, 8, 9, 6]
// let sortArr = arr.sort()
// let sortArr = arr.sort((a, b) => a - b)
// let sortArr = arr.sort((a, b) => b - a)
// console.log(sortArr);

// let arr = ["Olma", "Uzum", "Nok", "anor", "Anjir"]
// let sortArr = arr.sort()
// let sortArr = arr.sort((a, b) => a.localeCampaire(b))
// let sortArr = arr.sort((a, b) => b.localeCompare(a))
// console.log(sortArr);

// every() - bu (&& - AND) operatoriga oxshab ishlaydi.
// Barcha qiymat true ekanligini tekshiradi va true yoki false javob qaytaradi.

// let arr = [ 1, "Algoritm", {ism: "Eshmat" }, true, null, undefined]
// let arr = [ 1, "Algoritm", {ism: "Eshmat" }, true]
// let arr = [1, 2, 3, 4, 5]
// let isTruesy = arr.every((value) => value)
// let isTruesy = arr.every((value) => value > 0)
// console.log(isTruesy);

// some - bu (|| - OR) operaturiga oxshab ishlaydi.
// qiymatlar ichida 1 ta qiymat shartga mos tushsa yakuniy javob true boladi.
// Aks holda false buladi.
// let arr = [1, 2, 3, 4, 5]
// let or = arr.some((value) => value)
// let or = arr.some((value) => value > 0)
// console.log(or);

// flat - nested arraylarni parchalab 1ta arrayga aylantiradi.

// let nestedArr = [1, 2, [3 ,4, [5 ,6, [7, 8, ]]]]
// let arr = nestedArr.flat(0)
// let arr = nestedArr.flat()
// let arr = nestedArr.flat(Infinity)
// console.log(arr);

// flatMap = flat + map - bu return ga qaytarilgan array ni parchalaydi va
// 1ta array paydo qilib beradi.

// let arr = [1, 2, 3, 4, 5] 
// let newArr = arr.map((value) => [value  2])
// console.log(newArr);
// let newArr = arr.flatMap((value) => [value  2])
// console.log(newArr);

// fill - Array ichidagi bosh joylarni qiymat bilan tuldirib beradi.

// 1. []. ✅
// 2. Array() ✅
// 3, new Array() ❌

// let arr1 = [3]
// console.log(arr1)
// let arr2 = Array(3)
// let arr = arr2.fill("Algoritm")
// let arr = arr2.fill(0)
// console.log(arr);

// copyWitthin - arrayni bir qismini copy qilib boshqa qismiga joylab beradi.

// let arr = [1, 2 ,3, 4, 5, 6, 7, 8, 9]
// [6, 7 ,8, 9, 5 ,6, 7, 8, 9]
// [1, 2, 3, 4, 5, 1, 2, 3, 4]
// let copyArr = arr.copyWithin(5, 0, 5)
// console.log(copyArr);

// let arr = [{ name: "Ali", age: 25 }, {name: "Vali", age: 17}, {name: "sami", age: 20}, {name: "john", age: 20}]
// let newArr = arr.filter((value, index, a) =>{
//     return arr
// })
// console.log(newArr);
// let arr = ["apple", "banana", "cherry", "Watermelon"]
// let len = 0;
// let v = 0
// let a = arr.forEach((value, index, a) => {
//     if(value.length > len){
//         len = value.length
//         v = value
//     }
// });
// console.log(v);

// let arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49, 50]
// for (let  value of arr) {
//    if(value % 10 === 0 ) {
//     console.log(value);
    
//  }
// }

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = arr.reduce((acc, cur) => {
    if(cur % 3  === 0 || cur % 2 === 0 ) return acc + cur
    return acc
}, 0);
console.log(sum)