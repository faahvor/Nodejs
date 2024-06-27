const http = require('http');
http.createServer((req, res)=>{
res.writeHead(200, {"Content-Type:": "text/html"})
res.write("<h1>Hello world</h1>")
res.removeHeader();
}).listen(3000)
console.log("server is running on  http://local.3000");