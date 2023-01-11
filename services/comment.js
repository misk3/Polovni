const express = require('express');
const { create, getCommentByUser } = require ('../controller/comment');
const { route } = require('../routes/user');
const router = express.Router();

route.post('/comment', create);

module.exports = router;