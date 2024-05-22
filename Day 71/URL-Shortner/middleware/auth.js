const { getUser } = require('../services/auth');

const restrictedToLoggedInUsersOnly = (req, res, next) => {
    const userId = req.headers['authorization'];
    if (!userId) return res.redirect('/login');
    const token = userID.split('Bearer ')[1]
    const user = getUser(token);
    if (!user) return res.redirect('/login');

    req.user = user;
    next();
};

const checkAuth = (req, res, next) => {
    console.log(req.headers);
    const userId = req.headers['authorization'];
    const token = userId.split('Bearer ')[1]
    const user = getUser(token);
    req.user = user;
    next();
};

module.exports = {
    restrictedToLoggedInUsersOnly,
    checkAuth
}