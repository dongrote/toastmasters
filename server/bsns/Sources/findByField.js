'use strict';
const _ = require('lodash'),
  assert = require('assert'),
  sources = require('./sources');

exports = module.exports = (value, fieldName, fieldType, callback) => {
  try {
    const matches = _.filter(sources, s => {
      assert(_.has(s, fieldName), `missing field ${fieldName}`);
      if (fieldType === 'string') {
        return value instanceof RegExp
          ? value.test(s[fieldName])
          : s[fieldName] === value;
      }
      return s[fieldName] === value;
    });
    callback(null, matches);
  } catch (err) {
    callback(err);
  }
};
