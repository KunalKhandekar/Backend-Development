const URL = require('../models/url');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const Urls = await URL.find().sort({ createdAt: -1 });
    res.status(200).render('home', { urls : Urls });
});

module.exports = router;