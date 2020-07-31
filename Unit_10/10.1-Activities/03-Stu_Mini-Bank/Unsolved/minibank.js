function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance];
  this.setBalance = value => this.balance = value; 
  this.getBalance = () => {
    return this.balance;
  },
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };
  this.updateStatement = value => this.statement.push(value);
  this.getStatement = () => {return this.statement.slice(0);},
  this.printStatement = () => {
    const statement = this.getStatement();
    for (let i = 0; i < statement.length; i++) {
      console.log(`${i + 1}. ${statement[i]}`);}

  },
  this.deposit = value => {
    updateStatement(number);
    setBalance(balance);
  },
  this.withdraw = () => {
    updateStatement(number < 0);
    setBalance(balance);
  }

}
// Part 2
const bank = new MiniBank(100);
console.log(bank);


// incompleted