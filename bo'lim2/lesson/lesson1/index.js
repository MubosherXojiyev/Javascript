// let raqam1 = 2026
// let raqam2 = "2026"
// console.log(raqam1 + 2);
// console.log(+raqam2 + 2);
// console.log(parseInt(raqam2) + 2);
// console.log(parseFloat(raqam2) + 2);
// console.log(Number(raqam2) + 2);

// str ichidagi raqamni parchalashni nechahil usuli bor 
// 1. +
// 2.ParseInt
// 3.ParseFloat
// 4.Number()

// IsInteger() - is Integer()
// let a = 10
// let b = 10.5
// console.log(Number.isInteger(a));
// console.log(Number.isInteger(b));


//  math methods
// 1. abs - absalute - berilgan sonni hardoim nusbat qilib beradi.


// 2. floor - sonni pastga qarab yaxlitlaydi
// let d = 5.7
// let e = 5.99999
// let f = 5.000001
// console.log(Math.floor(d));
// console.log(Math.floor(e));
// console.log(Math.floor(f));

// let d2 = -5.7
// let e2 = -5.99999
// let f2 = -5.000001
// console.log(Math.floor(d2));
// console.log(Math.floor(e2));
// console.log(Math.floor(f2));

// 3. ceil kasr sonni pastga qarap yahlitlaydi
// let d3 = 5.7
// let e3 = 5.99999
// let f3 = 5.000001
// console.log(Math.ceil(d3));
// console.log(Math.ceil(e3));
// console.log(Math.ceil(f3));

// let d4 = -5.7
// let e4 = -5.99999
// let f4 = -5.000001
// console.log(Math.ceil(d4));
// console.log(Math.ceil(e4));
// console.log(Math.ceil(f4));

// 4. round - kasr son yuqoriga yaqin bolsa yuqoriga qarab pastga bolsa pastga qarab yahritlaydi
// let a = 7.7
// let b = 7.9
// let c = 7.4
// let d = 7.1
// let e = 7.5
// console.log(Math.round(a));
// console.log(Math.round(b));
// console.log(Math.round(c));
// console.log(Math.round(d));
// console.log(Math.round(e));

//  5. tranc - kasr sonni faqat butun qismini kesib oladi
// let a = 3.12
// let b = 3.988
// console.log(Math.trunc(a));
// console.log(Math.trunc(b));

function GetPhone() {
    let arr = [77, 99, 90, 97, 95, 94, 93, 50, 33, 88, 78, 70]
    let code =  Math.trunc(Math.random() * 100)
    let a =  Math.trunc(Math.random() * 10)
    let b =  Math.trunc(Math.random() * 10)
    let c =  Math.trunc(Math.random() * 10)
    let d =  Math.trunc(Math.random() * 10)
    let e =  Math.trunc(Math.random() * 10)
    let f =  Math.trunc(Math.random() * 10)
    let g =  Math.trunc(Math.random() * 10)
    if (code < 10 || !arr.includes(code)) return GetPhone()
        return `+998 ${code} ${a}${b}${c} ${d}${e} ${f}${g}`
} console.log(GetPhone);
