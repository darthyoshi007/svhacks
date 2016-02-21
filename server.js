var express = require('express');
var app = express();
passport = require('passport');
FacebookStrategy = require('passport-facebook');
app.use(passport.initialize());
app.use(passport.session());
var server = require('http').createServer(app);

passport.use(new FacebookStrategy({
    clientID: "240832839587252",
    clientSecret: "26d026e64e397e8e3dcc7fc50fff1aef",
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

app.get('/', function (req, res) {
  res.send('Hello World!');
});
