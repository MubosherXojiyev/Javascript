// let arr = [1, 1, 2, 9, 9, 7, 0, 0, 0, 3, 1]  
// let arr2 = arr.splice(1, 19, 2, 9, 7, 0, 3)
// console.log(arr);

// let NewArr = []
// for(let value of arr) {
//     if (!NewArr.includes(value)) NewArr.push(value)
// }
// console.log(NewArr);

// let str = "AAAlllllgooooorritttm"
// let Newstr = []
// for(let value of str) {
//     if (!Newstr.includes(value)) Newstr.push(value)
// }
// console.log(Newstr.join(""));

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let sum = 0;
// for (let value of arr) {
//     let code = `${value}`.charCodeAt()
//     if (!(code % 2)) sum += code
// }

// console.log(sum);

// let str  = "AlgORItm"
// let str2 = str.slice(0, 1)
// let str3 = str.slice(3, 6)

// console.log(str2.concat(str3));
// let str4 = str.slice(1, 3)
// let str5 = str.slice(6)

// console.log(str4.concat(str5));


let str  = "AlgORItm"
let katta = ""
let kichik = ""

for(let value of str) {
if (value !== value.toUpperCase()) kichik += value 
else  katta += value
}

console.log(katta,  kichik);
