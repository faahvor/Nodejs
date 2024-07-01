const fs = require("fs")
const data = fs.readFileSync("data.txt")
fs.writeFile("./text/data.txt","just wrote this",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log("written successfully");
    }
})

fs.readFile("data.txt",(error,data)=>{
    if(error){
        console.log(error);
    }else{
        console.log(data.toLocaleString());
    }
})
fs.mkdir('input.txt', function(err,data){
    if(err){
        return console.log(err);
    }else{
        console.log("file created successfully");
    }
})