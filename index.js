//callback with callback hell example

// function fetchData(callback) {
//     console.log("Fetching data...");
//     setTimeout(() => {
//         callback("Data fetched  1");
//     }, 1000)
//     setTimeout(() => {
//         callback("Data fetched 2");
//     }, 1000)
//     }

//     fetchData((result) =>{
//         console.log(result);
//     })


//callback lai solve garne tarika: Promises

function fetchData() {
    console.log("Fetching data...");
    return new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Data fetched  1");
    }, 1000)
    setTimeout(() => {
        resolve("Data fetched 2");
    }, 1000)
})
    }
    fetchData()
    .then((result) =>{
        console.log(result);
    }) 
    .catch((error) =>{
        console.log(error);
    }) 
    .finally(() => {
        console.log("Fetch attempt finished.");
    })