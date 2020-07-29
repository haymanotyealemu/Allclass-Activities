function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance];
  this.setBalance = 
  this.getBalance = () => {
    return this.balance;
  },
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };
}
