const { Router } = require('express');
const BLOG = require('../models/blog');
const COMMENT = require('../models/comments');
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

router.post("/comment/:blogID", async (req, res) => {
  const comment = new COMMENT({
    content : req.body.content,
    blogId : req.params.blogID,
    createdBy : req.user._id
  });
  await comment.save();
  res.redirect(`/blog/show/${req.params.blogID}`);
});

router.get("/show/:id", async (req, res) => {
  const blog = await BLOG.findById(req.params.id).populate('createdBy');
  const comment = await COMMENT.find({ blogId : req.params.id }).populate('createdBy').sort({ createdAt : -1});
  res.render('blog', {
    blog : blog,
    user : req.user,
    comment : comment
  });
})

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
    res.redirect(`/blog/show/${blog._id}`);
});

module.exports = router;