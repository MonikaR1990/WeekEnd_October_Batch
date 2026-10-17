//Looping

// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")


// {
// console.log("Hello")
// }

//Looping --> it is used to execute the block of code repeatedly until a specified condition is become false

//for
//while
//do..while

for(let i = 1; i<=5; i++)   //print number 1 to 5
{
    console.log(i)
}

for(let i = 1; i<=5; i++)   //print number 1 to 5
{
    console.log("Hello")
}

// for(initialization; condition; increment)
// {
// }

for(let i = 2; i<=20; i+=2)
{
    console.log(i)
}

for(let i = 1; i<=20; i+=2)
{
    console.log(i)
}

let sum = 0

for(let i = 1; i<=100; i++)
{
    sum += i // sum = sum + i
    
}

console.log(sum)

let str = "Welcome"  //str length = total number of character = 7
let rev = "" //empty 

for(let i = str.length-1; i>=0; i--)
{
    rev += str[i]
}

console.log(rev)

/*
    i = 6   6>=0   rev = rev + str[6]  rev = "" +  e  ==> e
    i = 5   5>=0   rev = e + str[5]    rev = e + m ==> em
    i = 4   4>=0   rev = em + str[4]   rev = em + o  ==> emo
    i = 3   3>=0   rev = emo + str[3]  rev = emo + c ==> emoc
    i = 2   2>=0   rev = emoc + str[2]  rev = emoc + l ==> emocl
    i = 1   1>=0   rev = emocl + str[1]  rev = emocl + e ==> emocle
    i = 0   0>=0   rev = emocle + str[0]  rev = emocle + W ==> emocleW
    i = -1  -1>=0

*/


let floor = 1

floor++ //2
floor++ //3

floor-- //2

