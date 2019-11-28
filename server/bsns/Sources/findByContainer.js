'use strict';
const findByField = require('./findByField');

exports = module.exports = (container, cb) => findByField(container, 'container', 'string', cb);
