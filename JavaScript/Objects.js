let name = "Bala"
let age = 24
let height = 5.8
let weight = 55

//console.log(name)

let student = {
    name: "Bala",
    age: 24,
    id: 101,
    height: 5.8,
    weight: 55,
    "student city": "Trichy"
}

//Object is a collection of data stored in key-value pairs.

//Access the Object values

//1. Dot notation

console.log(student.name)
console.log(student.age)
console.log(student["student city"])

//2. Bracket notation

//Property contains spaces
//Dynamic propery access
//When property name is stored in a variable

console.log(student["id"])
console.log(student["height"])

let key = "name"

console.log(student[key])

let login = {
    username: "Admin",
    password: "admin123"
}

const field = "password"

console.log(login[field])

//Modify the property values of the object

student.name = "Mani"
student.id = 102

console.log(student)

//Add Properties to the Object

student.state = "Tamilnadu"
student.averageScore = 7.5

console.log(student)

//CRUD

//Delete Properties from the object

delete student.weight
delete student.height

console.log(student)

let employee = {
    name: "Ram",
    id: 101,
    age: 33,
    address:                      //Nested Object
    {
        city: "Trichy",
        state: "Tamilnadu"
    },
    greet: function()             //Functions
    {
        console.log("Hello")
    },
    getMessage: function(name)
    {
        return name 
    },
    skills:["Java", "JS", "Python", "C#"]  //Arrays 
}
console.log(employee.name) //Ram
console.log(employee.address)
console.log(employee.address.city)

employee.greet()
console.log(employee.getMessage("Muthu"))
console.log(employee.skills)
console.log(employee.skills[2])

//Array Objects
let teacher = [
    {name: "Meena", subject: "Maths"},
    {name: "Sheela", subject: "English"},
    {name: "Uma", subject: "Science"}
] 

let fruits = ["Mango", "Banana", "Orange"]

console.log(teacher[0])
console.log(teacher[0].name)
console.log(teacher[2].name)
console.log(teacher[2])

//for...in loop
for(let key in employee)
{
    console.log(key)       //Key Iteration
}

for(let key in employee)
{
    console.log(employee[key])
}

//Object.key()

let car = {
    brand: "TATA",
    color: "Red",
    speed: 120,
    price: 800000
}

let {brand, color} = car

console.log(brand)
console.log(color)

let carKeys = Object.keys(car)   //string[]
console.log(carKeys)

//Object.values()

console.log(Object.values(car))

let carValues = Object.values(car)   //string[] | number[]
console.log(carValues)

//Object.entries()

let carEntries = Object.entries(car)        //[string][]
console.log(carEntries)
console.log(carEntries[1])

//Object.freeze()

//Object.freeze(car)

Object.seal(car)

car.brand = "BMW"
car.price = 500000       //Modify

car.hasInsurance = true   //Property add
delete car.speed

console.log(car)

const player = {
    playernumber: 10,
    playername: "Sachin",
    playerage: 55
}

console.log(player.playername)

//Destructing Object

//Extracting the properites from an object and store them directly into the variables

// const {playernumber, playername, playerage} = player

// console.log(playername)
// console.log(playernumber)
// console.log(playerage)

//Spread Operator

const updatedPlayer = {
    ...player,        
    city: 'Mumbai',
    team: 'MI'
}

console.log(updatedPlayer)

//Rest operator

const {playernumber, playername, playerage, ...remaining} = updatedPlayer

console.log(playername)
console.log(playernumber)
console.log(playerage)
console.log(remaining)

//Object.assign()

let obj1 = 
{
    a: 1, 
    b: 2
}

let obj2 = 
{
    c: 3, 
    d: 4
}

// let obj3 = Object.assign(obj1, obj2, {e: 5})
// console.log(obj3)

let obj3 = {
    ...obj1,
    ...obj2,
    e: 5
}

console.log(obj3)

let team1 = {
    teamName: "MI",
    members: 11
}

let team2 = team1   //shallow copy

console.log(team2)

team1.teamName = "RCB"

console.log(team2)