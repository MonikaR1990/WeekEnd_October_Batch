//Array ==> Array is a data structure which is used to store multiple data/values  in single variable

//Array is based on Index and Index starts from "Zero"

let names = ["Bala", "Meena", "Ram", "Mani"] //Literal Way

//let numbers = [1, 2, 3, 4, 5] 

console.log(names)

let numbers = new Array(1, 2, 3, 4, 5)   //Constructor Way

console.log(numbers)

let a = [] //Empty Array

console.log(names)

console.log(names[1])  //Mani
console.log(names[2])  //Ram

//CRUD ==> Create, Read, Update, Delete

let fruits = ["Apple", "Mango", "Banana"]

console.log(fruits)
console.log(fruits[0])           //Read

fruits[2] = "Orange"            //Update
fruits[1] = "Guva"
console.log(fruits)

//Add Values to Array

fruits.push("Banana")         //Add the element at the end of an array

console.log(fruits)

fruits.unshift("Cherry")      //Add the element at the first of the array

console.log(fruits)

//Remove an Array 

fruits.pop()             //Removes the last element

console.log(fruits)

fruits.shift()           //Removes the First element

console.log(fruits)

fruits.pop()

console.log(fruits)

fruits.push(100)

console.log(fruits)

//Array length

console.log(fruits.length)
console.log(numbers.length)
console.log(names.length)

let data = ["ABC", 123, true, null, "XYZ", 987, false] //tuple

//Iteation

for(let i = 0; i<data.length; i++)
{
    console.log(data[i])
}


//data[0] = "ABC"
//data[1] = 123
//.....

//data[6] = false
//data[7] 

//for...of Loop

for(let d of data)
{
    console.log(d)
}

for(let n of numbers)
{
    console.log(n)
}

for(let f of fruits)
{
    console.log(f)
}

//splice() & slice()
//splice() ==> this method which is used to add, remove, modify the emelements of an  array

let animals = ["Dog", "Cat", "Lion", "Tiger", "Cow", "Deer"]

console.log(animals)

animals.splice(1, 2)    //Remove

//1 - Start Index
//2 - How many elements need to remove

console.log(animals)

animals.splice(0, 0, "Horse")   //Add 

console.log(animals)

animals.splice(0, 2, "Monkey", "Donkey")

console.log(animals)          //Update

animals.splice(2)            //Remove the values from that Index

console.log(animals)

//slice() ==> this method used to extract the portion an array and return a new array

// no changes happen in the original array

let superHeros = ["Super Man", "Spider Man", "Iron Man", "Batman", "Thor", "Captain America"]


let newHeros = superHeros.slice(3, 5)

//1 ==> Start Index (Include)
//3 ==> End Index (Exclude)

console.log(superHeros)

console.log(newHeros)

//console.log(superHeros)

//let heros = superHeros.slice(2)
let heros = superHeros.slice(-2)

console.log(heros)

//splice()
//Modify the original array by add, remove, update elements from an array. Original array getting changed

//slice()
//It main use extract the portion of an array and it didn't change the original array

let course = ["Java", "JS", "C", "C++", "Java" ,"Python", "Java"]

let [cs1, cs2, cs3] = course


console.log(course.join("*")) //Adds all the elements of an array into a string

console.log(course.includes("C++"))

console.log(course.indexOf("Java"))

console.log(course.lastIndexOf("Java"))

//find()

let num1 = [1, 2, 3, 4, 5]

let num2 = num1.find(n=>n>1)

console.log(num2) //Returns the first matching elements

//fliter()

let num3 = num1.filter(n=>n>2)
console.log(num3)     //Returns all the matching elements

//map()

let num4 = num1.map(n=>n*10)
console.log(num4) //Transforms each elements of an Array

let priceList = [100, 200, 300, 400, 500]

let [p1, p2, p3] = priceList

console.log(p1) //100
console.log(p2) //200

let updatePriceList = priceList.map(x=>x+10)

console.log(updatePriceList)

//concat()

let n1 = [1, 2, 3]
let n2 = [4, 5, 6]

let n3 = n1.concat(n2)
console.log(n3)

//Array Destructing

//Extracting values from an array and assigning them into variables

let colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple"]

console.log(colors[0])

let [c1, c2, c3] = colors

console.log(c1)
console.log(c2)
console.log(c3)

//Spread Operator ...
//It is used to expand/copy/spread the values of an array

let arr1 = [1, 2, 3]

let arr2 = [...arr1, 4, 5]

console.log(arr2)

let arr3 = [0, ...arr2, 6, 7, 8]

console.log(arr3)

//Rest Operator

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let [m1, m2, m3, ...m4] = myArray 

console.log(m4)

//It collects the remining values and store them into a variable (array)
