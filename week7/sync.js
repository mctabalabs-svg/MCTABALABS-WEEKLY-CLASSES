//Synchronous (blocking)
//do this ->then this -> then this

//Asynchronous(non blockig)
//start this -> continue working -> come back later

//call backs, promises,async/wait,events loop

// function orderFood(){
//     confirm.console.log(("ordering food"));
//     setTimeout(function(){
//         console.log("food is ready!");
//     }, 4000);
    
// }

// orderFood();
// console.log("watching a movie while waiting");

//callback function - a function passed into another function to run later



//promises
//promises represents; pending, resolved(success), rejected(error)
//.then - what to do on success . catch- what to do on error

// function orderPizza(){
//     return new Promise(function(resolve,reject){
//         console.log("ordering pizza");

//         setTimeout(function(){
//             resolve("pizza delivered");
//         }, 7000)
//     });
// }

// orderPizza()
//     .then(function(message){
//         console.log(message);
//     })
//     .catch(function(error){
//         console.log(error);
//     });


// function processPayment(amount){
//     return new Promise(function(resolve,reject){
//         console.log("make payments");

//         setTimeout(function(){
//             if(amount > 0){
//                 resolve("payment of KES {amount}successful")
//             }else{
//                 reject("lnvalid payment amount")
//             }
//         },2000);
//     })
// }

// //call with a valid amount
// processPayment(2000)
//     .then(function(message){
//         console.log("success:", message);
//     })
//     .catch(function(error){
//         console.log("error:", error)
//     });

// // call with an invalid amount 
// processPayment(0)
//     .then(function(message){
//         console.log("success:", message);
//     })
//     .catch(function(error){
//         console.log("error:", error)
//     });


//async or await -makes promises look like normal code it removes then () chaining making it easier to read
//when you add

// function getData(){
//     return new promises(function(resolve,reject){
//         setTimeout(function(){
//             resolve("data received");
//         },2000);
//     });
// }

// getData()
// .then(function(message){
//     console.log(message);
// })


// async function greet() {
//     return "hello student";
// }
//  greet ()
//  .then(function(message){
//     console.log(message);
//  })

 // await pauses inside an async function until the promise finishes

//  function getData(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("data loaded");
//         },3000);
//     })
//  }

//  async function showData(){
//     console.log("loading");

//     let result = await getData();

//     console.log(result);
//  }
//  showData();

// step1 -> step2 ->step3

// setTimeout(()=>{
//     console.log("step1");
// },Math.random() * 1000)
//     setTimeout(()=>{
//     console.log("step2");
// },Math.random() * 1000)
//     setTimeout(()=>{
//     console.log("step3");
// },Math.random() * 1000)

// function step1(callback){
//     console.log("starting step one");

//     setTimeout(()=>{
//         console.log("finish step 1");
//         callback();
// },Math.random() * 1000);
// }


// function step2(callback){
//     console.log("starting step two");

//     setTimeout(()=>{
//         console.log("finish step 2");
//         callback();
// },Math.random() * 1000);
// }

// function step3(callback){
//     console.log("starting step three");

//     setTimeout(()=>{
//         console.log("finish step 3");
//         callback();
// },Math.random() * 1000);
// }

// step1(function(){
//     step2(function(){
//         step3();
//     })
// })

//IN CLASS ACTIVITY

// Implement the function:

// runStepsWithError(steps, done)
// Description

// steps is an array of functions.

// done is a callback that runs when execution finishes or fails.

// Each step receives:

// (next, fail)

// next() → move to the next step

// fail() → stop execution immediately

// Requirements

// Your function must:

// Execute steps in order.

// Only proceed when next() is called.

// Stop immediately if fail() is called.

// If fail() is called:

// Do NOT run remaining steps.

// Call done("Error occurred").

// If all steps succeed:

// Call done().

// function runStepsWithError(steps,done) {
//   return new Promise((resolve, reject) => {
//     let index = 0;
//      let finished = false;

//     function next() {
//        if (finished) return;
//        index++;
//        if (index < steps.length) {
//          try {
//            steps[index](next, fail);
//          } catch (err) {
//            fail();
//          }
//        } else {
//          finished = true;
//          resolve(); // all steps completed successfully
//       }
//     }
//      function fail() {
//        if (!finished) {
//          finished = true;
//          reject(new Error("Error occurred")); // stop immediately on failure
//        }
//      }
//  // start execution with the first step
//         if (steps.length > 0) {
//         try {
//          steps[0](next, fail);
//        } catch (err) {
//          fail();
//        }
//      } else {
//        resolve(); // no steps to run
//      }
//    });
//  }

// const steps = [
//   (next, fail) => {
//     console.log("Step 1");
//     next();
//   },
//   (next, fail) => {
//     console.log("Step 2");
//     setTimeout(() => {
//       next(); // simulate success
//     }, 1000);
//   },
//   (next, fail) => {
//     console.log("Step 3");
//     setTimeout(() => {
//       fail(); // simulate failure
//     }, 500);
//   },
//   (next, fail) => {
//     console.log("Step 4 (should never run if Step 3 fails)");
//     next();
//   }
// ];

// (async () => {
//   try {
//     await runStepsWithError(steps);
//     console.log("Finished successfully!");
//   } catch (err) {
//     console.log("Finished with error:", err.message);
//   }
// })();

//DAY 3

// error handling with try/catch

// getmessage()
//   .then(function(){
//     console.log(message);
//   })
//   .catch(function(error){
//     console.log("error:", error)
//   })

// try{
//   console.log("start");
//   throw"something went wrong";
//   console.log("end");
// } catch (error) {
//   console.log("caught:", error);
// }


function getData(){
  return Promise.reject("failed");
}

async function test(){
  try{                                  //trow is how js creates an error on purpose
    const result = await getData();      //stop everything , something is wrong
    console.log(result)
  }catch(error){
    console.log("caught:", error);
  }
}

test();

async function checkAge(age){
  if (age < 18){
    throw new Error ("you must be 18")
  }
  return "access granted";
}

async function test(){
  try{
    const message = await checkAge(17);
    console.log(message);
  }catch(error){
    console.log("error:", error.message)
  }
}
test