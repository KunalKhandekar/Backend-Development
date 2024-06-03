const { Router } = require('express');
const USER = require('../models/user');
const router = Router();

router.get("/signup", (req, res) => {
    res.render('signup');
});

router.get("/signin", (req, res) => {
    res.render('signin');
});

router.get("/logout", (req, res) => {
    res.clearCookie("token").redirect('/');
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
    res.status(201).redirect('/user/signin');
});

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await USER.matchPasswordAndGeneratrToken(email, password);
        res.cookie('token', token).redirect('/');
    } catch (error) {
        res.render('signin', {error})
    }
});

module.exports = router;