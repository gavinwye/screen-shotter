module.exports = function (router) {

  router.all('/name-of-child', function(req,res){
  	res.render('name-of-child.html', {'form_action' : '/store-child-names' });
  });

  router.post('/store-child-names', function (req,res){
    req.session.childFirstName = req.body['childFirstName'];
    req.session.childLastName = req.body['childLastName'];
    console.log(req.session.childFirstName);
    console.log(req.session.childLastName);
    res.redirect('/date-of-birth');
  });

/*********************
  * Date of Birth
**********************/
  router.all('/date-of-birth', function(req, res) {
    res.render('date-of-birth', {'form_action' : '/store-dob' });
  });

  router.post('/store-dob', function (req, res) {
    req.session.dobDay = req.body['dobDay'];
    req.session.dobMonth = req.body['dobMonth'];
    req.session.dobYear = req.body['dobYear'];
    console.log(req.session.dobDay);
    console.log(req.session.dobMonth);
    console.log(req.session.dobYear);
    res.redirect('/child-gender');
  });

/*******************
 * Gender of Child
 * ****************/
  router.all('/child-gender', function(req, res) { res.render('child-gender', {'form_action' : '/store-gender' });
  });

  router.post('/store-gender', function(req, res) {
    req.session.gender = req.body['gender'];
    console.log(req.session.gender);
    res.redirect('/living-with-child');
  });

  /*****************
  * Child live with you
  *****************/
  router.all('/living-with-child', function(req, res) {
    res.render('living-with-child', {'form_action' : '/store-living-with-child' });
  });

  router.post('/store-living-with-child', function(req, res) {
    req.session.liveWithChild = req.body['liveWithChild'];
    console.log(req.session.liveWithChild);
    if(req.session.liveWithChild == "yes") {
      res.redirect('/always-in-uk');
    } else {
      res.redirect('/prototype');
    }
  });

  // Always Living in the UK
  router.all('/always-in-uk', function(req, res) {
    res.render('always-in-uk', {'form_action' : '/store-always-in-uk' });
  });

  router.post('/store-always-in-uk', function(req, res) {
    req.session.alwaysInUk = req.body['always-uk'];
    console.log(req.session.alwaysInUk);
    if(req.session.alwaysInUk == "yes") {
      res.redirect('/british-citizen');
    } else {
      res.redirect('/prototype');
    }
  });

/*************************************
* British citizen
 **************************************/
  router.all('/british-citizen', function(req, res) {
    res.render('british-citizen', {'form_action' : '/store-british-citizen' });
  });

  router.post('/store-british-citizen', function(req, res) {
    req.session.british = req.body['british'];
      console.log(req.session.british);
      if(req.session.british == "yes") {
        res.redirect('/claimant-name');
      } else {
        res.redirect('/right-to-reside');
     }
   });
 
 // Your Name
  router.all('/claimant-name', function(req,res){
  	res.render('claimant-name', {'form_action' : '/store-claimant-name' });
  });

  router.post('/store-claimant-name', function (req,res){
    req.session.claimantFirstName = req.body['claimantFirstName'];
    req.session.claimantLastName = req.body['claimantLastName'];
    console.log(req.session.claimantFirstName);
    console.log(req.session.claimantLastName);
    res.redirect('/national-insurance');
  });

  // Your Nino
  router.all('/national-insurance', function(req,res){
  	res.render('national-insurance', {'form_action' : '/store-nino' });
  });

  router.post('/store-nino', function (req,res){
    req.session.nino = req.body['nationalInsurance'];
    console.log(req.session.nino);
    res.redirect('/relationship-status');
  });

  /********************
  * Relationship Status
  ********************/
  router.all('/relationship-status', function(req, res) {
    res.render('relationship-status', {'form_action' : '/store-relationship-status' });
  });

  router.post('/store-relationship-status', function(req, res) {
    req.session.relationshipStatus = req.body['relationship-status'];
    console.log(req.session.relationshipStatus);
    if(req.session.relationshipStatus == "married" || req.session.relationshipStatus == "livingwithpartner") {
      res.redirect('/partner-earnings');
    } else {
      res.redirect('/earnings-per-year');
    }
  });

  // Leave UK
  router.all('/leave-uk', function(req, res) {
    res.render('leave-uk', {'form_action' : '/store-leave-uk' });
  });

  router.post('/store-leave-uk', function(req, res) {
    req.session.leaveUk = req.body['leave-uk'];
    console.log(req.session.leaveUk);
    if(req.session.leaveUk == "yes") {
      res.redirect('/away-8-weeks');
    } else {
      res.redirect('/prototype');
    }
  });

  /*************************************
	  * claiming for another child
	  **************************************/
	  router.all('/current-claim', function(req, res) {
	    res.render('current-claim', {'form_action' : '/store-current-claim' });
	  });

	  router.post('/store-current-claim', function(req, res) {
	    req.session.claiming = req.body['claiming'];
	    console.log(req.session.claiming);
    if(req.session.claiming == "yes") {
      res.redirect('/prototype');
    } else {
	      res.redirect('/name-of-child');
    }
	  });


  // Away 1 year

}
