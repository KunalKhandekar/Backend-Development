const USER = require('../models/user');
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

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjRjZWYxMmMwYzI0NzI5Y2YwNjljNmQiLCJlbWFpbCI6Imt1bmFsa2hhbmRla2FyLmRldkBnbWFpbC5jb20iLCJpYXQiOjE3MTYzODUyNTF9.k9x90uO1iGzyGTDDVkpsOQP4at3pa8aqkPrDGZIrrIA

const handleLogin = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await USER.findOne({ email: email, password: password });
    if (user) {
        const token = setUser(user);
        // res.cookie('uuid', token);
        // return res.status(200).redirect('/');
        return res.status(200).json({
            token
        });
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