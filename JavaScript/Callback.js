//Callback

//Callback is a function passed as an arguments to the another function which executed later 

function greet(callback)         //callback = sayHi
{
    console.log("Hello")
    callback()
}

function sayHi()
{
    console.log("Hi")
}

//greet(sayHi)


function orderFood(callback)   //callback = foodDelivered
{
    console.log("Preparing Food")  
    setTimeout(()=>{
        console.log("Food is Ready")
        callback()
    }, 3000)
}

function foodDelivered()
{
    console.log("Food has been delivered")
}

//orderFood(foodDelivered)


//=========================================================

function processPayment(amount, callback)  //callback = paymentResult
{
    console.log(`Processing Payment amount of Rs.${amount}`)

    setTimeout(()=>{
        const paymentSuccess = false

        if(paymentSuccess)
        {
            callback("Success", amount)
        }
        else
        {
            callback("Failed", amount)
        }
    }, 3000)
}

function paymentResult(status, amount)
{
    if(status === "Success")
    {
        console.log(`Payment of Rs.${amount} completed Successfully`)
    }
    else
    {
        console.log(`Payment of Rs.${amount} failed`)
    }
}


//processPayment(5000, paymentResult)

//=================================================================================

function login(callback)
{
    console.log("1. Login Successful")

    setTimeout(()=>{
        callback()
    }, 2000)
}

function getProfile(callback)
{
    console.log("2. Profile Loaded")

    setTimeout(()=>{
        callback()
    }, 2000)
}

function getOrder(callback)
{
    console.log("3. Order Received")

    setTimeout(()=>{
        callback()
    }, 2000)
}

function makePayment(callback)
{
    console.log("4. Payment Successful")

    setTimeout(()=>{
        callback()
    }, 2000)
}

//Callback Hell Problem

login(()=>{
    getProfile(()=>{
        getOrder(()=>{
            makePayment(()=>{
                console.log("5. Process Completed")
            })
        })
    })
})

login(()=>{
    getProfile(()=>{
        getOrder(()=>{
            makePayment(()=>{
                console.log("5. Process Completed")
            })
        })
    })
})