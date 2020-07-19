const express = require('express');
const router = express.Router();
const Comment = require('../store/Comment');

router.post('/', function(req, res) {
    try{
        Comment.create(req.body);
    }
    catch(error){
        console.error(error)
    }
});

module.exports = router;
