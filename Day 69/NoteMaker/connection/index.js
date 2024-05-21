const mongooes = require('mongoose');

const ConnectDataBase = (url) => {
    mongooes
    .connect(url)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log('MongoDB Error: ', err));
};

module.exports = ConnectDataBase;