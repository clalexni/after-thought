const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const models = require('../database/queries');

const PORT = 3000;

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname  + '/../dist'));

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server running at http://localhost:${PORT}`);
  }
});