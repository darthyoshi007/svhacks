var express = require('express');
var server = express();

server.listen(8080, function() {
    return console.log('Server listening at port 8080');
});

server.get('/', function (req, res) {
  res.send('Hello World!');
});
