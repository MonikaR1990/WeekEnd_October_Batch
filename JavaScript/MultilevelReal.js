class Person
{
    constructor(name)   //local variable
    {
        this.name = name
    }   
    display()
    {
        console.log(this.name)
    }
}

class Employee extends Person
{
    constructor(name, empId)
    {
        super(name)
        this.empId = empId
    }
    displayEmployeeDetails()
    {
        super.display()
        console.log(this.empId)
    }
}


class Manager extends Employee
{
    constructor(name, empId, dept)
    {
        super(name, empId)
        this.dept = dept
    }
    displayMangerDetails()
    {
        super.displayEmployeeDetails()
        console.log(this.dept)
    }
}

let m1 = new Manager("Bala", 101, "Accounts")
m1.displayMangerDetails()



//this --> It referes the current object or instance
//super --> child classes to access the parent class constructor and methhods

//for constructor access ==> super(parent class constructor value) ==> super()
//for method access ==> super.parentclassmethodname()

