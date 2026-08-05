//  let arr = ["Olma", "Anor", "Uzum", "Nok"]
//  let newArr = arr.map((value, index, a) => {
//     return value + " " + (index + 1)
//  })
//  console.log(newArr);


// let arr = ["Shaftoli", "Anjir", "Uzum", "Nok"]
// let newArr = arr.filter((value, index, a) => {
//     if(value <=5) 
// })

//  let arr = [1, 2, 3, 4, 5]
//  let newArr = arr.map((value, index, a) => {
//     return value ** 2
//  })
//  console.log(newArr);

// let arr = ["scartch", "python", "html", "css", "javascript", "react js"]
//  let newArr = arr.map((value, index, a) => {
//     return value.at(0).toUpperCase() + value.slice(1)
//  })
//  console.log(newArr);

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