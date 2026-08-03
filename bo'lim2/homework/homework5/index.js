// Arrey nima

// Arrey - bu o'zida barcha data typedagi qiymatlarni saqlab turuvchi
// container va NanPrimitive (Reference) data type siga kiruchi malumot
// hisoblanadi

// 1. []
// 2. Arrey()

// Arreys Loop.
//1. for Loop.
//2. While Loop.
//3. do while Loop.
//4. for of Loop.
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// for(let value of arr){
//     console.log(value)
// }

// let mut = [1, 2,[3, [4, 5, [6, [7]]]]]
// console.log(mut[2][0])

// push - arrey ohiriga qiymat qo'shadi
// let arr = [1, 2, 3]
// arr.push(4, -1, -2)
// console.log(arr)

// pop - arrey ohiridan faqat 1 ta qiymat o'chirib beradi.
// let arr = [1, 2, 3]
// arr.pop()
// console.log(arr)

// unshift  - arrey boshiga qiymat qo'shib beradi
// let arr = [1, 2, 3]
// arr.unshift(-1, 0)
// console.log(arr)

// shift - arrey boshidan faqat 1 qiymat qiymat ochiradi
// let arr = [1, 2, 3]
// arr.shift()
// console.log(arr)

// []  - cler vazifasini bajaradi
// let arr = [1, 2, 3]
// arr = []

// delete - arreyn ichidan faqat qiymat o'chiradi, qiymatni bo'sh o'rni qolib ketadi. <1 empty item>
// let arr = [1, 2, 3]
// delete arr[1]
// console.log(arr)

// length arrey ni uzun ligini aniqlaydi.
// at() - arrey ichidan 1 ta qiymat index orqali chiqarish uchun ishlatiladi.
// minus (manfiy) qiymat ham qabul qiladi

// let arr = [1, 2, 3]
// console.log(arr[2])
// console.log(arr.at[-1])

// indexOf - qiymatni sizga kerak li bo'lgan qiymatni arrey ni olditomonidan qidiradi qiymatni topsa uning indexini qaytaradi topa olmasa 1- qaytaradi
// let arr =   ["olma", "Anor", "Uzum"]
// let i = arr.indexOf("Anor")
// console.log(i)

// lastIndexOf - sizga kerak bo'lgan qiymatni arrey ni orqa tomoni dan qidiradi va topsa uni indexini qayteradi topaolmasa -1 qaytaradi
// let arr = ["olma", "Anor", "Uzum"];
// let i = arr.lastIndexOf("Olma")
// console.log(i)

// includes - arrey ichida siz qilayotgan qiymat bormi yoki yo'q mi tekshiradi true yoki false javob qaytaradi 
// let arr = [1, 2, 3]
// console.log(arr.includes(3))
// console.log(arr.includes(0))

// join - arrey ni strin ga aylantirib beradi
// let arr = [1, 2, 3]
// // console.log(arr.join("-"))
// console.log(eval(arr.join("*")))

// reverse - arreyni teskari tartibda qilib beradi
// let arr = [1, 2, 3]
// arr.reverse()
// console.log(arr)

// let raqam = 842471;
// raqam = +${raqam}.split("").reverse().join("")
// console.log(raqam)

// concat - 2 va unden artiq arrey larni birbiriga  birlashtirib beradi .
// slice - arrey dan nusxa olib beradi. startindex  va endIndex qabul qiladi 

// splice(StrtIndex, delecount, replacer) - arrey ni malum bir qismini kesib oladi va yangi arrey qaytaradi .

// let arr = [1, 2, 3]
// let a = arr.splice(1, 1, 22);
// console.log(a)
// console.log(arr)