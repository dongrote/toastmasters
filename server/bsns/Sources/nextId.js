'use strict';
const currentId = 0;

exports = module.exports = cb => cb(null, ++currentId);
