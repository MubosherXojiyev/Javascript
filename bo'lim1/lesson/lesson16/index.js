// let obj = {
//     ism:"muboshsher",
//     familiya: "Xodjiyev",
//     yosh: 12,
//     kurs:"Frontend"
// }

// for(let key in obj) {
//     console.log(key, obj[key]);   
// }
// obj.ism = "Abdulaziz"
// obj.familiya = "Ayubov"
// obj.yosh = 13
// obj.kurs = "JavaScript"

// console.log(obj);

// obj[ism] = "Ilhomjon"
// obj[familiya] = "Abdurahimov"
// obj[yosh] = 12
// obj[kurs] = "C++"


// let laptop = {
//     name: "hp",
//     country: "USA",
//     price: 1000,
// }

// let newlaptop = {}
// for(let key in laptop) {
//     if(typeof laptop[key] === "number")
//         newlaptop[key] = laptop[key] / 2
//     else {
//     newlaptop[key] = laptop[key]
// }
// }

// console.log(newlaptop);

// let laptop = {
//     name: "Macbook",
//     country: "USA",
//     price: 1000,
//     chip: M4 ,
// }

// let newlaptop = {}
// for(let key in laptop) {
//     if(typeof laptop[key] === "number") {
//         newlaptop[key] = laptop[key] / 2
//     } else if (key === "chip") {
//         newlaptop[key] = "M2"
//     } else {
//     newlaptop[key] = laptop[key]  
//     }

// }
// console.log(newlaptop);


let sardoba = {
    meva: "Olma",
    rangi: "qizil",
    narxi: 1200,
    kilosi: "1kg"
}

let newsardoba = {}
for(let key in sardoba) {
    if(typeof sardoba[key] === "number") {
        newsardoba[key] = sardoba[key] + 1200
    } else if (key === "kilosi") {
        newsardoba[key] = "2kg"
    } else {
    newsardoba[key] = sardoba[key]  
    }
}
console.log(newsardoba);
