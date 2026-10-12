//Data Types

//Primitive Data Types
//Non-Primitive Data Types

//Primitive Data Types (7) ==> Stores a single value | compare by value

//string
//number
//boolean
//undefined (value not assigned)
//null (it represents an intentional absense of a value)
//bigInt
//symbol (it is a description for a variable) unique key 


let name = "Bala"
let age = 45
let isActive = true

let x

console.log(x)

let y = null

console.log(y)

let bigNumber = 12345678901234567890n

console.log(bigNumber)



let s1 = Symbol("id") 
let s2 = Symbol("id")

s1 = 10
s2 = 10

console.log(s1)
console.log(s2)

console.log(s1===s2)

//Compared by value

let a = 10
let b = 10

console.log(a===b)  //true


//Non-Primitive Data Types (collection of data or complex data)

//Object
//Array
//Function

//compared by reference (address)

let p = { name: "Meena" }

let q = { name: "Meena" }

console.log(p===q)