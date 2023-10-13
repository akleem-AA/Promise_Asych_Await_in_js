// Simulate functions to fetch data from multiple APIs
function fetchFromAPI1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      if (data) {
        resolve(data);
      } else {
        reject("Failed to fetch data from API 1");
      }
    }, 1000);
  });
}

function fetchFromAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { city: "New York", country: "USA" };
      if (data) {
        resolve(data);
      } else {
        reject("Failed to fetch data from API 2");
      }
    }, 1500);
  });
}

function fetchFromAPI3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { product: "Laptop", price: 1000 };
      if (data) {
        resolve(data);
      } else {
        reject("Failed to fetch data from API 3");
      }
    }, 2000);
  });
}

// Function to fetch data from multiple APIs using Promise.all
let  promisesArray = [fetchFromAPI1(), fetchFromAPI2(), fetchFromAPI3()];

function fetchAndProcessDataFromMultipleAPIs(ApiArray) {
 
  Promise.all(ApiArray)
    .then((results) => {
      console.log("Data from all APIs:", results);
      // You can process the data from all APIs here
    })
    .catch((error) => {
      console.error("Error fetching data from APIs:", error);
      // Handle the error as needed
    });
}
fetchAndProcessDataFromMultipleAPIs(promisesArray);

// Function to fetch data from multiple APIs using async/await
async function fetchAndProcessDataFromMultipleAPIs() {
  try {
    const data1 = await fetchFromAPI1();
    console.log("Data from API 1:", data1);

    const data2 = await fetchFromAPI2();
    console.log("Data from API 2:", data2);a

    const data3 = await fetchFromAPI3();
    console.log("Data from API 3:", data3);

    // You can process the data from all APIs here
  } catch (error) {
    console.error("Error fetching data from APIs:", error);
    // Handle the error as needed
  }
}

fetchAndProcessDataFromMultipleAPIs();
