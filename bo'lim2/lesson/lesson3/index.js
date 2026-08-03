// let str = "aaaaaaaaa\naaaaaaaaaa"
// console.log(str);

// let str = "Sa\tlom"
// console.log(str);

// let str = "Algoritm"

// let count = 0;
// for (let value of str) {
//     console.log(value);
//     count++
// }
// console.log(count);


let str = "Algoritm and Oxford"
// 1. length
// let uzunlik = str.length;
// console.log(uzunlik);

// 2. charAtt(), at()
// console.log(str.charAt(0));
// console.log(str[0]);
// console.log(str.at(0));
// console.log("=-=-=-=-=-=-=-=-=-=-=-=-=");
// console.log(str.charAt(-1));
// console.log(str[-1]);
// console.log(str.at(-1));

// 3. charCodeAt
// console.log(str.charCodeAt(1));

// 4. concat()
// let matn1 = "Salom"
// let matn2 = "Alik"
// let matn3 = "Nima Gap"
// let matn = matn1.concat(" ", matn2, " ", matn3)
// console.log(matn);

// let i = "and"
// if (str.includes(i)) {
//     str = str.replace(i, "va")  
// } else {
//     console.log("yoq mavjudmas");
    
// }
// console.log(str)

//  6, startWith() , endWith()
// let s = "Alg"
// let isStart = str.startsWith(s)
// console.log(isStart);
// let s2 = "rd "
// let isStart2 = str.endsWith(s2)
// console.log(isStart2);

// let isAlpa = str.search("and")
// console.log(isAlpa); 
// console.log(str.indexOf("o"));
// console.log(str.lastIndexOf("o")); 

let phone = "12 345 67 89"
let newphone = phone.padStart(phone.length + 5, "")
