module.exports = function (router) {
  // Over 16
  router.all('/check-your-answers', function(req,res){
    res.render('check-your-answers', {
      'claimingForAnother' : req.session.claiming, 
      'nameOfChild' : req.session.childFirstName + " " + req.session.childLastName,
      'childGender' : req.session.gender,
      'childDob' : req.session.dobDay + " " + req.session.dobMonth + " " + req.session.dobYear,
      'childLiveWith' : req.session.liveWithChild,
      'ukOrRoi' : req.session.alwaysInUk,
      'britishCitizen' : req.session.british,
      'claimantName' : req.session.claimantFirstName + " " + req.session.claimantLastName,
      'yourNino' : req.session.nino,
      'relationshipStatus' : req.session.relationshipStatus
    });
  });
  
}
