// 1
let arr = ["Salom, Gemini, AI"]
let arr2 = arr.join("").split("").reverse("")
console.log(arr2);



// 2
let str = "Algoritm IT Center"
    .split(" ")
let str2 = str.splice(0, 8, "aLGORITM ")
let str3 = str.splice(9, 2, "it")
let str4 = str.splice(11, 6, "cENTER")


console.log(str);

// 3
let ar = [1, 2, 3, 4, 5, 6, 7]
let ar2 = ar.splice(2, 3, 30, 40, 50)
console.log(ar);
console.log(ar2);

// 4
let st = "A2lgo0ri2tm6"
for(let value of st) {
    if(value.includes("Algoritm")){
        console.log(st);
     }
}


let a = [198, 5, 27, 4, 18, 44, 72]

