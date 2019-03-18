"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'Nils',
    bankAccount: bankAccount,
    hobbies: ['PS4', 'Games']
};
myself.bankAccount.deposit(3000);
console.log(myself);
