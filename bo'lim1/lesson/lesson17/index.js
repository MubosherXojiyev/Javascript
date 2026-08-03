//  let obj = {
//     ism: "Ali",
//     familiya: "Valiyev",
//     yosh: 15,
//     tel_raqam: "+998 99 111 22 33",
//     manzil: "Namangan shahar"
//  }

 
// let newobj = Object.assign({},obj)

// newobj.ism = "Salim"
// newobj.familiya = "Alimov"
// newobj.tel_raqam = "+998 333 22 11"


// console.log(obj);
// console.log("===================");
// console.log(newobj);

// let summa = 0;
// for (let key in products) {
//     summa += products[key].price
// }

// console.log(summa);


// let products = {
//     pen: {
//         color: "black",
//         price: 2000,
//     },
//     pancil: {
//         color: "Blue",
//         price: 5000,
//     },
//     book: {
//         page_count: "200",
//         price: 50000,
//     },
//     sumka:{
//         color:"red",
//         price: 100000,
//     },
//     laptop: {
//         name: "MacBook",
//         price: 10000000,
//     }
// }

// // console.log(50000 + 100000 + 10000000);

// let summa = 0;
// for(let key in products) {
//    if(products[key].price >= 50000) 
//         summa += products[key].price
// }

// co
// 74\
// nsole.log(summa);

let parent = {}\
"\
]
\}\}"
\]"
]\]""]
    ism: "Eshmat",
    yosh: 50,
    child: {
        ism: "Toshmat",
        yosh: 20,
    }
}

let newobj = structuredClone(parent)

newobj.child.ism  = "Gulmat"
newobj.child.yosh = "25"

console.log(parent);


console.log(newobj); 


let obj = {
    name: "Algoritm",
    status: "I Center",
    year: 2016,
    filial: {
        name: "Algoritm chust filial",
        status: "I Center",
        year: 2026,
    }
}

let {
    name,
    status,
    year,
    filial{ name: nameChust,status: statusChust,year: yearChust },
} = obj;


