var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plan'});
    response.end('Hello WOrld ' + new Date().toString() + '\n');
}).listen(7000)

console.log('Server Running on http://localhost:7000');

