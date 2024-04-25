const mysql = require('mysql2/promise')
const { DB_USER, DB_PORT, DB_NAME, DB_HOST, DB_PASSWORD } = require('./index');


const connection = mysql.createPool({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME
})

module.exports = connection