// bankAccount.test.js

const BankAccount = require('./bankAccount');

describe('BankAccount', () => {
  let account;

  beforeEach(() => {
    account = new BankAccount();
  });

  describe('Deposit', () => {
    it('should increase balance when a valid deposit is made', () => {
      account.deposit(100);
      expect(account.getBalance()).toBe(100);
    });

    it('should return an error when depositing a negative amount', () => {
      expect(account.deposit(-50)).toBe('Invalid deposit amount');
    });
  });

  describe('Withdraw', () => {
    it('should decrease balance when a valid withdrawal is made', () => {
      account.deposit(200);
      account.withdraw(100);
      expect(account.getBalance()).toBe(100);
    });

    it('should return an error if trying to withdraw more than the balance', () => {
      expect(account.withdraw(500)).toBe('Insufficient funds');
    });
  });

  describe('Balance', () => {
    it('should return the correct balance after transactions', () => {
      account.deposit(300);
      account.withdraw(150);
      expect(account.getBalance()).toBe(150);
    });
  });
});
