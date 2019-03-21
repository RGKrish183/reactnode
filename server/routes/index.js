const express = require('express');
const blog = require('./blog');


const router = express.Router();


router.use('/', blog);


module.exports = router;
