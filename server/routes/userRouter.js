const userRouter = require('express').Router();
const models = require('../../database/queries');

userRouter.route('/:username')
.get((req, res, next) => {
  models.getUserInfo([req.params.username], (err, userInfo) => {
    console.log('username param:',req.params.username);
    if (err) {
      console.error(err);
      res.status(500).send();
    } else {
      res.status(200).send(userInfo);
    }
  });
})

module.exports = userRouter;