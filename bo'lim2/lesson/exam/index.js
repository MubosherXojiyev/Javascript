let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr2 = arr.splice(2, 6, 5, 6)
let arr3 = arr2.splice(2, 2)
console.log(arr);
console.log(arr2);

/////////////////////////////////////////////////////2/////////////////////////////////////////////////////////////
console.log("+998", Math.floor(Math.random()* 100) + "", Math.floor(Math.random() * 1000) + "", Math.floor(Math.random()* 100) + "", Math.floor(Math.random()* 90)+ "");
///////////////////////////////////////////////////////3///////////////////////////////////////////////////////////
let son = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let summa = 0
for(let a = 0; a < son.length; a++) {
    if(son[a] % 2 === 0){
        summa += son[a]
    }
}
console.log(summa);

///////////////////////////////////////////////////////4/////////////////////////////////////////////////////////////
let str = "algoritm it"
let newstr = ""
for(let g = 0; g < str.length; g++) {
    if(g === 0 || (g >= str.length - 2)) {
        newstr += str[g].toUpperCase()
    }else {
        newstr += str[g]
    }
}
console.log(newstr);

////////////////////////////////////////////////////////5//////////////////////////////////////////////////////////////////
let str3 = "Men Alg0r1tmda 0'q1man."
.replaceAll("0", "o")
.replaceAll("1", "i")

console.log(str3);

