// ForEach
// let arr = ["Olma", "Anor", "Uzum", "Nok"]

// let sum = 0
// arr.forEach((value, index, a) => {
//     // sum += value.length
//     if(index === 3) {
//     console.log(value);
//     }
// })
// console.log(sum);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let sum = 0
// arr.forEach((value, index, a) => (sum += value));
// console.log(sum);

// ========================================

// map
// let arr = ["Olma", "Anor", "Uzum", "Nok"]
// let newArr = arr.map((value, index, a) => {
//     return value + " olaman."
// })
//     console.log(newArr);
    
//  let arr = ["Olma", "Anor", "Uzum", "Nok"]

// ["Olma 1", "Anor 2", "Uzum 3", "Nok 4"]
// let newArr = arr.map((value, index, a) => `${value} ${index + 1}`)
// console.log(newArr);

// forEach va map | farqi.
// forEachda return ishlamaydi, qiymat qaytmaydi.
// map da return ishlaydi, ozidan yangi qiymat array qaytaradi.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let newArr = arr.filter((value, index, a) => {
//     if (value <= 5) return value;
// })
// console.log(newArr);


let students = ["Ali", "Vali", "Sami", "Olim"];

students.forEach((student, index) => {
    console.log(`${index + 1}. ${student}`);
});

// 2. Narxlarni 10% chegirma bilan chiqarish
let prices = [10000, 20000, 15000];

prices.forEach((price) => {
    console.log(price * 0.9);
});

// 3. Mevalarni katta harfda chiqarish
let fruits = ["olma", "anor", "banan"];

fruits.forEach((fruit) => {
    console.log(fruit.toUpperCase());
});


// map masalalari

// 1. Yoshga 1 yil qo'shish
let ages = [15, 18, 20, 25];

let newAges = ages.map((age) => {
    return age + 1;
});

console.log(newAges);

// 2. Ismlarga "bek" qo'shish
let names = ["Ali", "Vali", "Sami"];

let newNames = names.map((name) => {
    return name + "bek";
});

console.log(newNames);

// 3. Sonlarni matnga aylantirish
let numbers = [1, 2, 3, 4];

let result = numbers.map((number) => {
    return `Son ${number};`
});

console.log(result);


// filter masalalari


// 1. 18 yoshdan kattalarni ajratish
let ageList = [12, 18, 25, 16, 30];

let adults = ageList.filter((age) => {
    return age >= 18;
});

console.log(adults);

// 2. Uzun so'zlarni ajratish
let words = ["olma", "banan", "shaftoli", "anor"];

let longWords = words.filter((word) => {
    return word.length > 5;
});

console.log(longWords);

// 3. Musbat va nol sonlarni ajratish
let nums = [-5, 0, 7, -2, 10];

let positiveNumbers = nums.filter((num) => {
    return num >= 0;
});

console.log(positiveNumbers);