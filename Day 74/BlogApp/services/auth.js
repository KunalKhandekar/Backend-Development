const JWT = require("jsonwebtoken");

const secret = "@131SUPERHUMNAFAMILY324242";

const createTokenForUser = (user) => {
    const payload = {
        _id : user._id,
        email : user.email,
        role : user.role
    };

    const token = JWT.sign(payload, secret);

    return token;
};

const validateToken = (token) => {
    const payload = JWT.verify(token, secret);
    return payload;
};

module.exports = {
    createTokenForUser,
    validateToken
};