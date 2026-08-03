// const user = {
//     name: "Ali",
//     age: 25,
//     jop: "developer"
// }
// const key = "salariy"

// function getSalary(a,b) {
//   if (b in a) console.log(a[b]);   
//  else console.log("notfound");   
// }
// getSalary(user,key)

// const status = {
//     views: 10,
// }
// const key = "views"

// function setKey(a) {
//     if (a in status) status[a]++;
//     else status[a] = 1
// }
// setKey(key)

// console.log(status);

// const user = {
//     name: "Ali",
//     address: {
//         city: "Toshkent"
//     }
// }


// const a = {x: 1, y: 2}
// const b = {y: 10, z: 3}
// const c = {z: 100}

// const obj = Object.assign(a, b, c)
// console.log(obj);

// const data = {
//     user: {
//         name: "Ali",
//         skills: ["Js", "React"],
//     },
// };

// const newdata = structuredClone(data)

// function newdata(data,newdata) {
// newdata.user.skills = ["Js", "React","NodeJs"]
// console.log(newdata);
// console.log(data);


// }newdata(statusbar,newdata)

// const user = {
//     name: "Ali"
// }

// if("age" in user) {
//     user["age"]++
// } else {

// }
// user["age"] = 18
// console.log(user);

const user = {
    name: "Ali"
}

const {name , age = 18} = user