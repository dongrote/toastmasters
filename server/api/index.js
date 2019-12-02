'use strict';
const fs = require('fs'),
  router = require('express').Router();

const readJsonFile = (filepath, cb) => {
  const chunks = [];
  fs.createReadStream(filepath)
    .on('error', cb)
    .on('data', chunk => {
      chunks.push(chunk);
    })
    .on('end', () => {
      try {
        const json = JSON.parse(Buffer.concat(chunks));
        cb(null, json);
      }
      catch (err) {
        cb(err);
      }
    });
};

router.get('/sources', (req, res, next) => {
  readJsonFile(process.env.SOURCES_JSON, (err, data) => err ? next(err) : res.json(data));
});

router.get('/author', (req, res, next) => {
  readJsonFile(process.env.AUTHOR_JSON, (err, data) => err ? next(err) : res.json(data));
});

exports = module.exports = router;
