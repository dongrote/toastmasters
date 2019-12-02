'use strict';
const express = require('express'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  api = require('./api'),
  logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', api);

exports = module.exports = app;
