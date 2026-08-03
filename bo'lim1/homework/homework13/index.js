// let a = 5;
// let b = 3;
// let c = 8;

// // 1 - 3 ta son ichidan eng kattasi
// function engKatta(x, y, z) {
//   if (x >= y && x >= z) return x;
//   if (y >= x && y >= z) return y;
//   return z;
// }
// console.log("Eng katta:", engKatta(a, b, c));

// // 2 - son faktoriali
// function faktorial(n) {
//   let res = 1;
//   for (let i = 1; i <= n; i++) {
//     res *= i;
//   }
//   return res;
// }
// console.log("Faktorial:", faktorial(a));

// // 3 - son tubmi
// function tubmi(n) {
//   if (n < 2) return false;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
// console.log("Tubmi:", tubmi(a));

// // 4 - 1 dan n gacha yig‘indi
// function yigindi(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log("Yig‘indi:", yigindi(a));

// // 5 - sonni teskarisi (string ishlatmasdan)
// function teskari(n) {
//   let res = 0;
//   while (n > 0) {
//     res = res * 10 + (n % 10);
//     n = Math.floor(n / 10);
//   }
//   return res;
// }
// console.log("Teskari:", teskari(123));

// =============================================================

// let a = 6;
// let b = 4;

// // 1 - 2 son orasidagi barcha sonlar yig‘indisi
// const oralikYigindi = function(x, y) {
//   let sum = 0;
//   for (let i = x; i <= y; i++) {
//     sum += i;
//   }
//   return sum;
// };
// console.log("Oraliq yig‘indi:", oralikYigindi(a, b));

// // 2 - son raqamlari yig‘indisi
// const raqamYigindi = function(n) {
//   let sum = 0;
//   while (n > 0) {
//     sum += n % 10;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// };
// console.log("Raqamlar yig‘indisi:", raqamYigindi(123));

// // 3 - eng kichik umumiy karrali (EKUK)
// const ekuk = function(x, y) {
//   let max = x > y ? x : y;
//   while (true) {
//     if (max % x === 0 && max % y === 0) return max;
//     max++;
//   }
// };
// console.log("EKUK:", ekuk(a, b));

// // 4 - daraja hisoblash
// const daraja = function(x, y) {
//   let res = 1;
//   for (let i = 0; i < y; i++) {
//     res *= x;
//   }
//   return res;
// };
// console.log("Daraja:", daraja(a, b));

// // 5 - son palindrommi
// const palindrom = function(n) {
//   let original = n;
//   let rev = 0;
//   while (n > 0) {
//     rev = rev * 10 + (n % 10);
//     n = Math.floor(n / 10);
//   }
//   return original === rev;
// };
// console.log("Palindrom:", palindrom(121));

// ==============================================================

// let a = 10;
// let b = 2;

// // 1 - bo‘luvchilar soni
// const boluvchilar = (n) => {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) count++;
//   }
//   return count;
// };
// console.log("Bo‘luvchilar soni:", boluvchilar(a));

// // 2 - 2 sonning EKUBi
// const ekub = (x, y) => {
//   while (y !== 0) {
//     let temp = y;
//     y = x % y;
//     x = temp;
//   }
//   return x;
// };
// console.log("EKUB:", ekub(a, b));

// // 3 - fibonacci n-chi hadi
// const fibonacci = (n) => {
//   let a = 0, b = 1;
//   for (let i = 2; i <= n; i++) {
//     let temp = a + b;
//     a = b;
//     b = temp;
//   }
//   return n === 0 ? 0 : b;
// };
// console.log("Fibonacci:", fibonacci(7));

// // 4 - sonni binaryga o‘tkazish
// const binary = (n) => {
//   let res = "";
//   while (n > 0) {
//     res = (n % 2) + res;
//     n = Math.floor(n / 2);
//   }
//   return res;
// };
// console.log("Binary:", binary(a));

// // 5 - sonni raqamlar soni
const raqamlarSoni = (n) => {
  let count = 0;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count;
};
console.log("Raqamlar soni:", raqamlarSoni(12345));

