//Polymorphism = Poly + Morph

//Poly --> Many
//Morph --> Form

//Polymorphism two types
//1. Method Overloading (not in javascrip) (Compile Time Polymorphism)
//2. Method Overriding (Run Time Polymorphism)

class Animal
{
    sound()
    {
        console.log("Animal makes sound")
    }
}

class Dog extends Animal
{
    sound()
    {
        console.log("Barking")
    }
}

class Cat extends Animal
{
    sound()
    {
        console.log("Meow")
    }
}

class Lion extends Animal
{
    sound()
    {
        console.log("Roaring")
    }
}

let d = new Dog()
d.sound()

let c = new Cat()
c.sound()

let l = new Lion()
l.sound()

class BankAccounts  //Parent class
{
    calculateInterest(balance)
    {
        return 0
    }
}

class SavingsAccounts extends BankAccounts
{
    calculateInterest(balance)
    {
        return balance * 0.05
    }
}

class FixedDeposit extends BankAccounts
{
    calculateInterest(balance)
    {
        return balance * 0.07
    }
}

let sa = new SavingsAccounts()
console.log(sa.calculateInterest(10000))

let fd = new FixedDeposit()
console.log(fd.calculateInterest(10000))

//Common behavior can be defined in a parent class
//Easy Maintenance

// class Addtion   //(Method overloading)
// {
//     add(a, b)
//     {
//         console.log(a+b)
//     }
//     add(a, b, c)
//     {
//         console.log(a+b+c)
//     }
//     add(a, b, c, d)
//     {
//         console.log(a+b+c+d)
//     }
// }

// let a1 = new Addtion()
// a1.add(3, 4)
