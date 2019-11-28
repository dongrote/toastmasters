'use strict';
const fs = require('fs'),
  path = require('path'),
  modules = {};

fs.readdirSync(__dirname)
  .filter(fname => fname !== 'index.js')
  .map(fname => path.basename(fname, '.js'))
  .forEach(fname => {
    modules[fname] = require(`./${fname}`);
  });

exports = module.exports = modules;
