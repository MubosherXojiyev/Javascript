// 1
// for (let i = 1; i <= 20; i++) {
//   if (i % 5 === 0) continue;
//   console.log(i);
// }

// let i = 1;
// while (i <= 20) {
//   if (i % 5 === 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// let i = 1;
// do {
//   if (i % 5 === 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// } while (i <= 20);

// 2

// for (let i = 1; i <= 30; i++) {
//   if (i % 2 !== 0) continue;
//   console.log(i);
// }

// let i = 1;
// while (i <= 30) {
//   if (i % 2 !== 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// let i = 1;
// do {
//   if (i % 2 !== 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// } while (i <= 30);

// 3

// let sum = 0;
// for (let i = 1; i <= 50; i++) {
//   if (i >= 10 && i <= 20) continue;
//   sum += i;
// }
// console.log(sum);

// let i = 1, sum = 0;
// while (i <= 50) {
//   if (i >= 10 && i <= 20) {
//     i++;
//     continue;
//   }
//   sum += i;
//   i++;
// }
// console.log(sum);

// let i = 1, sum = 0;
// do {
//   if (i >= 10 && i <= 20) {
//     i++;
//     continue;
//   }
//   sum += i;
//   i++;
// } while (i <= 50);
// console.log(sum);

// 4

 

// let i = 1;
// while (i <= 100) {
//   let sum = Math.floor(i / 10) + (i % 10);
//   if (sum === 5) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }


// 5

// let a = 1;
// for (let i = 1; i <= 40; i++) {
//   if (i % 3 === 0 && i % 7 === 0) continue;
//   a *= i;
// }
// console.log(a);

// let i = 1, b = 1;
// while (i <= 40) {
//   if (i % 3 === 0 && i % 7 === 0) {
//     i++;
//     continue;
//   }
//   b *= i;
//   i++;
// }
// console.log(b);

// let i = 1, c = 1;
// do {
//   if (i % 3 === 0 && i % 7 === 0) {
//     i++;
//     continue;
//   }
//   c *= i;
//   i++;
// } while (i <= 40);
// console.log(c);

// 6

// for (let i = 2; i <= 100; i++) {
//   let d = true;

//   for (let j = 2; j <= Math.sqrt(i); j++) {
//     if (i % j === 0) {
//       d = false;
//       break;
//     }
//   }

//   if (!d) continue;
//   console.log(i);
// }

// let i = 2;
// while (i <= 100) {
//   let isPrime = true;

//   let j = 2;
//   while (j <= Math.sqrt(i)) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//     j++;
//   }

//   if (!isPrime) {
//     i++;
//     continue;
//   }

//   console.log(i);
//   i++;
// }

// let i = 2;
// do {
//   let isPrime = true;

//   let j = 2;
//   do {
//     if (j > Math.sqrt(i)) break;
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//     j++;
//   } while (true);

//   if (!isPrime) {
//     i++;
//     continue;
//   }

//   console.log(i);
//   i++;
// } while (i <= 100);

// 7

// for (let i = 1; i <= 50; i++) {
//   if (i >= 10 && i % 11 === 0) continue;
//   console.log(i);
// }

// let i = 1;

// while (i <= 50) {
//   if (i >= 10 && i % 11 === 0) {
//     i++;
//     continue;
//   }

//   console.log(i);
//   i++;
// }

// let i = 1;

// do {
//   if (i >= 10 && i % 11 === 0) {
//     i++;
//     continue;
//   }

//   console.log(i);
//   i++;
// } while (i <= 50);

// 8

// let count = 0;

// for (let i = 1; i <= 100; i++) {
//   let sum = 0;

//   for (let j = 1; j < i; j++) {
//     if (i % j === 0) sum += j;
//   }

//   if (sum !== i) continue;
//   count++;
// }

// console.log(count);

// let i = 1;
// let count = 0;

// while (i <= 100) {
//   let j = 1;
//   let sum = 0;

//   while (j < i) {
//     if (i % j === 0) {
//       sum += j;
//     }
//     j++;
//   }

//   if (sum !== i) {
//     i++;
//     continue;
//   }

//   count++;
//   i++;
// }

// console.log(count);

// let i = 1;
// let count = 0;

// do {
//   let j = 1;
//   let sum = 0;

//   do {
//     if (j >= i) break;

//     if (i % j === 0) {
//       sum += j;
//     }
//     j++;
//   } while (true);

//   if (sum !== i) {
//     i++;
//     continue;
//   }

// 11

// for (let i = 1; ; i++) {
//   if (i % 7 === 0) break;
//   console.log(i);
// }

// let i = 1;

// while (true) {
//   if (i % 7 === 0) break;
//   console.log(i);
//   i++;
// }

// let i = 1;

// do {
//   if (i % 7 === 0) break;
//   console.log(i);
//   i++;
// } while (true);

// 12

// let sum = 0;
// let count = 0;

// for (let i = 1; ; i++) {
//   sum += i;
//   count++;

//   if (sum > 100) break;
// }

// console.log(sum, count);

// let i = 1, sum = 0, count = 0;

// while (true) {
//   sum += i;
//   count++;

//   if (sum > 100) break;

//   i++;
// }
// console.log(sum, count);

// let i = 1, sum = 0, count = 0;

// do {
//   sum += i;
//   count++;

//   if (sum > 100) break;

//   i++;
// } while (true);

// console.log(sum, count);