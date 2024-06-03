const { checkforAuthentication } = require('./middlewares/authentication');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user');
const blogRouter = require('./routes/blog');
const BLOG = require('./models/blog');
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
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", async (req , res) => {
    const allBlogs = await BLOG.find({}).sort({ createdBy: -1 });
    return res.status(200).render('home', { user : req.user, blogs : allBlogs });
});

app.use("/user", userRouter);
app.use("/blog", blogRouter);

app.listen(3000, () => console.log("Server Started !!"));  