const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const posts = require('../model/posts');
const cors = require('cors');
router.use(cors());

router.get('/all', (req, res) => {
    res.json(JSON.stringify(posts.getAll()));

})

//criar um novo post
router.post('/new', bodyParser.json(), (req, res) => {
   
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);
    
    res.send("Post criado com sucesso!");
})

module.exports=router;