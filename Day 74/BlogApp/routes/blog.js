const { Router } = require('express');
const BLOG = require('../models/blog');
const multer = require('multer');
const path = require('path');
const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve('./public/uploads')
      )
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  })
  
  const upload = multer({ storage: storage })

router.get("/addblog", (req, res) => {
    res.render('addBlog', { user : req.user});
});

router.post("/addblog", upload.single('coverImg'), async (req, res) => {
    const { title, body } = req.body;
    console.log(req.file)
    const blog = new BLOG({
        title : title,
        body : body,
        createdBy : req.user._id,
        coverImageURL : `/uploads/${req.file.filename}`
    });

    await blog.save();
    res.redirect(`/blog/${blog._id}`);
});

module.exports = router;