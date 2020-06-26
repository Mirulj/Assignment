const bcrypt = require('bcryptjs');

const User = require('../models/user');

exports.register = (req, res, next) => {
  const username = req.body.anything;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;
  console.log(req.body);
  bcrypt
    .hash(password, 12)
    .then((hashPassword) => {
      return User.create({
        username: username,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hashPassword,
      });
    })
    .then((User) => {
      res.send(User);
    })
    .catch((err) => console.log(err));
};

exports.getLogin = (req, res, next) => {};

exports.postLogin = (req, res, next) => {
  req.isLoggedin;
};
