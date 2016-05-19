module.exports = function (router) {
  // Over 16
  router.all('/variable-list', function(req,res){
    res.render('variable-list', {
      '16over' : req.session.over16,
      'ukBirth' : req.session.ukBirth,
      'ukBirthCountry' : req.session.ukBirthCountry,
      'childDob' : req.session.dobDay + " " + req.session.dobMonth + " " + req.session.dobYear,
      'childGender' : req.session.gender,
      'childBehalf' : req.session.childBehalf,
      'liveWithChild' : req.session.liveWithChild,
      'currentAddress' : req.session.currentAddress,
      'monthsLived' : req.session.monthsLived,
      'stayingInUK' : req.session.stayingInUK,
      'correctSalary' : req.session.correctSalary,
      'relationshipStatus' : req.session.relationshipStatus,
      'partnerEarnings' : req.session.partnerEarnings,
      'payPreference' : req.session.payPreference,
      'bankDetails' : req.session.bankDetails,
      'name' : req.session.childFirstName + " " + req.session.childLastName
    });
  });
  
}
