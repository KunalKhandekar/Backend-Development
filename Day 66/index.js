const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.send(`Hello, ${req.query.name}.\nYou're at Home Page.`)
});

app.get('/about', (req, res) => {
    return res.send(`Hello, ${req.query.name}.\nYou're at About Page.`)
});

app.listen(3000, () => console.log('Server Started !!'));