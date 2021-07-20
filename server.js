var http = require('http');

http.createServer((req,res)=>{

    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Hello World</h1>");
    res.end().listen(7070);

    console.log('Server listen to port 7070');
})