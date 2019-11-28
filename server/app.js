'use strict';
const express = require('express'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  router = require('./routes'),
  logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

exports = module.exports = app;
