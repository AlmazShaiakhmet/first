'use strict';
let money, time;

function start(){
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
    savings: false
};

function chooseExpenses(){
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
    
        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50 ) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    };
}
chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed(2);

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 410) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 410 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произощла ошибка");
}

function checkSavings(){
    if (appData.savings == true) {
        let save = +prompt("Введите сумму депозита"),
            percent = +prompt("Под какаой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
chooseExpenses();