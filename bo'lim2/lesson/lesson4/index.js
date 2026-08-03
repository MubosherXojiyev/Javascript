// repeat - bir qiymatni qayta- qayta takrorlash uchun ishlatiladi.
// let ism = "Toshmat";
// let r = ism.repeat(5)
// console.log(r);

// // gol - goooooooooool
// let str = "gol"
// let newstr = str[0] + str[1].replace(10) + str[2]
// console.log(newstr);
// // =----------------------------=
// // replace , replaceAll
//  let sana = "17.07.2026"
//  sana = sana.replaceAll(".", "/")
// console.log(nana);
// let email = "Ali@gmail.com"
// email = email.replace("gmail.com", "Yandex.ru")
// console.log(email);
//  slice va substring - matndan nesha olish uchun ishlatiladi.
// let str = "Men Algoritm It Centerda o'qiyman"
// // let a = str.slice(4, 12)
// // let b = str.substring(4, 12)
// let c = str.slice(-9)
// console.log(c);
// let d = str.substring(-9)
// console.log(d);

// =============================
// split str qiymatni arr qilish uchun ishlatiladi
//  "Algoritm" - ["A","l","g","o","r","t","i","m"]
// let str = "Algoritm"
// let arr = str.split("")
// console.log(arr);
// let str = "Algoritm, Oxfort, Start21, ziokor"
// let arr = str.split(", ")
// console.log(arr);

// -----------------------------------
// trim qiymat qoshi va ohiridagi bosh probellarni olib tashlash uchun 
let  matn = "   salom     "
console.log(matn);
matn = matn.trim()
console.log(matn);

let son = 200
console.log(son.toString());


// Locamcompare - xarflarni alfavit boyicha taqqoslaydi
// 1 -1 0
let a = "salom"
let b = "lom"
console.log(a.localeCompare(b));

let c = "salom"
let d = "salom"
console.log(c.localeCompare(d));

let f = "Zlik"
let e = "Salom"
console.log(f.localeCompare(e));

let sum = "(2"