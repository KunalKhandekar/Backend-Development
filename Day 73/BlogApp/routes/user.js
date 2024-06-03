const { Router } = require('express');
const USER = require('../models/user');
const { createHmac, randomBytes } = require('crypto');
const router = Router();

router.get("/signup", (req, res) => {
    res.render('signup');
});

router.get("/signin", (req, res) => {
    res.render('signin');
});

router.post("/signup", async (req, res) => {
    const { fullName, email, password } = req.body;
    console.log(fullName, email, password)
    const user = new USER({
        fullName: fullName,
        email: email,
        password: password
    });

    await user.save();
    console.log(user);
    res.status(201).redirect('/');
});

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    const user = await USER.matchPassword(email, password);
    console.log(user);
    res.status(200).redirect('/');
});

module.exports = router;