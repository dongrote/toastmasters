'use strict';
const _ = require('lodash'),
  nextId = require('./nextId'),
  sources = require('./sources');

const defaultSource = {
  author: null,
  title: null,
  container: null,
  otherContributors: [],
  version: null,
  number: null,
  publisher: null,
  publishedOn: null,
  location: null,
};

exports = module.exports = (source, callback) => {
  const populatedSource = {};
  _.defaults(populatedSource, source, defaultSource);
  nextId((err, id) => {
    if (err) {
      return callback(err);
    }
    _.set(populatedSource, 'id', id);
    sources.push(populatedSource);
    callback(null, populatedSource);
  });
};
