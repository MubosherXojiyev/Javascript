// function a(stop) {
//     for (let i = 1; i <= stop; i++) {
//         if (i % 5 === 0) continue;
//         console.log(i);
//     }
// }
// a()

// function b(stop) {
//     let i = 1;
//     while (i <= stop) {
//         if (i % 5 === 0) {
//             i++;
//             continue;
//         }
//         console.log(i);
//         i++;
//     }
// }
// b()

// function c(stop) {
//     let i = 1;
//     do {
//         if (i % 5 === 0) {
//             i++;
//             continue;
//         }
//         console.log(i);
//         i++;
//     } while (i <= stop);
// }
// c()

// function d(stop) {
//     for (let i = 1; i <= stop; i++) {
//         if (i % 2 !== 0) continue;
//         console.log(i);
//     }
// }
// d()

// function d(stop) {
//     let i = 1;
//     while (i <= 30) {
//         if (i % 2 !== 0) {
//             i++;
//             continue;
//         }
//         console.log(i);
//         i++;
//     }
// }
// d()

// function d(stop) {
//     let i = 1;
//     do {
//         if (i % 2 !== 0) {
//             i++;
//             continue;
//         }
//         console.log(i);
//         i++;
//     } while (i <= 30);
// }
// d()

// function sumFor() {
//   let sum = 0;
//   for (let i = 1; i <= 50; i++) {
//     if (i >= 10 && i <= 20) continue;
//     sum += i;
//   }
//   console.log(sum);
// }
// sumFor()

// function sumWhile() {
//   let i = 1, sum = 0;
//   while (i <= 50) {
//     if (i >= 10 && i <= 20) {
//       i++;
//       continue;
//     }
//     sum += i;
//     i++;
//   }
//   console.log(sum);
// }
// sumWhile()

// function sumDoWhile() {
//   let i = 1, sum = 0;
//   do {
//     if (i >= 10 && i <= 20) {
//       i++;
//       continue;
//     }
//     sum += i;
//     i++;
//   } while (i <= 50);
//   console.log(sum);
// }
// sumDoWhile()

// function digitsFor() {
//   for (let i = 1; i <= 100; i++) {
//     if (sum === 5) continue;
//     console.log(i);
//   }
// }
// digitsFor()

// function digitsWhile() {
//   let i = 1;
//   while (i <= 100) {
//     if (sum === 5) {
//       i++;
//       continue;
//     }
//     console.log(i);
//     i++;
//   }
// }
// digitsWhile()

// function digitsDoWhile() {
//   let i = 1;
//   do {
//     let sum = Math.floor(i / 10) + (i % 10);
//     if (sum === 5) {
//       i++;
//       continue;
//     }
//     console.log(i);
//     i++;
//   } while (i <= 100);
// }
// digitsDoWhile()

// function multFor() {
//   let a = 1;
//   for (let i = 1; i <= 40; i++) {
//     if (i % 3 === 0 && i % 7 === 0) continue;
//     a *= i;
//   }
//   console.log(a);
// }
// multFor()

// function multWhile() {
//   let i = 1, b = 1;
//   while (i <= 40) {
//     if (i % 3 === 0 && i % 7 === 0) {
//       i++;
//       continue;
//     }
//     b *= i;
//     i++;
//   }
//   console.log(b);
// }
// multWhile()

// function multDoWhile() {
//   let i = 1, c = 1;
//   do {
//     if (i % 3 === 0 && i % 7 === 0) {
//       i++;
//       continue;
//     }
//     c *= i;
//     i++;
//   } while (i <= 40);
//   console.log(c);
// }
// multDoWhile()

// function primeFor() {
//   for (let i = 2; i <= 100; i++) {
//     let d = true;
//       if (i % j === 0) {
//         d = false;
//         break;
//       }
//     }
//     if (!d) continue;
//     console.log(i);
//   }
// }
// primeFor()

// function primeFor() {
//   for (let i = 2; i <= 100; i++) {
//     let isPrime = true;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (!isPrime) continue;
//     console.log(i);
//   }
// }

// function primeWhile() {
//   let i = 2;
//   while (i <= 100) {
//     let isPrime = true;
//     let j = 2;

//     while (j <= Math.sqrt(i)) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//       j++;
//     }

//     if (!isPrime) {
//       i++;
//       continue;
//     }

//     console.log(i);
//     i++;
//   }
// }

// function primeDoWhile() {
//   let i = 2;
//   do {
//     let isPrime = true;
//     let j = 2;

//     do {
//       if (j > Math.sqrt(i)) break;
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//       j++;
//     } while (true);

