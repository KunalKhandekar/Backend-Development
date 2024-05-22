const URL = require('../models/url');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    if (!req.user) return res.redirect('/login');
    const Urls = await URL.find({ createdBy : req.user._id });
    res.status(200).render('home', { urls : Urls });
});

router.get('/signup', (req, res) => {
    res.status(200).render('signup');
});

router.get('/login', (req, res) => {
    res.status(200).render('login');
});

module.exports = router;