let obj = {
    id: "1",
    nomi: "Malibu",
    rangi: "Qora",
    narxi: 15000
}
let kirididolma = {}
for(let key in obj){
    if(typeof obj[key] === "number") {
        kirididolma[key] = obj[key] + 2550
    }  else {
    kirididolma[key] = obj[key]  
    }
}
console.log(kirididolma);

let start = 1
let  stop = 10
// console.log(1 + 3 + 5 + 7 + 9)
// console.log(2 + 4 + 6 + 8 + 10);

