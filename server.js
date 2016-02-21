var express = require('express');
var app = express();
var path = require("path");
passport = require('passport');
FacebookStrategy = require('passport-facebook');
app.use(passport.initialize());
app.use(passport.session());
var server = require('http').createServer(app);

passport.use(new FacebookStrategy({
    clientID: "1031650730207594",
    clientSecret: "daeadb3b487b60050d973c976dcb0a0d",
    callbackURL: "http://www.localhost:8080/auth/facebook/callback",
    profileFields: ['id', 'name', 'picture.type(large)', 'emails', 'displayName', 'about', 'gender']
},
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

server.listen(8080, function() {
    return console.log('Server listening at port 8080');
});

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/goals', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
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
