// error handling //
// const a = 10; 
// if(a > 5 {console.log('Hello');}) 

// let x = undefined; 
// console.log(x.name); 

------------------------------------------------
// try {
//     // Code that might throw an error
//   } catch (error) {
//     // Code to handle the error
//   } finally {
//     // Code that will run regardless of whether an error occurred or not
//   }

// example //
// try {
//     const jsonString = '{"name": "John", "age": 30}'; // A valid JSON string
//     const user = JSON.parse(jsonString); // Parsing the JSON string
//     console.log(user);
//   } catch (error) {
//     console.error("Error parsing JSON:", error.message); // Catch and handle any error
//   } finally {
//     console.log("Execution finished.");
//   }

-----------------------------------------------------------------
// function divide(a, b) {
//     if (b === 0) {
//       throw new Error("Cannot divide by zero!");
//     }
//     return a / b;
//   }
  
//   try {
//     let result = divide(10, 0); // Will throw error
//     console.log(result);
//   } catch (error) {
//     console.error("Caught an error:", error.message); // Handling the error
//   } finally {
//     console.log("End of division operation.");
//   }

----------------------------------------------------
// async error handling //
// function fetchData() {
//     return new Promise((resolve, reject) => {
//       const success = Math.random() > 0.5;
//       if (success) {
//         resolve("Data fetched successfully!");
//       } else {
//         reject("Failed to fetch data!");
//       }
//     });
//   }
  
//   fetchData()
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error("Error:", error); // Handling error using .catch()
//     });

------------------------------------------------------
// async/await //
// async function fetchData() {
//     const success = Math.random() > 0.5;
//     if (success) {
//       return "Data fetched successfully!";
//     } else {
//       throw new Error("Failed to fetch data!");
//     }
//   }
  
//   async function main() {
//     try {
//       const data = await fetchData();
//       console.log(data);
//     } catch (error) {
//       console.error("Error:", error.message); // Handling error in async function
//     } finally {
//       console.log("Finished the fetch operation.");
//     }
//   }
  
//   main();
  
---------------------------------------------------------------------
//*** try: Contains code that may throw an error.
// catch: Catches and handles errors that occur in the try block.
// finally: A block that executes regardless of whether an error occurred. ****/
