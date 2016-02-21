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

<<<<<<< HEAD
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '960585080655610',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
  
server.get('/', function (req, res) {
=======
app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/', function (req, res) {
>>>>>>> master
  res.send('Hello World!');
});
