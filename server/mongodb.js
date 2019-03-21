
const mongoose = require('mongoose');
const config =require('../config');


mongoose.connect(config.db.url, { useNewUrlParser: true }).then(
  () => console.log('Mongodb Database connected successfully'),
  (err) => { console.log(err); },
);
