const express = require('express');
const dbconnection = require('../db');

const router = express.Router();
const { User } = require('../models/userschema');


/* GET users listing. */
router.get('/bloglist', (req, res, next) => {
  const query = 'Select * from wp_posts';
  dbconnection.query(query, (err, result) => {
    if (err) {
      res.send([]);
    }
    res.json(result);
  });
});


/* GET users listing. */
router.get('/mongo', (req, res, next) => {
  const user = new User({ name: 'Silence1' });

  user.save((err) => {
    res.send('value saved successfully');
    if (err) {
      console.log(err);
    }
    console.log('saved successfully');
  });
});


router.get('/mongoget', async (req, res, next) => {
  const value = await User.find({ name: 'Silence' });
  res.send(value);
});


module.exports = router;
