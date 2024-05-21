const USER = require('../models/user');
const { v4: uuidv4 } = require('uuid');
const { setUser } = require('../services/auth');

const handleSignUp = async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = new USER({
        name: name,
        email: email,
        password: password
    });

    await user.save();
    res.status(201).redirect('/');
};

const handleLogin = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await USER.findOne({ email: email, password: password });

    console.log(user);
    if (user) {

        const sessionID = uuidv4();
        setUser(sessionID, user);
        res.cookie('uuid', sessionID);
        return res.status(200).redirect('/');
    } else {
        return res.status(404).render('login', {
            error: 'Invalid Credentials !!'
        });
    };
    
};



module.exports = {
    handleSignUp,
    handleLogin
};