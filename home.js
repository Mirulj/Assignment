const express = require('express');

const sequelize = require('./util/database');

const bcrypt = require('bcryptjs');

const userRoutes = require('./routes/user');
const User = require('./models/user');

const home = express();

home.use(express.json());

home.use(userRoutes);

home.use((req, res, next) => {
  User.findbyId('')
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

sequelize
  .sync()
  .then((result) => {
    //console.log(result);
    home.listen(2020);
  })
  .catch((err) => {
    console.log(err);
  });
