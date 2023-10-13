// Simulate a function to fetch data from an API
function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate a network request
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      if (data) {
        resolve(data); // Resolve the promise with the data
      } else {
        reject("Failed to fetch data from the API"); // Reject the promise on error
      }
    }, 1000); // Simulate a 1-second delay
  });
}


// Function to handle fetching data and processing it
function fetchAndProcessData() {
  fetchDataFromAPI()
    .then((data) => {
      console.log("Data fetched successfully:", data);//output will be object
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      // Handle the error as needed
    });
}
fetchAndProcessData();



//fetch data by uisng async await
const fetchByAwait = async ()=>{
    try{
    let res = await fetchDataFromAPI()
    console.log('res',res) //output will be same 
    }catch(err){
        console.log("err",err)//if !data will print the error
    }
}
fetchByAwait()
