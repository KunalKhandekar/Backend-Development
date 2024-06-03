const { validateToken } = require('../services/auth');

const checkforAuthentication = (cookieName) => {
    return (req, res, next) => {
        console.log(cookieName , req.cookies)
        const tokenCookieValue = req.cookies[cookieName];
        if (!tokenCookieValue) {
            return next()
        };

        try {
            const payload = validateToken(tokenCookieValue);
            req.user = payload;
        } catch (error) {

        }

        return next();
    };
};

module.exports = {
    checkforAuthentication
};