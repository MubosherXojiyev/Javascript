//  let arr = ["Olma", "Anor", "Uzum", "Nok"]
//  let newArr = arr.map((value, index, a) => {
//     return value + " " + (index + 1)
//  })
//  console.log(newArr);


// let arr = ["Shaftoli", "Anjir", "Uzum", "Nok"]
// let newArr = arr.filter((value, index, a) => {
//     if(value <=5) 
// })

//  let arr = [1, 2, 3, 4, 5]
//  let newArr = arr.map((value, index, a) => {
//     return value ** 2
//  })
//  console.log(newArr);

let arr = ["scartch", "python", "html", "css", "javascript", "react js"]
 let newArr = arr.map((value, index, a) => {
    return value.at(0).toUpperCase() + value.slice(1)
 })
 console.log(newArr);