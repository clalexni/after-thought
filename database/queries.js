const db = require('./config');

// when signin with username => query email and user id
const getUserInfo = (params, callback) => {
  var queryString = 'select * from users where users.username = ? limit 1';
  db.query(queryString, params, (err, userInfo) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, userInfo);
    }
  });
}

// use user email and has_sent to query thought received
const getThoughtsReceived = (params, callback) => {
  var queryString = `select * from thoughts
                      where receiver_email = (
                      select email from users where username = ?
                      ) and has_sent = 1`;
  db.query(queryString, params, (err, thoughtsReceived) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, thoughtsReceived);
    }
  });
}

// use user id to query user's thoughts
const getThoughts = (params, callback) => {
  var queryString = `select * from thoughts
                      where writer = (
                        select id from users where username = ?
                      )`;
  db.query(queryString, params, (err, userThoughts) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, userThoughts);
    }
  });
}
// update modifed date of thought by id
const updateThoughtDate = (params, callback) => {
  var queryString = 'update thoughts set modified_date = CURRENT_TIMESTAMP where id = ?';
  db.query(queryString, params, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}

// update sent status of a thought
// should also update modified date as well
const updateThoughtAsSent = (params, callback) => {
  var queryString = 'update thoughts set has_sent = 1 where id = ?';
  db.query(queryString, params, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}

module.exports = {
  getUserInfo,
  getThoughtsReceived,
  getThoughts,
  updateThoughtDate,
  updateThoughtAsSent
};