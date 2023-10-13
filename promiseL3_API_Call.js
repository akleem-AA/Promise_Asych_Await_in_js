// Array of API URLs
const apiUrl1 = "https://jsonplaceholder.typicode.com/todos/1";
const apiUrl2 = "https://jsonplaceholder.typicode.com/todos/2";

// Function to fetch data from an API URL
function fetchDataFromAPI(apiUrl) {
  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
}

// Array of promises to fetch data from API endpoints
const promises = [
  fetchDataFromAPI(apiUrl1),
  fetchDataFromAPI(apiUrl2)
];

// Use Promise.all to fetch data from multiple API endpoints concurrently
Promise.all(promises)
  .then((results) => {
    // All promises have resolved successfully
    console.log('Data from all API endpoints:', results);
    // You can process the data from all promises here
  })
  .catch((error) => {
    // If any promise is rejected, this block will run
    console.error('One or more promises rejected:', error);
    // Handle the error as needed
  });
