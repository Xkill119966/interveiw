const Sequelize = require('sequelize');
const { sequelize } = require('../db')


const Chart = sequelize.define('chart', { name: Sequelize.STRING, age: Sequelize.INTEGER, gender: Sequelize.STRING });


module.exports = Chart;