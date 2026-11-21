function loginAs()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("1. Login Successful")
            resolve()
        }, 2000)
    })
}

function searchTrain()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("2. Train Found")
            resolve()
        }, 2000)
    })
}

function selectSeat()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("3. Seat Selected")
            resolve()
        }, 2000)
    })
}

function pay()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("4. Payment Successful")
            resolve()
        }, 2000)
    })
}

function getTicket()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("5. Ticket Downloaded")
            resolve()
        }, 2000)
    })
}

// loginAs()
//     .then(()=>searchTrain())
//     .then(()=>selectSeat())
//     .then(()=>pay())
//     .then(()=>getTicket())
//     .catch(()=>console.log("Failed"))

async function bookTrainTicket()
{
      await loginAs()
      await searchTrain()
      await selectSeat()
      await pay()
      await getTicket()
      console.log("Ticket Booke Successfully")
}

bookTrainTicket()

//async ==> a function that contains an asynchronus process (promise) that always return a promise

//await ==> wait until that Promise is completed, then give us the result