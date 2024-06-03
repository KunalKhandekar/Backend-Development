const userRouter = require('./routes/user');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

mongoose.connect('mongodb://127.0.0.1:27017/blogs');

const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded( { extended : false }))

app.get("/", (req , res) => {
    return res.status(200).render('home');
});

app.use("/user", userRouter);

app.listen(8000, () => console.log("Server Started !!"));  