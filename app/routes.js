var express = require('express');
var router = express.Router();
var config = require('./config');
var fs = require('fs');
var bodyParser = require('body-parser'); // for reading POSTed form data into `req.body`
var expressSession = require('express-session');
var cookieParser = require('cookie-parser'); // the session is stored in a cookie, so we use this to parse it

var app = express();

// must use cookieParser before expressSession
app.use(cookieParser());

app.use(expressSession({secret:'somesecrettokenhere'}));

app.use(bodyParser());

router.get('/', function (req, res) {

  var redirectUrl = config.host(req);
  // this is used for the IV (authentication) prototype so that we dont have to keep
  // changing the URl between localhost and the heroku app's URL.
  // The js for this is in the file /app/views/config.js

  res.render('index', {
    'redirect' : redirectUrl
  });
});


// Example routes - feel free to delete these

// Passing data into a page

router.get('/file-list', function(req, res) {

  var markup = function(files, callback) {

    var items = [];
    for (i = 0; i < files.length; i++) {
      var q = files[i];
      q = q.slice(0, -5);
      var markup = '<li>' + '<a href="' + q + '">' + q + '</a>' + '</li>';
      items.push(markup);
    };
    callback(items);
  };


  var getFiles = function(callback) {
    fs.readdir(__dirname + '/views', function (err, files) { // '/' denotes the root folder
      if (err) throw err;
      markup(files, callback)
    });
  };

  getFiles(function(items){

    // render markup for items


    res.render('file-list', { 'files' : items });
  });
});

router.get('/examples/template-data', function (req, res) {

  res.render('examples/template-data', { 'name' : 'Foo' });

});

// Branching

router.get('/examples/over-18', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var over18 = req.query.over18;

  if (over18 == "false"){

    // redirect to the relevant page
    res.redirect("/examples/under-18");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('examples/over-18');

  }

});

router.post('/2-20OrOver', function(req, res) {
  req.session.over16 = req.body['over16'];
  console.log(req.session.over16);
  if (req.session.over16 == "no"){
     res.redirect("/3a-childBornInUK");
   } else {
     res.render("2-20OrOver");
   }
});

// add your routes here

module.exports = router;
