const fs =require("fs");

// creating a new file

//------------------------------------
// fs.writeFileSync("read.txt", "welcome to my channel");
//--------------------------------------

//---------------------------------------
// fs.writeFileSync("read.txt", "thapa technical, welcome to my channel");
//---------------------------------------

// appending the new data to the older one
//------------------------------------
// fs.appendFileSync('read.txt', ' how are you');
//---------------------------------------

//this is to read the data from the file
//---------------------------------------
// const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data);
// org_data = buf_data.toString();
// console.log(org_data);
//---------------------------------------

//this is to rename the file 

//--------------------------------------
fs.renameSync("read.txt", "readwrite.txt");
//---------------------------------------