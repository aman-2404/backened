const fs = require("fs");


// this is Asynchronous way of writing a function
// In synchronous function we passed only two parameter but here three parameter, the third one is callback function 

// 1 we pass them a function as argument - a callback that gets called when thata task completes.
// 2 The callback has an argument that tells you whether the operation completed successfully.
// 3 Now we need to say what to do when fs.writeFile has completed (even if it's nothing), and start checking for errors.

//---------------------------------
// fs.writeFile("read.txt", "today is awesome day", (err)=>{
// console.log("file is created");
// console.log(err);
// });
//-------------------------------------



// apending the data 
//-------------------------------------
// fs.appendFile("read.txt", "\nPlz like and share and subs thapa channel", (err)=>{
//     console.log("appending task completed");
// });
//-------------------------------------


// UTF-8 is given to convert the data buffer ie( binary data into real world data);
//--------------------------------------
fs.readFile("read.txt","UTF-8",(err, data)=>{
console.log(data);
});
//---------------------------------------
