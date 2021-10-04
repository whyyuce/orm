const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('araba', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
