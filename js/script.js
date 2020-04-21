'use strict';
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == null || money == "") {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
    
        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);

    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if(appData.moneyPerDay < 410) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 410 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произощла ошибка");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Введите сумму депозита"),
            percent = +prompt("Под какаой процент?");

        appData.monthIncome = (save/100/12*percent).toFixed(2);
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

// function chooseOptExpenses() {
//     for (let i = 0; i < 3, i++) {
//         let c = prompt("Статья необязательных расходов");
//             if ( (typeof(c))=== 'string' && (typeof(c)) != null && c != '' && c.length < 50 ) {
//             console.log("done");
//         appData.optionalExpenses[i] = c;
//         } else {
//             i = i - 1;
//         }
//     }
// }
// chooseOptExpenses();