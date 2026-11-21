//ES6 features (2015)
//ES ==> ECMA Script

//ES 1, 2, 3, 4, 5

//1. let, const

let ename = "Bala"

ename = "Mani"

{
    const x = 10
    console.log(x)
}

//console.log(x)


//console.log(y)
let y   //declartion

y = 10 //assign

const z = 100

//z= 200;

//2. Arrow Function 

//const greet = ()=>console.log("Welcome")

const add = (a, b) => console.log(a+b)

const squareRoot = n => n*n //Implicit return


console.log(squareRoot(5))

const studentsDetails = (sname, sid)=> {
    console.log(sname)
    console.log(sid)
} 

setTimeout(()=>{

})

studentsDetails("Bala", 101)

//3. Template Literal

let fname = "Mani"
let id = 101
let age = 25

console.log("Employee Name: " + fname + " - Employee Id: " + id + " - age: " + age)

console.log(`Employee Name: ${fname} - Employee Id: ${id} - age ${age}`)

console.log(`My name is ${fname} and my age is ${age} and my id is ${id}`)

//for variable access ${}

//4. Default Parameter

function greet(name="Someone")
{
    console.log(`Hello ${name}`)
}

greet("Bala")

greet("Mani")

greet()

//5. Destructing

let colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple"]

let [c1, c2] = colors

console.log(c1)
console.log(c2)

let user = {
    uname: "Mani",
    uid: 1001,
    uaddress: "Chennai",
    uphone: 89989989,
    uemail: "mani@gmail.com"
}

let { uname, uemail, ...remaining} = user

console.log(uname)
console.log(uemail)
console.log(remaining)

//6. Spread Operator

let arr1 = [1, 2, 3]
let arr2 = [...arr1, 4, 5, 6]

console.log(arr2)

let empDetails1 = {
    name: "Bala"
} 

let empDetails2 = {
    ...empDetails1,
    id: 101
} 

console.log(empDetails2)

//7. Rest operator

//8. classes

//9. Modules

//10. Promise

//11. for...of , for...in

//12. Symbol

//13. Set, Map

