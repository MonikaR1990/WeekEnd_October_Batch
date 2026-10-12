//Operators

//1. Arithmetic Operator (+, -, *, /, %, **)
//2. Assignment Operator (=, +=, -=, *=, /=)
//3. Comparision Operator (==, ===, !=, !==, <, >, <=, >=)
//4. Logical Operator (&&, ||, !)
//5. Unary Operator (+, -, ++, --)
//6. Ternary Operator (? :)
//7. String Operator (+ ,)
//8. typeOf Operator 

//Arithmetic Arithmetic

let a = 10
let b = 20

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%2)

//Assignment Operator

let c = 10

c += 5  // c = c + 5  c = 10 + 5   // c = 15

c -= 5  // c = 15 - 5 // c = 10

c *= 5 // c = 10 * 2  // c = 20

// c /= 2  // c = 20/2 //c = 10   

c = c / 2

console.log(c)

//Comparision Operator (it gives boolean result)

console.log(5==5)

console.log(5=="5") //doen't consider the data type of values only check the values

console.log(5==="5") //it check both values and data type of the value

//"===" (Strict Equal)

console.log(5!="5")

console.log(5!=="5")

console.log(5!=="5") 

// console.log(5>4)

// console.log(5<4)

console.log(5<=5)

console.log(5>=5)

// let name1 = "Bala"
// let name2 = "bala"

//Logical operator

console.log((5=="5") && (5==="5") && (5<=5))

console.log((5==6) || (5==="5") || (5<5))

let isActive = true

console.log(!isActive)

let x = NaN 

console.log(!x)

//falsy value
//0
//""
//null
//undefined
//NaN

//Unary Operator (+, -, ++, --)

//let y = -10 //(sign value of the number)

let y = 10

//++ increment operator
//-- decrement operator

console.log(y++)  //post increment  //10

console.log(y)  //11

console.log(y--)  //11 //post Decrement

console.log(y) //10

console.log(++y) //11  //pre increment

console.log(y)

console.log(--y) //pre increment

console.log(y)


//Ternary Operator (? :)

let age = 25

let hasVoterID = false

const voteStatus = ((age>=18) && (hasVoterID)) ? "Eligible for Vote" : "Not Eligible for Vote"
console.log(voteStatus)


let n1 = 10
let n2 = 20

console.log((n1>n2) ? n1+n2 : n1-n2)

let color = "Red"

const signal = (color === "Red") ? "STOP" : "GO"
console.log(signal)

//String Operator  (concatenation)

let p = 10

let q = "10"

console.log(p+q)

console.log("Hello" + " " + "Good Morning")

console.log("Hello" , "Good Morning")

//typeOf Operator

let z

console.log(typeof(p+q))
console.log(typeof(hasVoterID))
console.log(typeof(color))

console.log(typeof(z))