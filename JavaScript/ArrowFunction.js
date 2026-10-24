//Normal Function

// function greet()           
// {
//     console.log("Hello")
// }

// greet()

//Arrow Function ==> short way of function

let greet = ()=>console.log("Hello")  //anonymous function

greet()


//add(5, 6)   //hoising (reference error)

let add = (a, b)=>console.log(a+b)

add(5, 6)

let greets = name=>console.log("Hello " + name)

greets("Bala")

let sum = (a, b)=>{
    return a+b
}

console.log(sum(5, 6))

// let squareRoot = a => console.log(a*a)  //void function

// let b = squareRoot(5)
// console.log(b)

// squareRoot(5)

// let squareRoot = a => {         //Explicit Return Function
//     return a*a  //void function
// }
// console.log(squareRoot(5))

let squareRoot = a => a * a   //implicit Return

console.log(squareRoot(5))

let b = squareRoot(5)
console.log(b)

let salaryCalculation = (basic, hra, allownce)=>
{   
    let salary = basic + hra + allownce
    console.log("Salary Credited")
    return salary
}

console.log(salaryCalculation(5000, 2000, 3000))


//short way 

//can't use arrow function before initialization

//callback

setTimeout(function check(){
    console.log("Hello")
}, 3000)

setTimeout(()=>console.log("Hello"), 5000)



