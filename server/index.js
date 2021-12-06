const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const fs = require('fs');

const userRouter = require('./routes/userRouter');
const thoughtRouter = require('./routes/thoughtRouter');

const PORT = 3000;

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname  + '/../dist'));

app.use('/users', userRouter);
app.use('/thoughts', thoughtRouter);

app.use((req, res) => {
  fs.readFile('../dist/index.html', (err, data) => {
    if (err) {
      console.log('Error in reading html', err);
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server running at http://localhost:${PORT}`);
  }
});