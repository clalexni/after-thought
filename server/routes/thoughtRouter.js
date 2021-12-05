const thoughtRouter = require('express').Router();
const models = require('../../database/queries');

thoughtRouter.route('/:username/received')
.get((req, res, next) => {
  models.getThoughtsReceived([req.params.username], (err, thoughts) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send(thoughts);
    }
  });
})

thoughtRouter.route('/:username')
.get((req, res, next) => {
  models.getThoughts([req.params.username], (err, thoughts) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send(thoughts);
    }
  })
})

thoughtRouter.route('/:thoughtId/timer')
.patch((req, res) => {
  models.updateThoughtDate([req.params.thoughtId], (err, result) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send();
    }
  })
})

thoughtRouter.route('/:thoughtId/hasSent')
.patch((req, res) => {
  models.updateThoughtAsSent([req.params.thoughtId], (err, result) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send();
    }
  })
})

module.exports = thoughtRouter;
