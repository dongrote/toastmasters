'use strict';
const findByField = require('./findByField');

exports = module.exports = (author, cb) => findByField(author, 'author', 'string', cb);
