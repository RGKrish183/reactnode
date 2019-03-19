const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


mongoose.connect(config.db.url, { useNewUrlParser: true }).then(
  () => console.log('Database connected successfully'),
  (err) => { console.log(err); },
);

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
