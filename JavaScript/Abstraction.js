//Abstraction 

//Abstraction means hiding the internal implementation details and showing the necessary features to the user.

//Abstraction using function

function calculateSalary(basic, hra, bonus)
{
    let total = basic + hra + bonus
    return total
}


console.log(calculateSalary(10000, 3000, 5000))

class Car
{   
    start()
    {
        this.#enginStart()
        console.log("Car Started")

    }
    #enginStart()
    {
        console.log("Engine is Starting")
    }
}

let c = new Car()
c.start()

class ATM
{
    #checkBalance(amount)
    {
        let balance = 10000
        
        if(amount<=balance)
        {
            console.log("Sufficient Balance")
        } 
        else
        {
            console.log("Insufficient Balance") 
        }
    }

    withdraw(amount)
    {
        console.log("Withdraw Process Started")

        this.#checkBalance(amount)

        console.log("Please Collect your Cash")
    }
}

let atm = new ATM()
atm.withdraw(5000)
