module.exports = function (router) {



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
      res.redirect('/current-claim-number');
    } else {
	    res.redirect('/name-of-child');
    }
  });

  // Reference Number
  router.all('/current-claim-number', function (req, res) {
    res.render('current-claim-number', {'form_action' : '/store-claim-number' });
  });

  router.post('/store-claim-number', function(req, res) {
    req.session.refNumber = req.body['childBenefitReferenceNumber'];
    console.log(req.session.refNumber);
    if(req.session.refNumber) {
      res.redirect('/name-of-child');
    }
  });

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
    res.render('date-of-birth', {'form_action' : '/store-dob', 'nameOfChild' : req.session.childFirstName });
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
  router.all('/child-gender', function(req, res) { res.render('child-gender', {'form_action' : '/store-gender', 'nameOfChild' : req.session.childFirstName });
  });

  router.post('/store-gender', function(req, res) {
    req.session.gender = req.body['gender'];
    console.log(req.session.gender);
    if(req.session.refNumber) {
      res.redirect('/prototype');
    } else {
      res.redirect('/living-with-child');
    }
  });

  /*****************
  * Child live with you
  *****************/
  router.all('/living-with-child', function(req, res) {
    res.render('living-with-child', {'form_action' : '/store-living-with-child', 'nameOfChild' : req.session.childFirstName });
  });

  router.post('/store-living-with-child', function(req, res) {
    req.session.liveWithChild = req.body['liveWithChild'];
    console.log(req.session.liveWithChild);
    if(req.session.liveWithChild == "yes") {
      res.redirect('/always-in-uk');
    } else {
      res.redirect('/contribute');
    }
  });

	// contribution
	router.all('/contribute', function(req, res) {
		res.render('contribute', {'form_action' : '/store-contribute', 'nameOfChild' : req.session.childFirstName });
	});

	router.post('/store-contribute', function(req, res) {
		req.session.contribute = req.body['contribute'];
		console.log(req.session.contribute);
		if(req.session.contribute == "yes") {
			res.redirect('/always-in-uk');
		} else {
			res.redirect('/prototype');
		}
	});

	// contribution
	router.all('/crown-servant', function(req, res) {
		res.render('crown-servant', {'form_action' : '/store-crown-servant' });
	});

	router.post('/store-crown-servant', function(req, res) {
		req.session.crown = req.body['crown'];
		console.log(req.session.crown);
		if(req.session.crown == "yes") {
			res.redirect('/british-citizen');
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

	 // right to right-to-reside

	 router.all('/right-to-reside', function(req, res) {
		 res.render('right-to-reside', {'form_action' : '/store-right-to-reside' });
	 });

	 router.post('/store-right-to-reside', function(req, res) {
		 req.session.reside = req.body['reside'];
			 console.log(req.session.reside);
			 if(req.session.reside == "yes") {
				 res.redirect('/residencey-card-number');
			 } else {
				 res.redirect('/right-to-reside-checks');
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
      res.redirect('/partner-claiming');
    } else {
      res.redirect('/earnings-per-year');
    }
  });

	// partner claiming
	router.all('/partner-claiming', function(req, res) {
		res.render('partner-claiming', {'form_action' : '/store-partner-claiming' });
	});

	router.post('/store-partner-claiming', function(req, res) {
		req.session.partnerClaim = req.body['partnerClaim']
		console.log(req.session.partnerClaim);
		if(req.session.partnerClaim == "male") {
			res.redirect('/partner-address');
		} else {
			res.redirect('/partner-or-you-earnings')
		}
	 });

	 // partner address
	 router.all('/partner-address', function(req, res) {
		 res.render('partner-address', {'form_action' : '/store-partner-address' });
	 });

	 router.post('/store-partner-address', function(req, res) {
		 req.session.partnerAddress = req.body['partnerAddress']
		 console.log(req.session.partnerAddress);
		 if(req.session.partnerAddress == "yes") {
			 res.redirect('/partner-or-you-earnings');
		 } else {
			 res.redirect('/income-calculator')
		 }
		});



		// partner or you 50k earnings
		router.all('/partner-or-you-earnings', function(req, res) {
			res.render('partner-or-you-earnings', {'form_action' : '/store-partner-or-you-earnings' });
		});

		router.post('/store-partner-or-you-earnings', function(req, res) {
			req.session.partnerOrYouEarnings = req.body['partnerOrYouEarnings']
			console.log(req.session.partnerOrYouEarnings);
			if(req.session.partnerOrYouEarnings == "yes") {
				res.redirect('/income-calculator');
			} else {
				res.redirect('/payment-start')
			}
		 });


  // 50K Earnings
  router.all('/earnings-per-year', function(req, res) {
    res.render('earnings-per-year', {'form_action' : '/store-earnings-per-year' });
  });

  router.post('/store-earnings-per-year', function(req, res) {
    req.session.earningsPerYear = req.body['earningsPerYear']
    console.log(req.session.earningsPerYear);
    if(req.session.earningsPerYear == "yes") {
      res.redirect('/income-calculator');
    } else {
      res.redirect('/payment-start');
    }
   });

  // Annual income
  router.all('/income-calculator', function(req,res){
    res.render('income-calculator', {'form_action' : '/store-income-calculator' });
  });

  router.post('/store-income-calculator', function (req,res){
    req.session.annualIncome = req.body['annualIncome'];
    console.log(req.session.annualIncome);
    // Work out weekly rates for HICBC
    paymentReceived = 0
    yearlyPaymentReceived = 0
    switch (true) {
      case (req.session.annualIncome >= 50000 && req.session.annualIncome < 51000):
        yearlyPaymentReceived = 1076.40;
        break;
			case (req.session.annualIncome >= 51000 && req.session.annualIncome < 52000):
				yearlyPaymentReceived = 969.40;
				break;
			case (req.session.annualIncome >= 52000 && req.session.annualIncome < 53000):
				yearlyPaymentReceived = 861.40;
				break;
			case (req.session.annualIncome >= 53000 && req.session.annualIncome < 54000):
				yearlyPaymentReceived = 754.40;
				break;
			case (req.session.annualIncome >= 54000 && req.session.annualIncome < 55000):
				yearlyPaymentReceived = 646.40;
				break;
			case (req.session.annualIncome >= 55000 && req.session.annualIncome < 56000):
				yearlyPaymentReceived = 538.40
				break;
			case (req.session.annualIncome >= 56000 && req.session.annualIncome < 57000):
				yearlyPaymentReceived = 431.40;
				break;
			case (req.session.annualIncome >= 57000 && req.session.annualIncome < 58000):
				yearlyPaymentReceived = 323.40;
				break;
			case (req.session.annualIncome >= 58000 && req.session.annualIncome < 59000):
				yearlyPaymentReceived = 215.40;
				break;
			case (req.session.annualIncome >= 59000 && req.esssion.annualIncome < 60000):
				yearlyPaymentReceived = 108.40;
				break;
			case (req.sssion.annualIncome > 60000):
				yearlyPaymentReceived = 0.40
				break;
    }
		switch (true) {
			case (req.session.annualIncome >= 50000 && req.session.annualIncome < 51000):
				paymentReceived = 20.70;
				break;
			case (req.session.annualIncome >= 51000 && req.session.annualIncome < 52000):
				paymentReceived = 18.64;
				break;
			case (req.session.annualIncome >= 52000 && req.session.annualIncome < 53000):
				paymentReceived = 16.57;
				break;
			case (req.session.annualIncome >= 53000 && req.session.annualIncome < 54000):
				paymentReceived = 14.51;
				break;
			case (req.session.annualIncome >= 54000 && req.session.annualIncome < 55000):
				paymentReceived = 12.43;
				break;
			case (req.session.annualIncome >= 55000 && req.session.annualIncome < 56000):
				paymentReceived = 10.35;
				break;
			case (req.session.annualIncome >= 56000 && req.session.annualIncome < 57000):
				paymentReceived = 8.30;
				break;
			case (req.session.annualIncome >= 57000 && req.session.annualIncome < 58000):
				paymentReceived = 6.22;
				break;
			case (req.session.annualIncome >= 58000 && req.session.annualIncome < 59000):
				paymentReceived = 4.14;
				break;
			case (req.session.annualIncome >= 59000 && req.esssion.annualIncome < 60000):
				paymentReceived = 2.08;
				break;
			case (req.sssion.annualIncome > 60000):
				paymentReceived = 0.01;
				break;
		}
    res.redirect('/hicbc-choice');
  });

	 /*************************************
	 * hicbc choice
	  **************************************/
			router.all('/hicbc-choice', function(req, res) {
				res.render('hicbc-choice', {'form_action' : '/store-hicbc-choice', 'annualIncome' : req.session.annualIncome, 'paymentReceived' : paymentReceived.toFixed(2), 'yearlyPaymentReceived' : yearlyPaymentReceived.toFixed(2) });
			});

			router.post('/store-hicbc-choice', function(req, res) {
				req.session.hicbcChoice = req.body['hicbcChoice'];
				console.log(req.session.hicbcChoice);
				if(req.session.hicbcChoice == "yes") {
					res.redirect('/payment-start');
				} else {
					res.redirect('/prototype');
				}
			 });

  // Bank account name
  router.all('/bank-account-name', function(req,res){
  	res.render('bank-account-name', {'form_action' : '/store-bank-account-name' });
  });

  router.post('/store-bank-account-name', function (req,res){
    req.session.bankAccName = req.body['bankAccountName'];
    console.log(req.session.bankAccName);
    res.redirect('/bank-details');
  });

  // Account and Sort Code
  router.all('/bank-details', function(req,res){
  	res.render('bank-details', {'form_action' : '/store-bank-details' });
  });

  router.post('/store-bank-details', function (req,res){
    req.session.accountNumber = req.body['accountNumber'];
    req.session.sortCode = req.body['sortCode'];
    console.log(req.session.accountNumber);
    console.log(req.session.sortCode);
    res.redirect('/bank-account-address');
  });

  // Address
  router.all('/bank-account-address', function(req,res){
  	res.render('bank-account-address', {'form_action' : '/store-bank-account-address' });
  });

  router.post('/store-bank-account-address', function (req,res){
    req.session.addressLine1 = req.body['addressLine1'];
    req.session.addressLine2 = req.body['addressLine2'];
    req.session.town = req.body['town'];
    req.session.county = req.body['county']
    req.session.postcode = req.body['postcode'];
    console.log(req.session.sortCode);
    res.redirect('/pay-preference');
  });

/*************************
  * Pay Preference
  *************************/
  router.all('/pay-preference', function(req, res) {
    res.render('pay-preference', {'form_action': '/store-pay-preference' });
  });

  router.post('/store-pay-preference', function(req, res) {
    req.session.payPreference = req.body['payPreference'];
    console.log(req.session.payPreference);
    res.redirect('/check-your-answers');
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




  // Away 1 year

}
