const middlewareObj = {};

middlewareObj.loggedIn = function(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    } 
    res.render('login');
};

module.exports = middlewareObj;