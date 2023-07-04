const { Sequelize } = require("sequelize")
require('dotenv').config()

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD,{
    host: DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    }
})

module.exports = db;