export function greet()
{
    console.log("Welcome")
}

export function add(a, b)
{
    console.log(a+b)
}

export function sub(a, b)
{
    console.log(a-b) 
}

//greet()

export const message = "Hello JavaScript"

export let fruits = ["Mango", "Orange", "Apple"]

export let user = {
    uname: "Balu",
    uid: 1001
}

export class Students
{
    constructor(sname, sid)
    {
        this.sname = sname
        this.sid = sid
    }
    display()
    {
        console.log(this.sname)
        console.log(this.sid)
    }
}



export default class Animal
{
    eat()
    {
        console.log("Eating")
    }
    sleep()
    {
        console.log("Sleeping")
    }
}

// default let pi =  3.14 (no default variable in JS)

//console.log(message)


export class Login
{
    login()
    {
        console.log("User")
        console.log("Enter USername")
        console.log("Enter Password")
    }
}