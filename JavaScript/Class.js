//Class ==> Class is a blue print

//Class ==> A class consists of properties (variables) and methods (function)

class ClassName   //Pascal Notation ==> Class Interface, Enum
{
}

function functionName()   //Camel Notation => variables,  function/methods, objects
{ 
}

class Hotel
{
    //Properities (varibles)
    tea = 15
    coffee = 20
    menu = "Pongal"
    constructor() //default constructor
    {

    }

    //Method
    display() 
    {
        console.log(this.tea)
        console.log(this.coffee)
        console.log(this.menu)
    }
}

let server = new Hotel()
server.display()
server.tea = 20
server.coffee = 25
server.display()

let waiter = new Hotel()
waiter.display()


//constructor and classname are

//Hotel ==> classname
//Hotel() ==> constructor

// let objectName = new ClassName()

//variable is a container stores a value

//object stores multiple related values as properities

//this is a keyword which is used to refers the current object

class Student
{
    //Properties
    constructor(name, age)    //local variable   //Parameterized Constructor
    {
        this.name = name
        this.age = age
    }
    //Methods
    displayDetails()
    {
        console.log(this.name)
        console.log(this.age)
    }
}

let s1 = new Student("Bala", 22)
s1.displayDetails()


//Constructor is a special method/function which is used initialize the object
//when you create the object the constructor is automatically called


class Employee
{
    constructor(id, name, department)
    {
        this.id = id
        this.name = name
        this.department = department
    }
    showEmployeeDetails()
    {
        console.log("Employee ID: " + this.id)
        console.log("Employee Name: " + this.name)
        console.log("Employee Department: " + this.department)
    }
}

let emp1 = new Employee(101, "Arun", "Development")
emp1.showEmployeeDetails()

let emp2 = new Employee(102, "Bala", "Testing")
emp2.showEmployeeDetails()

//class
//object
//this
//constructor

