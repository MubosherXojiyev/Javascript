const transactions = [
  { id: 1, type: "kirim", amount: 500000 },
  { id: 2, type: "chiqim", amount: 120000 },
  { id: 3, type: "kirim", amount: 900000 },
];
transactions.forEach((value) => {
  console.log(
    `#${value.id} | ${value.type.toUpperCase()} | ${value.amount} so'm,`
  );
});



const students = [
  { name: "Ali", ball: 78 },
  { name: "Vali", ball: 42 },
  { name: "Sami", ball: 91 }
];
let a = 0

students.forEach(value => {
  const status = value.ball > 60 ? "O'tdi" : "Yiqildi";

  console.log(`${value.name} - ${status}`);
});



const products = [
  { name: "Shakar", count: 12 },
  { name: "Yog'", count: 3 },
  { name: "Un", count: 25 }
];

products.forEach(value => {
  if (value.count < 5) {
    console.log(`${value.name} - ${value.count} ta (Kam qoldi)`);
  } else {
    console.log(`${value.name} - ${value.count} ta`);
  }
});





const users = [
  { name: "Ali", age: 20 },
  { name: "Vali", age: 25 }
];

const sum88 = users.map(value => {
  return `${value.name} (${value.age} yosh)`;
});

console.log(sum88);




const prices = [100000, 250000, 80000];

const sum09 = prices.map(value => {
  return value * 12;
});

console.log(sum09);


const activeUsers = [
  { name: "Ali", active: true },
  { name: "Vali", active: false },
  { name: "Sami", active: true }
];

const sum01 = activeUsers.filter(value => {
  return value.active === true;
});

console.log(sum01);




const students0 = [
  { name: "Ali", ball: 56 },
  { name: "Vali", ball: 88 },
  { name: "Sami", ball: 71 },
  { name: "Olim", ball: 44 }
];

const sum = students0.filter(value => {
  return value.ball >= 60;
});

console.log(sum);



const products0 = [
  { name: "Telefon", price: 3500000 },
  { name: "Quloqchin", price: 250000 },
  { name: "Noutbuk", price: 7800000 }
];

const sum0 = products0.filter(value => {
  return value.price > 100000;
});

console.log(sum0);