const express = require('express');
const app = express();
const path = require('path');
const mongooes = require('mongoose');

mongooes
    .connect('mongodb://127.0.0.1:27017/note-maker')
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log('MongoDB Error: ', err));

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

const Note = mongooes.model('Note', noteSchema)

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    const notes = await Note.find().sort({ createdAt : -1 });
    return res.status(200).render('index.ejs', { notes: notes });
});

app.get('/show/:id', async (req, res) => {
    const note = await Note.findById(req.params.id);
    return res.status(200).render('show.ejs', { data: note.details, name: note.title });
});

app.get('/edit/:id', async (req, res) => {
    const note = await Note.findById(req.params.id);
    return res.status(200).render('edit.ejs', { name: note.title });
});

app.get('/delete/:id', async (req, res) => {
    const note = await Note.findByIdAndDelete(req.params.id);
    res.status(202).redirect('/')
});

app.post('/rename', async (req, res) => {
    if (!req.body.new) {
        return res.status(404).send('New Name Required');
    }

    await Note.findOneAndUpdate({ title : req.body.prev }, { title : req.body.new });
    return res.status(204).redirect('/');
});

app.post('/create', async (req, res) => {
    const data = req.body;
    console.log(data);

    if (!data.title || !data.details) {
        return res.status(400).send('Data Required');
    };

    try {
        const note = new Note({
            title: data.title,
            details: data.details
        });
        await note.save();
        res.status(201).redirect('/');
    } catch (err) {
        res.status(500).send('Server Error');
        console.log(err);
    };

});

app.listen(3000, () => console.log('Server Started at 3000 PORT'));