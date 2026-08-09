// =====================================================
// 3. Transactionlardan balans hisoblash
// =====================================================

function calculateBalance(transactions) {
    return transactions.reduce((balance, transaction) => {

        if (transaction.type === "income") {
            return balance + transaction.amount;
        }

        return balance - transaction.amount;

    }, 0);
}

const transactions = [
    { type: "income", amount: 1000 },
    { type: "expense", amount: 200 },
    { type: "income", amount: 500 },
    { type: "expense", amount: 100 }
];

console.log(calculateBalance(transactions));


// =====================================================
// 4. Active userlarni ID bo‘yicha objectga o‘tkazish
// =====================================================

function getActiveUsers(users) {
    return users.reduce((result, user) => {

        if (user.active === true) {
            result[user.id] = user;
        }

        return result;

    }, {});
}

const apiUsers = [
    { id: 1, name: "Ali", active: true },
    { id: 2, name: "Vali", active: false },
    { id: 3, name: "Sami", active: true }
];

console.log(getActiveUsers(apiUsers));


// =====================================================
// 5. Department bo‘yicha jami maosh
// =====================================================

function salaryByDepartment(employees) {
    return employees.reduce((result, employee) => {

        if (!result[employee.department]) {
            result[employee.department] = 0;
        }

        result[employee.department] += employee.salary;

        return result;

    }, {});
}

const employees = [
    { name: "Ali", department: "IT", salary: 3000 },
    { name: "Vali", department: "HR", salary: 2000 },
    { name: "Sami", department: "IT", salary: 2500 },
    { name: "Olim", department: "Finance", salary: 4000 }
];

console.log(salaryByDepartment(employees));