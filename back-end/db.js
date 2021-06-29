const { Sequelize, Op } = require('sequelize');
const dbConfig = require('./db.config')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
});

module.exports = {
    sequelize,
    Op
};