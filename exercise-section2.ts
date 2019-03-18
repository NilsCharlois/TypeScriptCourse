
// use type to create an object structure
type BankAccount = {money: number, deposit:(val: number) => void};

let bankAccount:BankAccount = {
  money: 2000,
  deposit(value: number) {
    this.money += value;
  }
};

let myself: {name: string, bankAccount: BankAccount, hobbies: string[]} = {
  name:'Nils',
  bankAccount = BankAccount,
  hobbies = ['PS4', 'Games']
};

myself.bankAccount.deposit(3000);

console.log(myself);
