var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var bodyParser=require('body-parser');
const config = require('./config');
const mongoose=require('mongoose');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


mongoose.connect(config.db.url, { useNewUrlParser: true }).then(
    () => console.log('Database connected successfully'),
    (err) => { console.log(err); }
  );

var app = express();

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
