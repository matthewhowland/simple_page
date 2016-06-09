var express = require('express');
var server = express();

server.get('/', function(request, response){
  response.send('hola!')
});

server.listen(8080);
