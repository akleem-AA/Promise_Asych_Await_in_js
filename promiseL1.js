// A Promise in JavaScript is a way to handle tasks that might take time to finish, like fetching data from a server or reading a file. It helps make your code more organized and readable by allowing you to work with asynchronous operations and handle their results, whether they succeed or encounter errors.

// Create some promises
let p1 = new Promise((resolve, reject) => {
    resolve("p1 promise resolved");
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2 resolved after some time");
    }, 1000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3 resolved after 3 seconds");
    }, 3000);
});

let p4 = new Promise((resolve, reject) => {
    resolve("p4 was called first, but it will resolve after p3 without taking any time");
});

//STEP:-1 Handle promises using then and catch
function promiseFunction() {
    p1.then((res1) => {
            console.log('1', res1);
            return p2;
        })
        .then((res2) => {
            console.log("2", res2);
            return p3;
        })
        .then((res3) => {
            console.log('3', res3);
            return p4;
        })
        .then((res4) => {
            console.log('4', res4);
        })
        .catch((err) => console.log(err));
}

promiseFunction();
//output
// 1 p1 promise resolved
// 2 p2 resolved after some time
// 3 p3 resolved after 3 seconds
// 4 p4 was called first, but it will resolve after p3 without taking any time


// STEP:2:- Handle promises using async and await
const asyncFunction = async () => {
    try {
        let res1 = await p1;
        console.log('1', res1);
        let res2 = await p2;
        console.log('2', res2);
        let res3 = await p3;
        console.log('3', res3);
        let res4 = await p4;
        console.log('4', res4);
    } catch (error) {
        console.log(error);
    }
}

// Call the async function
asyncFunction();//output will be in same sequense



// STEP:-3 Create an array of promises
const promisesArray = [p1, p2, p3, p4];

// Function to handle all promises using Promise.all
 function handlePromises(promises) {
    return Promise.all(promises);
}
handlePromises(promisesArray)
    .then((resultsArray) => {
        console.log("All promises resolved:", resultsArray);//outpu will be in a array with index value we can yse forEach to print result
    })
    .catch((error) => {
        console.error("Error in handling promises:", error);
    });



// STEP 4:-you can use forEach for print the array result 
const promisesArray1 = [p1, p2, p3, p4];

// Function to handle all promises using Promise.all
function handlePromises1(promises) {
  return Promise.all(promises);
}

handlePromises1(promisesArray)
  .then((resultsArray) => {
    console.log("All promises resolved:");
    resultsArray.forEach((result, index) => {
      console.log(`Result ${index + 1}:`, result);
    });
  })
  .catch((error) => {
    console.error("Error in handling promises:", error);
  });


