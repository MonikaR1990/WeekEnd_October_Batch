//Function 

//function is a block of code it performs a specific task or process

//once we write the function we can reuse it any where

greet()

// console.log(a)

// let a = 10

function greet()                  //Function definition //Function without parameter
{
    console.log("Hello EveryOne")
}

greet()                          //Funtion call

greet()

greet()


function add(a, b)             //Function with parameter
{
    console.log(a+b)
}

add(5, 10)  //function call

function greetings(name)  //single parameter
{
    console.log("Hello " + name)
}

greetings("Bala")

// function sum(a, b)
// {
//     console.log(a+b)
// }

// let d = sum(6, 5)
// console.log(d)


//void function just performs the action, it doesn't give any value return back

function sum(a, b)
{
    return a+b
}

console.log(sum(5, 6) + 4)

const c = sum(5, 7)
console.log(c)

//return function it return back the value to us



function salaryCalculation(basic, hra, allownce)
{   
    let salary = basic + hra + allownce
    return salary
    //console.log("Salary Credited")
}

let bonus = 5000  //number return

console.log(salaryCalculation(15000, 3000, 2000) + bonus) 


function greetings(message)
{
    return message
}

console.log(greetings("Good Morning"))  //string value return back


function isPresent()
{
    return true
}

console.log(isPresent())   //boolean value return back


//Function Scope

function display()
{
    var name = "Banu"   //Block level scope 
    console.log(name)
}

display()
console.log(name)  //Error

//var        ==> function scope
//let, const ==> block scope

function testScope()
{
    if(true)
    {
        var a = 10
        let b = 20
        const c = 30
    }
    console.log(a) // 10     
    console.log(b) //Error
    console.log(c) //Error
}

console.log(a)  //Error 