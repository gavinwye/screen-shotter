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
    res.redirect('/name-of-child');
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
      res.redirect('/leave-uk');
    } else {
      res.redirect('/prototype');
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
}
