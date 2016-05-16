module.exports = function (router) {
  /************************
  * Over 16 *
  *************************/
  router.post('/20-or-over', function(req, res) {
    req.session.over16 = req.body['over16'];
    console.log(req.session.over16);
    if (req.session.over16 == "no"){
       res.redirect("/child-uk-born");
     } else {
       res.render("20-or-over");
     }
  });

  /************************
  * UK Birth
  ************************/
  router.post('/where-uk-registered', function(req, res) {
    req.session.ukBirth = req.body['ukBirth'];
    console.log(req.session.ukBirth);
    if(req.session.ukBirth == "no") {
      res.redirect("/child-country-birth");
    } else {
      res.render("where-uk-registered");
    }
  });

  /***********************
  * Where in the UK
  ************************/
  router.post('/date-of-birth', function(req,res) {
    req.session.ukBirthCountry = req.body['ukBirthCountry'];
    console.log(req.session.ukBirthCountry);
    if(req.session.ukBirthCountry == "england" || req.session.ukBirthCountry == "scotland" || req.session.ukBirthCountry == "wales") {
      res.redirect("/date-of-birth");
    } else {
      res.redirect("/upload-birth-certificate");
    }
  });

  /*********************
  * Date of Birth
  **********************/
  router.post('/child-gender', function(req, res) {
    req.session.dobDay = req.body['dobDay'];
    req.session.dobMonth = req.body['dobMonth'];
    req.session.dobYear = req.body['dobYear'];
    console.log(req.session.dobDay)
    console.log(req.session.dobMonth)
    console.log(req.session.dobYear)
    res.redirect('/child-gender');
  });

  /*******************
  * Gender
  *******************/
  router.post('/name-of-child', function(req, res) {
    req.session.gender = req.body['gender'];
    console.log(req.session.gender);
    res.redirect('/name-of-child');
  });

  /******************
  * Name of Child
  ******************/
  router.all('/name-of-child', function(req,res){
  	res.render('name-of-child.html', {'form_action' : '/store-child-names' });
  });

  router.post('/store-child-names', function (req,res){
    req.session.childFirstName = req.body['childFirstName'];
    req.session.childLastName = req.body['childLastName'];
    console.log(req.session.childFirstName);
    console.log(req.session.childLastName);
    res.redirect('/claim-on-behalf');
  });

  router.all('/payment-details', function(req,res){
    res.render('payment-details', { 'name' : req.session.childFirstName + " " + req.session.childLastName });
  });

  /******************
  * Claiming on behalf
  ******************/
  router.post('/living-with-child', function(req, res) {
    req.session.childBehalf = req.body['childBehalf'];
    console.log(req.session.childBehalf);
    if(req.session.childBehalf == "yes") {
      res.redirect('/cannot-make-claim')
    } else {
      res.redirect('living-with-child');
    }
  });

  /*****************
  * Child live with you
  *****************/
  router.post('/current-address', function(req, res) {
    req.session.liveWithChild = req.body['liveWithChild'];
    console.log(req.session.liveWithChild);
    if(req.session.liveWithChild == "yes") {
      res.redirect('/current-address');
    } else {
      res.redirect('/contribute');
    }
  });

  /*******************
  * Current address
  *******************/
  router.post('/home-for-three-months', function(req, res) {
    req.session.currentAddress = req.body['currentAddress'];
    console.log(req.session.currentAddress);
    if(req.session.currentAddress == "yes") {
      res.redirect('/home-for-three-months');
    } else {
      res.redirect('current-address-2');
    }
  });

  /******************************
  * Lived at home for 3 months
  ******************************/
  router.post('/staying-in-uk', function(req, res) {
    req.session.monthsLived = req.body['monthsLived'];
    console.log(req.session.monthsLived);
    if(req.session.monthsLived == "yes") {
      res.redirect('/staying-in-uk');
    } else {
      res.redirect('/previous-address');
    }
  });

  /*************************************
  * Staying in UK
  **************************************/
  router.post('/salary', function(req, res) {
    req.session.stayingInUK = req.body['stayingInUK'];
    console.log(req.session.stayingInUK);
    if(req.session.stayingInUK == "yes") {
      res.redirect('/salary');
    } else {
      res.redirect('/end-2');
    }
  })

  /*******************
  * Current Salary
  *******************/
  router.post('/relationship-status', function(req, res) {
    req.session.correctSalary = req.body['correctSalary'];
    console.log(req.session.correctSalary);
    if(req.session.correctSalary == "yes") {
      res.redirect('/relationship-status');
    } else {
      res.redirect('/prototype');
    }
  });

  /********************
  * Relationship Status
  ********************/
  router.post('/partner-earnings', function(req, res) {
    req.session.relationshipStatus = req.body['relationshipStatus'];
    console.log(req.session.relationshipStatus);
    if(req.session.relationshipStatus == "married" || req.session.relationshipStatus == "livingwithpartner") {
      res.redirect('/partner-earnings');
    } else {
      res.redirect('/pay-preference');
    }
  });

  /*********************
  * Partner Earnings
  *********************/
  router.post('/prototype', function(req, res) {
    req.session.partnerEarnings = req.body['partnerEarnings'];
    console.log(req.session.partnerEarnings);
    if(req.session.partnerEarnings == "yes") {
      res.redirect('/prototype');
    } else {
      res.redirect('/pay-preference');
    }
  });

  /*************************
  * Pay Preference
  *************************/
  router.post('/bank-details', function(req, res) {
    req.session.payPreference = req.body['payPreference'];
    console.log(req.session.payPreference);
    res.redirect('/bank-details');
  });

  /***********************
  * Bank Details
  ***********************/
  router.post('/payment-details', function(req, res) {
    req.session.bankDetails = req.body['bankDetails'];
    console.log(req.session.bankDetails);
    if(req.session.bankDetails == "yes") {
      res.redirect('/payment-details');
    } else {
      res.redirect('/prototype');
    }
  });

}