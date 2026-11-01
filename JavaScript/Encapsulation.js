//Encapsulation means wrapping data (varaibles) and methods (function) together inside a single unit (class) and restricting direct access data

//Protect the data
//Control Accessed
//Allow modification through methods

class BankAccount
{
    #balance = 10000   //Private variable/dat
    deposit(amount)
    {
        if(amount>0)
        {
            this.#balance += amount
            console.log("Amount Deposited: ", amount)
        }
    }

    withdraw()
    {
        if(amount<=this.#balance)
        {
            this.#balance -= amount //balance = balance - amount
            console.log("Amount withdrawn: ", amount)
        }
        else
        {
            console.log("Insufficient Balance")
        }
    }

    checkBalance()
    {
        console.log("Available Balance: ", this.#balance)
    }
}

let ba = new BankAccount()
ba.deposit(5000)
ba.checkBalance()

//Abstraction
//Hide the implementation details
//ATM Withdraw Process

//Encapsulation
//Protect Data
//Protecting Bank Balance


let a = 10

let b = 20

a += b   // a = a + b  a = 10 + 20


//OOPS

//Inheritance - Reusing Code
//Polymorphism - Different behaviours using the same method
//Abstraction - Hide the implementation details
//Eccapsulation - Proecting Data

