var config = require('./config');
var express = require('express');
var router = express.Router();
var fs = require('fs');
var bodyParser = require('body-parser'); // for reading POSTed form data into `req.body`
var expressSession = require('express-session');
var cookieParser = require('cookie-parser'); // the session is stored in a cookie, so we use this to parse it

var app = express();

// must use cookieParser before expressSession
app.use(cookieParser());

app.use(expressSession({secret:'somesecrettokenhere'}));

app.use(bodyParser());

module.exports = router;

module.exports = {
  bind : function (router) {

    router.get('/', function (req, res) {
      var redirectUrl = config.host(req);
      // this is used for the IV (authentication) prototype so that we dont have to keep
      // changing the URl between localhost and the heroku app's URL.
      // The js for this is in the file /app/views/config.js

      res.render('index', {
        'redirect' : redirectUrl
      });
    });

  require('./routes-filelist')(router);
  require('./custom-routes')(router);
  require('./variable-list')(router);

  }
};
