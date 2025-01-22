// bankAccount.js
class BankAccount {
    constructor() {
      this.balance = 0;
    }
  
    deposit(amount) {
      if (amount <= 0) {
        return 'Invalid deposit amount';
      }
      this.balance += amount;
      return this.balance;
    }
  
    withdraw(amount) {
      if (amount <= 0) {
        return 'Invalid withdrawal amount';
      }
      if (amount > this.balance) {
        return 'Insufficient funds';
      }
      this.balance -= amount;
      return this.balance;
    }
  
    getBalance() {
      return this.balance;
    }
  }
  
  module.exports = BankAccount;
  