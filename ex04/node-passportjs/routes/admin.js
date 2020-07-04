var express = require('express');
var router = express.Router();

const ensureAuthenticated = (req, res, next) => {
    if(req.isAuthenticated())
        return next();
    res.redirect('/login')
}

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
  res.render('admin',  { user: req.session.passport.user } );
});

module.exports = router;
