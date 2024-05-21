const { getUser } = require('../services/auth');

const restrictedToLoggedInUsersOnly = (req, res, next) => {
    const userId = req.cookies.uuid;
    if (!userId) return res.redirect('/login');
    const user = getUser(userId);
    if (!user) return res.redirect('/login');

    req.user = user;
    next();
};

const checkAuth = (req, res, next) => {
    const userId = req.cookies.uuid;
    const user = getUser(userId);
    req.user = user;
    next();
};

module.exports = {
    restrictedToLoggedInUsersOnly,
    checkAuth
}