const mongoose = require('mongoose');

const ConnectingMongoDB = (url) => {
    mongoose
        .connect(url)
        .then(() => console.log('MongoDB Connected'))
        .catch((err) => console.log("Mongo Error: " + err));
};

module.exports = ConnectingMongoDB;