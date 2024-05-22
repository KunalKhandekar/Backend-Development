const URL = require('../models/url');
const shortid = require('shortid');

const handleCreateShortURL = async (req, res) => {
    if (!req.body.redirectURL) {
        return res.status(404).send({ error: 'URL Required' })
    };

    try {
        const url = new URL({
            shortID: shortid.generate(),
            redirectURL: req.body.redirectURL,
            visitStatus: [],
            createdBy: req.user._id
        });

        await url.save();
        res.status(201).redirect('/');
    } catch (error) {
        res.status(404).send({ error: 'Something went wrong !!!' });
        console.log(error)
    };
};

const handleRedirect = async (req, res) => {
    const shortID = req.params.ShortID;

    const entry = await URL.findOneAndUpdate({
        shortID : shortID
    }, { $push : {
        visitStatus : {
            timestamps : new Date().toString().slice(0, 24)
        }
    }});

    res.redirect(entry.redirectURL);
};

const handleGetAnalytics = async (req, res) => {
    const shortID = req.params.ShortID;
    const url = await URL.findOne({shortID : shortID});
    res.status(200).send({
        totalClicks : url.visitStatus.length,
        analytics : url.visitStatus
    });
}


module.exports = {
    handleCreateShortURL,
    handleRedirect,
    handleGetAnalytics
}