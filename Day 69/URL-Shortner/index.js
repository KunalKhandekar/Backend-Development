const staticRoute = require('./Routes/staticRouter');
const ConnectingMongoDB = require('./connection');
const URLRoute = require('./Routes/url');
const URL = require('./models/url');
const express = require('express');
const path = require('path');
const app = express();

// Connecting DataBase.
ConnectingMongoDB('mongodb://127.0.0.1:27017/url-shortner');

// Setting View Engine.
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended : false }))

// Routes
app.use('/url', URLRoute);
app.use('/', staticRoute);

app.listen(3000, () => console.log('Server Started at 3000 PORT.'));