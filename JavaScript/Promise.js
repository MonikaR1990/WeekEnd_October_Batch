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


// function login(username, password)
// {
//    return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(username === "Admin"  && password === "Admin@123")
//             {
//                 resolve("Login Successful")
//             }
//             else
//             {
//                 reject("Login Failed")
//             }
//         }, 3000)
//    })
// }

// login("Admin", "Admin@123454")
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error))

function loginAs(username, password)
{
    if(username === "Admin"  && password === "Admin@123")
    {
        console.log("Login Successful")
    }
    else
    {
        console.log("Login Failed")
    }
}

loginAs("Admin", "Admin@123")