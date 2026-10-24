//Conditional Statements

//1. Simple if
//2. if..else
//3. if..else..if
//4. Nested if
//5. Switch 

//Simple if

if(5==5)
{
    console.log("JavaScript")
}

console.log("Hello")

//if..else
if(5==="5")
{
    console.log("JavaScript")
}
else
{
    console.log("Java")
}

//if..else..if   (Multiple condition check)

let mark = 74

if(mark>=90 && mark<=100)
{
    console.log("Grade A")
}   
else if(mark>=75 && mark<=89)
{
    console.log("Grade B")
}
else if(mark>=65 && mark<=74)
{
    console.log("Grade C")
}
else if(mark>=55 && mark<=64)
{
    console.log("Grade D")
}
else if(mark>=35 && mark<=54)
{
    console.log("Grade E")
}
else
{
    console.log("Fail")
}

let amount = 5000

if(amount>=10000)
{
    console.log("30% Discount")
}
else if(amount>=5000)
{
    console.log("20% Discount")
}
else if(amount>=2000)
{
    console.log("10% Discount")
}
else
{
    console.log("No Discount")
}


//Nested if

let age = 25
let citizen = "Indian"
let hasVoterID = false


if(age>=18)
{
    if(citizen === "Indian")
    {
        if(hasVoterID)
        {
        console.log("Able to Vote")
        }
        else
        {
        console.log("Not able to vote")
        }
    }
    else
    {
        console.log("Indians only able to vote")
    }
}
else
{
    console.log("Not Eligible for Vote")
}


if(age>=18 && hasVoterID)
{
    console.log("Eligible")
}
else
{
    console.log("Not Eligible")
}

//Switch Case //check one value against multiple possible values

let day = 9

switch(day)
{
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid Number")
}

let color = "Orange"

switch(color)
{
    case "Red":
        console.log("STOP")
        break
    case "Green":
        console.log("GO")
        break
    case "Yellow":
        console.log("READY")
        break
    default:
        console.log("Wrong Signal")
}

let a = 10
let b = 2

let op = "+"

switch(op)
{
    case "+":
        console.log(a+b)
        break
    case "-":
        console.log(a-b)
        break
    case "*":
        console.log(a*b)
        break
    case "/":
        console.log(a/b)
        break
    default:
        console.log("Invalid Operator")
}


let x = 1

switch(x)
{
    case 1:
        console.log("A")
    case 2:
        console.log("B")
    case 3:
        console.log("C")
        break
    default:
        console.log("D")
}

switch("10")   //switch uses === for case match
{
    case 10:
        console.log("Number")
        break
    case "10":
        console.log("String")
        break
}

//Multiple cases for same values

let days = 7

switch(days)
{
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Week Days")
        break
    case 6:
    case 7:
        console.log("Week Ends")
        break
    default:
        console.log("Wrong Number")
}

let isLoggedIn = "true"

switch(isLoggedIn)
{
    default:
        console.log("No...")
        break
    case true:
        console.log("Welcome")
        break
    case false:
        console.log("Please login")
        break
}