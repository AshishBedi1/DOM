// const foodOrder = new Promise((resolve, reject) => {
//   const foodReady = true;

//   if (foodReady) {
//     resolve("🍕 Food Delivered!");
//   } else {
//     reject("❌ Order Cancelled!");
//   }
// });

// foodOrder
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });



console.log("Script is running 1...");
console.log("Script is running 2...");
console.log("Script is running3 ...");    //synchronous code


setTimeout(() => {
    console.log("script is running 4...");  // asynchronous code
}, 5000)

console.log("Script is running 5...");


//promises

let promise = new Promise((resolve, reject) => {
        const success = false;
        if(success){
            resolve("Promise resolved successfully!");
        }
        else{
            reject("Promise rejected!");
        }
})

promise.then((msg) => {
    console.log(msg);
})
.catch((err) => {
    console.log(err);
})
