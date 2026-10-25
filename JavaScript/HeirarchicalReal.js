class BankAccount
{
    constructor(accountHolder, balance)
    {
        this.accountHolder = accountHolder  //Bala
        this.balance =  balance //10000
    }
    deposit(amount)
    {
        this.balance += amount  //balance = balance + amount
        console.log("Deposited amount: Rs." + amount)
    }
    withdraw(amount)
    {
        this.balance -= amount  //balance = balance - amount
        console.log("WithDrawn amount: Rs." + amount)
    }
    checkBalance()
    {
        console.log("Balance: Rs." + this.balance)
    }
}

class SavingsAccount extends BankAccount
{
    addInterest()
    {
        this.balance += this.balance * 0.05
        console.log("5% interest added and your balance " + this.balance)
    }
}

class CurrentAccount extends BankAccount
{
    overDraft()
    {
        console.log("Over Draft Facility is available")
    }
}

let sa = new SavingsAccount("Bala", 10000)
sa.deposit(5000)
sa.checkBalance()
sa.withdraw(2000)
sa.checkBalance()
sa.addInterest()