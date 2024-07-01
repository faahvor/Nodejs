// const http = require('http');
// const express = require('express')

// http.createServer((req, res)=>{
// res.writeHead(200, {"Content-Type:": "text/html"})
// res.write("<h1>Hello favour</h1>")
// res.removeHeader();
// }).listen(3000)
// console.log("server is running on  http://local.3000");

const fs = require("fs");
const data = fs.readFileSync("input.txt");

fs.readFile("input.txt",(error,data)=>{
if(error){
    console.log(error);
}else{
    console.log(data.toString(), "async");
}
})

// console.log(data.toString());
console.log("program has ended");


