module.exports = function (router) {
  // Over 16
  router.all('/variable-list', function(req,res){
    res.render('variable-list', {
      '16over' : req.session.over16,
      'ukBirth' : req.session.ukBirth,
      'name' : req.session.childFirstName + " " + req.session.childLastName
    });
  });
  
}
