const express = require('express');
const router = express.Router();
const { handleCreateShortURL, handleRedirect, handleGetAnalytics } = require('../controller/url');

router.post('/', handleCreateShortURL);
router.get('/:ShortID', handleRedirect);
router.get('/analytics/:ShortID', handleGetAnalytics)

module.exports = router;