const express = require('express');
const app = express();
const path = require('path');
const ConnectDataBase = require('./connection/index');
const { handleGetNotes, handleShowNoteDataByID, handleRenameByID, handleDeleteByID, NoteRenamerWithData, handleToCreateNote } = require('./controllers/note')

// Connecting DataBase.
ConnectDataBase('mongodb://127.0.0.1:27017/note-maker');

// MiddleWares
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', handleGetNotes);
app.get('/show/:id', handleShowNoteDataByID);
app.get('/edit/:id', handleRenameByID);
app.get('/delete/:id', handleDeleteByID);
app.post('/rename', NoteRenamerWithData);
app.post('/create', handleToCreateNote);

app.listen(3000, () => console.log('Server Started at 3000 PORT'));