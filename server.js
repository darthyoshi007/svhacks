(function() {
var express = require('express');
var app = express();
var server = require('http').createServer(app);

server.listen(8080, function() {
    return console.log('Server listening at port 8080');
});

app.use(express["static"]('../'));

}).call(this);
