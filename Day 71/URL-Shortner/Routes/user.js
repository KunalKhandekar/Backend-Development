const express = require('express');
const Router = express.Router();
const { handleSignUp, handleLogin } = require('../controller/user')

Router.post('/', handleSignUp);
Router.post('/login', handleLogin);

module.exports = Router;