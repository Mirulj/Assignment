const Sequelize = require('sequelize');

const sequelize = new Sequelize('user-credentials', 'root', 'Qwerty287', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
