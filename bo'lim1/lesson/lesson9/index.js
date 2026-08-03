// 1. 5 dan 15 gacha bo‘lgan barcha sonlarni ketma-ket console ga chiqaring.

let a = 1
while (a <= 15) {
    console.log(a);
    a++
}

let b = 1
do {
    console.log(b);
    b++
} while (b <= 15)

console.log("----------------------------------------------------------");

// 2. 1 dan 200 gacha bo‘lgan barcha sonlarni qo‘shib, umumiy yig‘indini console ga chiqaring.

let c = 1
let yigindi = 0
while (c <= 200) {
    yigindi += c
    c++
}
console.log(yigindi);

let d = 1
let yigindi2 = 0
do {
    yigindi2 += d
    d++
} while (d <= 200)
console.log(yigindi2);

console.log("----------------------------------------------------------");

// 3. 1 dan 60 gacha bo‘lgan juft sonlarni (2 ga bo‘linadigan) console ga chiqaring.

let e = 1;
while (e <= 60) {
    if (e % 2 === 0) console.log(e);
    e++
}

let f = 1;
do {
    if (f % 2 === 0) console.log(f);
    f++;
} while (f <= 60)

console.log("----------------------------------------------------------");

// 4. 1 dan 60 gacha bo‘lgan toq sonlarni (2 ga bo‘linmaydigan) console ga chiqaring.

let g = 1;
while (g <= 60) {
    if (g % 2 === 1) console.log(g);
    g++
}

let h = 1;
do {
    if (h % 2 === 1) console.log(h);
    h++;
} while (h <= 50)

console.log("----------------------------------------------------------");

// 5. Foydalanuvchi prompt orqali N sonini kiritadi. 1 dan N gacha bo‘lgan har bir sonning kubini (son * son * son) hisoblab console ga chiqaring.

let i = 15
let j = 1
while (j <= i) {
    console.log(j * j);
    j++
}

let k = 15
let l = 1
do {
    console.log(l * l * l);
    l++
} while (l <= k)

console.log("----------------------------------------------------------");

// 6. Foydalanuvchi prompt orqali N sonini kiritadi. 1 dan N gacha bo‘lgan sonlar ichidan faqat 4 ga bo‘linadiganlarini console ga chiqaring.

let m = 20
let o = 1
while (o <= m) {
    if (o % 4 === 0) console.log(o);
    o++
}

let n = 20
let p = 1
do {
    if (p % 4 === 0) console.log(p);
    p++
} while (p <= n)

console.log("----------------------------------------------------------");

// 8. 1 dan 150 gacha bo‘lgan sonlar ichidan 3 ga ham, 5 ga ham bo‘linadigan sonlarni console ga chiqaring.

let q = 150
let r = 1
while (r <= q) {
    if (r % 3 === 0 && r % 5 === 0) console.log(r);
    r++
}

let s = 150
let t = 1
do {
    if (t % 3 === 0 && t % 5 === 0) console.log(t);
    t++
} while (t <= s)

console.log("----------------------------------------------------------");

// 9. 20 dan 1 gacha bo‘lgan sonlarni kamayish tartibida (teskari) console ga chiqaring.

let u = 20
while (u >= 1) {
    console.log(u);
    u--
}

let v = 20
do {
    console.log(v);
    v--
} while (v >= 1)

console.log("----------------------------------------------------------");

// 10. Foydalanuvchi prompt orqali N sonini kiritadi. 1 dan N gacha bo‘lgan faqat juft sonlarni qo‘shib, yig‘indini console ga chiqaring.

let x = 30
let y = 0
while(y <= x) {
    if (y % 2 === 0) y += x
    x++  
}
console.log(y);

let z = 30
let sh = 0
do {
    if (y % 2 === 0) y += x
    x++
}while(y <= x)
    console.log(y);


let xx = 30
let yy = 0
while(y <= x) {
    if (y % 2 === 1) y += xx
    xx++
}
console.log(y);

let zz = 30
let shs = 1
do {
    if (y % 2 === 1) y += x
    x++
}while(y <= x)
    console.log(y);