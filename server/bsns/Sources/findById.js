'use strict';
const _ = require('lodash'),
  findByField = require('./findByField');

exports = module.exports = (id, cb) => findByField(id, 'id', 'number', (err, matches) => err ? cb(err) : cb(null, _.first(matches)));
