//Promise

//Promise is an Object that represents the eventual result (resolve, reject) of an asynchronous process

//Promise has 3 States
//1. Pending
//2. Fullfilled (resolved)
//3. Rejected

// let myPromise = new Promise((resolve, reject)=>{
//     let success = false

//     if(success)
//     {
//         resolve("Success")
//     }
//     else
//     {
//         reject("Failed")
//     }
// })

// myPromise
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error))


function login(username, password)
{
   return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(username === "Admin"  && password === "Admin@123")
            {
                resolve("Login Successful")
            }
            else
            {
                reject("Login Failed")
            }
        }, 3000)
   })
}

// login("Admin", "Admin@123454")
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error))

async function loginCheck() 
{
    try
    {
        const result = await login("Admin", "Admin@123") 
        console.log(result)  
    }
    catch(error)
    {
        console.log(error)
    } 
}

loginCheck()

// function loginAs(username, password)
// {
//     if(username === "Admin"  && password === "Admin@123")
//     {
//         console.log("Login Successful")
//     }
//     else
//     {
//         console.log("Login Failed")
//     }
// }

// loginAs("Admin", "Admin@123")

// function interviewProcess(canditateScore)
// {
//     return new Promise((resolve, reject)=>{
//         console.log("HR: Your Interview is completed")

//         console.log("We will update your status in 3 days")

//         setTimeout(()=>{
//             if(canditateScore>=80)
//             {
//                 resolve({
//                     status: "Selected",
//                     company: "TCS",
//                     role: "Software Test Engineer",
//                     salary: 100000
//                 })
//             }
//             else
//             {
//                 reject("Sorry!! Another candidate matched our requirements")
//             }
//         }, 5000)
//     })
// }

// // interviewProcess(75)
// //     .then((result)=>{
// //         console.log("Congratulations")
// //         console.log(result.status)
// //         console.log(result.company)
// //         console.log(result.role)
// //         console.log(result.salary)
// //     })
// //     .catch(error=>console.log(error))

// async function interviewResult() 
// {
//     try
//     {
//     const result = await interviewProcess(45)
//     console.log(result)
//     }
//     catch(error)
//     {   
//         console.log(error)
//     }
// }



// interviewResult()

