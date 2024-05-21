const Note = require('../models/note');

const handleGetNotes = async (req, res) => {
    const notes = await Note.find().sort({ createdAt: -1 });
    return res.status(200).render('index.ejs', { notes: notes })
};

const handleShowNoteDataByID = async (req, res) => {
    const note = await Note.findById(req.params.id);
    return res.status(200).render('show.ejs', { data: note.details, name: note.title });
};

const handleRenameByID = async (req, res) => {
    const note = await Note.findById(req.params.id);
    return res.status(200).render('edit.ejs', { name: note.title });
};

const handleDeleteByID = async (req, res) => {
    const note = await Note.findByIdAndDelete(req.params.id);
    res.status(202).redirect('/')
};

const NoteRenamerWithData = async (req, res) => {
    if (!req.body.new) {
        return res.status(404).send('New Name Required');
    }

    await Note.findOneAndUpdate({ title: req.body.prev }, { title: req.body.new });
    return res.status(204).redirect('/');
};

const handleToCreateNote = async (req, res) => {
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

};


module.exports = {
    handleGetNotes,
    handleShowNoteDataByID,
    handleRenameByID,
    handleDeleteByID,
    NoteRenamerWithData,
    handleToCreateNote
};