//     if (!isPrime) {
//       i++;
//       continue;
//     }

//     console.log(i);
//     i++;
//   } while (i <= 100);
// }

// function skipFor() {
//   for (let i = 1; i <= 50; i++) {
//     if (i >= 10 && i % 11 === 0) continue;
//     console.log(i);
//   }
// }

// function skipWhile() {
//   let i = 1;
//   while (i <= 50) {
//     if (i >= 10 && i % 11 === 0) {
//       i++;
//       continue;
//     }
//     console.log(i);
//     i++;
//   }
// }

// function skipDoWhile() {
//   let i = 1;
//   do {
//     if (i >= 10 && i % 11 === 0) {
//       i++;
//       continue;
//     }
//     console.log(i);
//     i++;
//   } while (i <= 50);
// }

// function perfectFor() {
//   let count = 0;

//   for (let i = 1; i <= 100; i++) {
//     let sum = 0;

//     for (let j = 1; j < i; j++) {
//       if (i % j === 0) sum += j;
//     }

//     if (sum !== i) continue;
//     count++;
//   }

//   console.log(count);
// }

// function perfectWhile() {
//   let i = 1;
//   let count = 0;

//   while (i <= 100) {
//     let j = 1;
//     let sum = 0;

//     while (j < i) {
//       if (i % j === 0) sum += j;
//       j++;
//     }

//     if (sum !== i) {
//       i++;
//       continue;
//     }

//     count++;
//     i++;
//   }

//   console.log(count);
// }

// function perfectDoWhile() {
//   let i = 1;
//   let count = 0;

//   do {
//     let j = 1;
//     let sum = 0;

//     do {
//       if (j >= i) break;
//       if (i % j === 0) sum += j;
//       j++;
//     } while (true);

//     if (sum !== i) {
//       i++;
//       continue;
//     }

//     count++;
//     i++;
//   } while (i <= 100);

//   console.log(count);
// }

// function palindromeFor() {
//   for (let i = 1; i <= 1000; i++) {
//     let str = i.toString();
//     let rev = str.split('').reverse().join('');

//     if (str !== rev) continue;
//     console.log(i);
//   }
// }

// function palindromeWhile() {
//   let i = 1;
//   while (i <= 1000) {
//     let str = i.toString();
//     let rev = str.split('').reverse().join('');

//     if (str !== rev) {
//       i++;
//       continue;
//     }

//     console.log(i);
//     i++;
//   }
// }

// function palindromeDoWhile() {
//   let i = 1;
//   do {
//     let str = i.toString();
//     let rev = str.split('').reverse().join('');

//     if (str !== rev) {
//       i++;
//       continue;
//     }

//     console.log(i);
//     i++;
//   } while (i <= 1000);
// }

// function inputFor() {
//   let sum = 0;

//   for (let i = 0; i < 10; i++) {
//     let num = Number(prompt("Son kiriting:"));
//     if (num < 0) continue;
//     sum += num;
//   }

//   console.log(sum);
// }

// function inputWhile() {
//   let i = 0, sum = 0;

//   while (i < 10) {
//     let num = Number(prompt("Son kiriting:"));

//     if (num < 0) {
//       i++;
//       continue;
//     }

//     sum += num;
//     i++;
//   }

//   console.log(sum);
// }

// function inputDoWhile() {
//   let i = 0, sum = 0;

//   do {
//     let num = Number(prompt("Son kiriting:"));

//     if (num < 0) {
//       i++;
//       continue;
//     }

//     sum += num;
//     i++;
//   } while (i < 10);

//   console.log(sum);
// }

// function breakFor() {
//   for (let i = 1; ; i++) {
//     if (i % 7 === 0) break;
//     console.log(i);
//   }
// }
// breakFor()

// function breakWhile() {
//   let i = 1;
//   while (true) {
//     if (i % 7 === 0) break;
//     console.log(i);
//     i++;
//   }
// }
// breakWhile()

// function breakDoWhile() {
//   let i = 1;
//   do {
//     if (i % 7 === 0) break;
//     console.log(i);
//     i++;
//   } while (true);
// }
// breakDoWhile()

// function c() {
//   let sum = 0, count = 0;

//   for (let i = 1; ; i++) {
//     sum += i;
//     count++;

//     if (sum > 100) break;
//   }

//   console.log(sum, count);
// }
// c()

// function b() {
//   let i = 1, sum = 0, count = 0;

//   while (true) {
//     sum += i;
//     count++;

//     if (sum > 100) break;

 //   } 

//   console.log(sum, count);
// }
// b()

        



