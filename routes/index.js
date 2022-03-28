const express = require('express'),
      router = express.Router(),
      middleware = require('../middleware'),
      passport = require('passport'),
      User = require('../models/user.js')

// =================
// USER LOGIN ROUTES
// =================

// Used to create admin user only
/*
router.get('/register', (req, res) => {
    res.render('register');
});


router.post('/register', (req, res) => {
    User.register(new User({username: req.body.username}), req.body.password, (err, user) => {
        if(err) {
            console.log(err);
            res.render('register');
        } else {
            passport.authenticate('local')(req, res, () => {
                console.log('New User Added');
                res.redirect('/');
            })
        }
    })
});
*/

// Render login form
router.get('/login', (req, res) => {
    res.render('login', {view: ''});
});
// Login logic
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}), (req, res) => {
});

// Logout routes
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// Change password

router.get('/account/:username/change-password', middleware.loggedIn, (req, res) => {
    user.findOne({username: req.user.username}, (err, foundUser) => {
        if(err) {
            console.log(err);
        } else {
            res.render('updateLogin');
        }
    })
});

router.post('/account/:username',middleware.loggedIn, (req, res) => {
    user.changePassword(req.body.oldPassword, req.body.newPassword, (err) => {
        if(err) {
            console.log(err);
            console.log('Try again')
        } else {
            console.log('Password Changed')
        }
    })
});

module.exports = router;