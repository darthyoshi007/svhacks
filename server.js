var express = require('express');
var app = express();
var path = require("path");
passport = require('passport');
FacebookStrategy = require('passport-facebook');
app.use(passport.initialize());
app.use(passport.session());
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var users = [];
var localUsername;

server.listen(8080, function() {
    return console.log('Server listening at port 8080');
});


io.on('connection', function (socket) {

  socket.on('login', function(data) {
    if (users[data] == null){
      users[data] = {
        userName : data
      };
      localUsername = data;
      console.log(localUsername+"1");
    }
  });

  socket.on('userAdded', function(data) {
    if (users[localUsername] != null){
      socket.emit('userAlreadyAdded', true);
    }
    else socket.emit('userAlreadyAdded', false)
  });

  // passport.use(new FacebookStrategy({
  //   clientID: "1031650730207594",
  //   clientSecret: "daeadb3b487b60050d973c976dcb0a0d",
  //   callbackURL: "http://www.localhost:8080/goals",
  //   profileFields: ['id', 'name', 'picture.type(large)', 'emails', 'displayName', 'about', 'gender']
  // },
  // (function(_this) {
  //     return function(accessToken, refreshToken, profile, cb) {
  //       if (users[localUsername] == null) {
  //         users[localUsername] = {};
  //       }
  //       console.log(profile.id);
  //       console.log("j");
  //       users[localUsername] = {
  //         id: profile.id,
  //         name: profile.name.givenName + " " + profile.name.familyName,
  //         avatar: profile.photos[0].value
  //       }
  //       return results;
  //     };
  //   })(this)));
});


app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/goals', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/node_modules/socket.io-client/socket.io.js', function(req, res){
  res.sendFile(path.join(__dirname + '/node_modules/socket.io-client/socket.io.js'));
});

app.get('/styles.css', function(req, res){
  res.sendFile(path.join(__dirname + '/styles.css'));
});

app.get('/app.js', function(req, res){
  res.sendFile(path.join(__dirname + '/app.js'));
});

app.get('/addGoal', function(req, res){
  res.sendFile(path.join(__dirname + '/addGoal.html'));
});

app.get('/specGoal', function(req, res){
  res.sendFile(path.join(__dirname + '/specGoal.html'));
});
