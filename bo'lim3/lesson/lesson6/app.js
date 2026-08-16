// let myDate = new Date();

// let hour = myDate.getHours();
// let minutes = myDate.getMinutes();
// let day = myDate.getday();
// let month = myDate.getMonth();
// let year = myDate.getFullYear();
// let second = myDate.getSeconds();

// console.log(four + ":" + minutes);
// console.log(day + ":" + month + ":" + year);


function myclock() {
    let myDate = new Date();
    let year = myDate.getFullYear();
    let month = myDate.getMonth();
    let day = myDate.getDay();
    let hour = myDate.getHours();
    let minutes = myDate.getMinutes();
    let second = myDate.getSeconds();
    let milli = myDate.getMilliseconds();

   
    hour = String(hour).padStart(2, "0")
    minutes = String(minutes).padStart(2, "0")
    second = String(second).padStart(2, "0")
    milli = String(milli).padStart(2, "0")

    document.getElementById("clock").textContent = `${hour} : ${minutes} : ${second} : ${milli}`
    document.getElementById("year").textContent = 
    `${day} : ${month} : ${year}`
}
myclock()

setInterval(myclock, 100)