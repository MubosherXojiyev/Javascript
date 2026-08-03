let sardoba = {
    meva: "Olma",
    rangi: "qizil",
    narxi: 1200,
    kilosi: "1kg"
}

let newsardoba = {}
for(let key in sardoba) {
    if(typeof sardoba[key] === "number") {
        newsardoba[key] = sardoba[key] + 12000
    } else if (key === "kilosi") {
        newsardoba[key] = "2kg"
    } else {
    newsardoba[key] = sardoba[key]  
    }
}
console.log(newsardoba);

let sardobauz = {}
for(let key in sardoba) {
    if(typeof sardoba[key] === "number") {
        sardobauz[key] = sardoba[key] + 13000
    } else if (key === "kilosi") {
        sardobauz[key] = "3kg"
    } else {
    sardobauz[key] = sardoba[key]  
    }
}
console.log(sardobauz);


let sardobatv = {}
for(let key in sardoba) {
    if(typeof sardoba[key] === "number") {
        sardobatv[key] = sardoba[key] + 14000
    } else if (key === "kilosi") {
        sardobatv[key] = "4kg"
    } else {
    sardobatv[key] = sardoba[key]  
    }
}
console.log(sardobatv);

let chorsu = {}
for(let key in sardoba) {
    if(typeof sardoba[key] === "number") {
        chorsu[key] = sardoba[key] + 15000
    } else if (key === "kilosi") {
        chorsu[key] = "5kg"
    } else {
    chorsu[key] = sardoba[key]  
    }
}
console.log(chorsu);

let chorsuuz = {}
for(let key in sardoba) {
    if(typeof sardoba[key] === "number") {
        chorsuuz[key] = sardoba[key] + 16000
    } else if (key === "kilosi") {
        chorsuuz[key] = "6kg"
    } else {
    chorsuuz[key] = sardoba[key]  
    }
}
console.log(chorsuuz);

let chorsutv = {}
for(let key in sardoba) {
    if(typeof sardoba[key] === "number") {
        chorsutv[key] = sardoba[key] + 17000
    } else if (key === "kilosi") {
        chorsutv[key] = "7kg"
    } else {
    chorsutv[key] = sardoba[key]  
    }
}
console.log(chorsutv);

let korzinka = {}
for(let key in sardoba) {
    if(typeof sardoba[key] === "number") {
        korzinka[key] = sardoba[key] + 18000
    } else if (key === "kilosi") {
        korzinka[key] = "8kg"
    } else {
    korzinka[key] = sardoba[key]  
    }
}
console.log(korzinka);

let korzinkauz = {}
for(let key in sardoba) {
    if(typeof sardoba[key] === "number") {
        korzinkauz[key] = sardoba[key] + 19000
    } else if (key === "kilosi") {
        korzinkauz[key] = "9kg"
    } else {
    korzinkauz[key] = sardoba[key]  
    }
}
console.log(korzinkauz);

let korzinkatv = {}
for(let key in sardoba) {
    if(typeof sardoba[key] === "number") {
        korzinkatv[key] = sardoba[key] + 20000
    } else if (key === "kilosi") {
        korzinkatv[key] = "10kg"
    } else {
    korzinkatv[key] = sardoba[key]  
    }
}
console.log(korzinkatv);

let skitka = {}
for(let key in sardoba) {
    if(typeof sardoba[key] === "number") {
        skitka[key] = sardoba[key] + 21000
    } else if (key === "kilosi") {
        skitka[key] = "13kg"
    } else {
    skitka[key] = sardoba[key]  
    }
}
console.log(skitka);