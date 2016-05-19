// Use this file to change prototype configuration.
var util = require("util");
// Note: prototype config can be overridden using environment variables (eg on heroku)

var config = {

  hostname: "child-benefit-prototype",

  // Service name used in header. Eg: 'Renew your passport'
  serviceName: "Child Benefit ",

  // Default port that prototype runs on
  port: '3001',

  // Enable or disable password protection on production
  useAuth: 'true',

  // Cookie warning - update link to service's cookie page.
  cookieText: 'GOV.UK uses cookies to make the site simpler. <a href="#" title="Find out more about cookies">Find out more about cookies</a>',

  host: function(req) {
  	var host = req.get('host');
  	var redirectUrl;

  	if (host.indexOf(config.hostname) > -1) {
  		redirectUrl = util.format("http://%s.herokuapp.com", config.hostname);
      console.log(redirectUrl);
  	} else {
  		redirectUrl = util.format("http://localhost:%s", config.port);
      console.log(redirectUrl);
  	}
  	console.log('redirectUrl: ' + redirectUrl);
  	return redirectUrl;
  }

};

module.exports = config;
