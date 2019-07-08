const http = require('http');

const server = http.createServer (function handleRequest(req, res){
    console.log('Inside handle request');
    res.end('Hello World!');
});

server.listen(3000, function() {
    console.log("Server running on port 3000");
});