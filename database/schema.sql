DROP DATABASE IF EXISTS afterthought;

CREATE DATABASE afterthought;

USE afterthought;

CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL UNIQUE,
  nickname VARCHAR(20) NOT NULL,
  email VARCHAR(319) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE thoughts (
  id INTEGER NOT NULL AUTO_INCREMENT,
  message text NOT NULL,
  writer_id INTEGER NOT NULL,
  writer_name VARCHAR(20) NOT NULL,
  receiver_name VARCHAR(20) NOT NULL,
  receiver_email VARCHAR(319) NOT NULL,
  has_sent BOOLEAN DEFAULT 0,
  create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  modified_date DATETIME ON UPDATE CURRENT_TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (writer_id) REFERENCES users(id)
);

INSERT INTO USERS (username, nickname, email) VALUES ('clalexni', 'Alex Ni', 'cl.alexni@gmail.com');
INSERT INTO USERS (username, nickname, email) VALUES ('tester', 'Old Test Agent', 'tester@test.com');

INSERT INTO THOUGHTS (message, writer_id, writer_name, receiver_name, receiver_email) VALUES (
  'Hey! If I forgot to tell you... I really appreciate your help on the testing ...', 1, 'Alex', 'Active Test Agent', 'tester@test.com'
);

INSERT INTO THOUGHTS (message, writer_id, writer_name, receiver_name, receiver_email) VALUES (
  '謝謝妳得幫忙，祝你一切順利', 1, 'Alex', 'Morphie', 'morph@test.com'
);

INSERT INTO THOUGHTS (message, writer_id, writer_name, receiver_name, receiver_email, has_sent) VALUES (
  'Good bye my friend...dont go gentle into the dark night...', 2, 'Old Test Agent', 'Alex', 'cl.alexni@gmail.com', 1
);