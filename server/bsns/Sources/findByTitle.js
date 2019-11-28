'use strict';
const findByField = require('./findByField');

exports = module.exports = (title, cb) => findByField(title, 'title', 'string', cb);
