/* ========================================
   FIND() METODI
======================================== */

// 1-masala 10 dan katta bo'lgan birinchi juft son
// const arr1 = [3, 7, 8, 12, 15, 20, 9];

// const result1 = arr1.find(num => num > 10 && num % 2 === 0);
// console.log(result1); // 12


// 2-masala 3 ga ham, 5 ga ham bo'linadigan birinchi son
// const arr2 = [10, 15, 21, 30, 45, 9];

// const result2 = arr2.find(num => num % 3 === 0 && num % 5 === 0 && num > 15);
// console.log(result2); // 30


/* ========================================
   FINDINDEX() METODI
======================================== */

// 3-masala Birinchi manfiy sonning indeksini topish
// const arr3 = [5, 8, 12, -3, 7, -9, 2];

// const result3 = arr3.findIndex(num => num < 0);
// console.log(result3); // 3


// 4-masala Kvadrat ildizi butun son bo'lgan birinchi element indeksi
// const arr4 = [10, 18, 16, 22, 30, 25];

// const result4 = arr4.findIndex(num => Number.isInteger(Math.sqrt(num)));
// console.log(result4); // 2


/* ========================================
   FINDLASTINDEX() METODI
======================================== */

// 5-masala 50 dan kichik va 3 ga bo'linadigan oxirgi son indeksi
// const arr5 = [12, 60, 9, 45, 100, 33, 80];

// const result5 = arr5.findLastIndex(num => num < 50 && num % 3 === 0);
// console.log(result5); // 5


// 6-masala Ikki xonali sonning oxirgi indeksini topish
// const arr6 = [5, 23, 100, 45, 200, 78, 300];

// const result6 = arr6.findLastIndex(num => num >= 10 && num <= 99);
// console.log(result6); // 5

