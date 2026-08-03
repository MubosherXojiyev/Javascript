// let obj ={
//     model: "GH",
//     name: "Malibu",
//     color: "Black",
//     price: 20000
// }


// function arzonlashdi(obj) { 
//     for(let key in obj) {
//         if(key === "price") obj[key] - (obj[key] *15) /100
//     }
//     return obj
// }
// console.log(arzonlashdi(obj));


let obj ={
    name: "Coca cola",
    width: "2l",
    OldPrice: 15000,
    NewPrice: 18000
}


for(let key in obj) {
    if (key ==="OldPrice") {
        let qqs = (obj.NewPrice * 100) / obj[key] - 100
        console.log(qqs);
        
    }
}