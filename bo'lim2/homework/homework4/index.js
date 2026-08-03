let text = "Salom";
console.log(text.length);

let ism = "Ali";
console.log(ism.length);


let text1 = "Salom";
console.log(text1.charAt(0));

let text2 = "anor";
console.log(text2.charAt(2));


let text3 = "Salom";
console.log(text3.at(-1));

let text4 = "anor";
console.log(text4.at(-2));


let text5 = "A";
console.log(text5.charCodeAt(0));

let text6 = "B";
console.log(text6.charCodeAt(0));


let a = "Ali";
let b = "Vali";
console.log(a.concat(b));

let c = "Salom ";
let d = "Dunyo";
console.log(c.concat(d));


let text7 = "JavaScript";
console.log(text7.includes("Java"));

let text8 = "anor";
console.log(text8.includes("a"));


let text9 = "Salom";
console.log(text9.startsWith("S"));

let text10 = "Java";
console.log(text10.startsWith("J"));


let text11 = "Salom";
console.log(text11.endsWith("m"));

let text12 = "anor";
console.log(text12.endsWith("a"));


let text13 = "Salom";
console.log(text13.search("l"));

let text14 = "anor";
console.log(text14.search("m"));


let text15 = "banana";
console.log(text15.indexOf("a"));

let text16 = "anor";
console.log(text16.indexOf("m"));


let text17 = "banana";
console.log(text17.lastIndexOf("a"));

let text18 = "Salom";
console.log(text18.lastIndexOf("o"));


let text19 = "5";
console.log(text19.padStart(3, "0"));

let text20 = "9";
console.log(text20.padStart(2, "0"));


let text21 = "Ali";
console.log(text21.padEnd(5, "*"));

let text22 = "JS";
console.log(text22.padEnd(4, "-"));


console.log("Hi".repeat(3));

console.log("*".repeat(5));


let text23 = "anor";
console.log(text23.replace("O", "A"));

let text24 = "Salom";
console.log(text24.replace("a", "o"));


let text25 = "aaa";
console.log(text25.replaceAll("a", "b"));

let text26 = "1 2 3";
console.log(text26.replaceAll(" ", "-"));


let text27 = "Salom";
console.log(text27.slice(0, 2));

let text28 = "JavaScript";
console.log(text28.slice(4));


let text29 = "Salom";
console.log(text29.substring(1, 4));

let text30 = "anor";
console.log(text30.substring(0, 2));


let text31 = "Ali Vali";
console.log(text31.split(" "));

let text32 = "1,2,3";
console.log(text32.split(","));


let text33 = " Salom ";
console.log(text33.trim());

let text34 = " JS ";
console.log(text34.trim());


let son1 = 36;
console.log(son1.toString());

let son2 = 500;
console.log(son2.toString());


let text35 = "salom";
console.log(text35.toUpperCase());

let text36 = "ali";
console.log(text36.toUpperCase());


let text37 = "SALOM";
console.log(text37.toLowerCase());

let text38 = "ALI";
console.log(text38.toLowerCase());


console.log("a".localeCompare("b"));

console.log("b".localeCompare("a"));


console.log(eval("9+1"));

console.log(eval("21/4"));