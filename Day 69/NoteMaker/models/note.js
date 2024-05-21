const mongooes = require('mongoose');

const noteSchema = new mongooes.Schema({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

const Note = mongooes.model('Note', noteSchema);

module.exports = Note;