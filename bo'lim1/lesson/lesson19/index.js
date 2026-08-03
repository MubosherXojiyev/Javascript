// let toq_yigindi = 0
// let juft_yigindi = 0
// let raqam = 1
// while (raqam <= 10) {
//     if (raqam % 2 === 1) toq_yigindi += raqam
//     else juft_yigindi += raqam
//     raqam++
// }
// console.log(toq_yigindi);
// console.log(juft_yigindi);
// console.log("-=-=-=-=-=WHILE loop-=-=-=-=-=");
// let toq_yigindi2 = 0
// let juft_yigindi2 = 0
// let raqam2 = 1
// do {
//     if (raqam2 % 2 === 1) toq_yigindi2 += raqam2
//     else juft_yigindi2 += raqam2
//     raqam2++
// } while (raqam2 <= 10)
// console.log(toq_yigindi2);
// console.log(juft_yigindi2);
// console.log("-=-=-=-=-=DO WHILE loop-=-=-=-=-=");

obj = {
    id: 1,
    ism: "Ali",
    familiya: "Valiyev",
    yosh: 20,
    phone_price:1000,
}
// Function Declaration
// function hisobla(obj) {
//   for (let key in obj) {
//     if (key === "phone_price") {
//         obj[key] = obj[key] - (obj[key] * 15) / 100
//     }
//   }
//   return obj
// }
// console.log(hisobla(obj));

// obj2 = {
//     id: 1,
//     ism: "Ali",
//     familiya: "Valiyev",
//     yosh: 20,
//     phone_price:1000,
// }
 // Function Expression
// const hisobla2 = function (obj2) {
//     for (let key in obj2) {
//     if (key === "phone_price") {
//         obj2[key] = obj2[key] - (obj2[key] * 15) / 100
//     }
//   }
//   return obj2 
// };
// console.log(hisobla2(obj2));


obj1 = {
    id: 1,
    ism: "Ali",
    familiya: "Valiyev",
    child: {
        id: 2,
        ism: "Vali",
        familiya: "Aliyev",  
    }
}

obj2 = {
    id: 2,
    ism: "Vali",
    familiya: "Aliyev",
    child: {
        id: 1,
        ism: "Ali",
        familiya: "Valiyev",  
    }
}
console.log(obj1);
console.log(obj2);


// const {
//     id,
//     ism , 
//     familiya, 
//     child: {id: Id2, ism: ism2, familiya: familiya2},
// } = obj;
// console.log(id, ism, familiya);
// console.log(Id2, ism2, familiya2,);

