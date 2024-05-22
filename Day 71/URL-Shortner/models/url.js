const mongoose = require('mongoose');

const URLSchema = new mongoose.Schema({
    shortID: {
        type: String,
        unique: true,
        required: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    visitStatus: [{
        timestamps: {
            type: String
        }
    }],
    createdBy : {
        type : mongoose.Types.ObjectId,
        ref : 'users'
    }

}, { timestamps: true });

const URL = mongoose.model('URL', URLSchema);

module.exports = URL;