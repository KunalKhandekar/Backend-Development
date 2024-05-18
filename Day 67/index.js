const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('Currently at MiddleWare 1');
    req.name = 'Kunal';
    next();
});

app.use((req, res, next) => {
    console.log('Currently at MiddleWare 2');
    req.last_name = 'Khandekar';
    next();
});

app.get('/', (req, res) => {
    return res.end('You are at Home Page ' + req.name + ' ' + req.last_name);
});

app.listen(8000, () => console.log(`http://localhost:8000/`));