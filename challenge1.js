
const fs = require("fs");

// folder made
//-------------------------------------
// fs.mkdir("Thapa", (err)=>{
//     console.log("folder made");
// });
//--------------------------------------

//making two files in thapa directory

//--------------------------------------
// fs.writeFile("Thapa/bio.txt","this content is  in bio file" ,(err)=>{
//     console.log("bio.txt made in thapa");
// });
//---------------------------------------


//--------------------------------------
// fs.writeFile("Thapa/data.txt","this content is in data file", (err)=>{
//     console.log("data.txt made in thapa");
// });
//---------------------------------------

//reading the data from the two files
//-------------------------------------
// fs.readFile("Thapa/bio.txt","UTF-8", (err, data)=>{
//     console.log(data);
// })

// fs.readFile("Thapa/data.txt","UTF-8", (err, data)=>{
//     console.log(data);
// })

//---------------------------------------

// renaming the file inside the thapa directory
//---------------------------------------
// fs.rename("Thapa/bio.txt", "Thapa/mybio.txt", (err)=> {
//     console.log("file rename successful");
// });
//---------------------------------------

// deleting the folder and both the files
//--------------------------------------
// fs.unlink("Thapa/mybio.txt",(err)=>{
//     console.log("my bio file deleted");
// });

// fs.unlink("Thapa/data.txt", (err)=>{
//     console.log("data file deleted");
// });
//---------------------------------------

//removing the directory
//--------------------------------------
// fs.rmdir("Thapa", (err)=> {
//     console.log("Thapa folder has been deleted");
// });
//-------------------------------------