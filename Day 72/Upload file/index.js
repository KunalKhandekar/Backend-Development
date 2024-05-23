const express = require('express');
const path = require('path');
const app = express();
const multer = require('multer');

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.urlencoded({ extended : false }));
  
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      return cb(null, Date.now() + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

app.get('/', (req, res) => {
    return res.status(200).render('HomePage.ejs')
});

app.post('/upload', upload.fields([{name: "profile_picture"}, {name : 'cover_image'}]), (req, res) => {
    console.log(req.body);
    console.log(req.file);

    return res.redirect('/');
});

app.listen(3000, () => console.log("Server Started at 3000 !!!"))

