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
      'relationshipStatus' : req.session.relationshipStatus,
      'over50K' : req.session.earningsPerYear,
      'bankAccName' : req.session.bankAccName,
      'accountNo' : req.session.accountNumber,
      'sortCode' : req.session.sortCode,
      'addressLine1' : req.session.addressLine1,
      'addressLine2' : req.session.addressLine2,
      'town' : req.session.town,
      'county' : req.session.county,
      'postcode' : req.session.postcode,
      'payPreference' : req.session.payPreference,
      'residentialAddressLine1' : req.session.residentialAddressLine1,
      'residentialAddressLine2' : req.session.residentialAddressLine2,
      'residentialTown' : req.session.residentialTown,
      'residentialCounty' : req.session.residentialCounty,
      'residentialPostcode' : req.session.residentialPostcode
    });
  });

}
