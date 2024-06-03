const { checkforAuthentication } = require('./middlewares/authentication');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user');
const blogRouter = require('./routes/blog');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

mongoose.connect('mongodb://127.0.0.1:27017/blogs');

const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded( { extended : false }))
app.use(cookieParser());
app.use(checkforAuthentication("token"));

app.get("/", (req , res) => {
    return res.status(200).render('home', { user : req.user });
});

app.use("/user", userRouter);
app.use("/blog", blogRouter);

app.listen(8000, () => console.log("Server Started !!"));  