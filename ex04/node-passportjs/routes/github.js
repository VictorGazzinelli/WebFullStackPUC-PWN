var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/', 
    passport.authenticate('github'));

router.get('/callback', 
    passport.authenticate('github', { failureRedirect: '/login'}),
    (_, res) => res.redirect('/admin')
);

module.exports = router;
