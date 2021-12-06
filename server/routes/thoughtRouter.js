const thoughtRouter = require('express').Router();
const models = require('../../database/queries');

/*
{
  "message": "testA",
  "writer_id": 1,
  "writer_name": "alex",
  "receiver_name": "test",
  "receiver_email": "test@test.com"
}
*/
thoughtRouter.route('/')
.post((req, res, next) => {
  console.log(req.body);
  // (message, writer_id, writer_name, receiver_name, receiver_email)
  let message = req.body.message;
  let writer_id = req.body.writer_id;
  let writer_name = req.body.writer_name;
  let receiver_name = req.body.receiver_name;
  let receiver_email = req.body.receiver_email;
  models.postThought([message, writer_id, writer_name, receiver_name, receiver_email],
    (err, result) => {
      if (err) {
        res.status(400).send();
      } else {
        console.log('posted', result);
        res.status(201).send();
      }
    }
  )
});

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

// update all modeifed date where has_sent is 0
thoughtRouter.route('/:username/timer')
.patch((req, res, next) => {
  models.updateAllThoughtsTimer([params.params.username], (err, result) => {
    if (err) {
      res.status(500).send();
    } else {
      console.log('updated', result);
      res.status(200).send();
    }
  });

});

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
