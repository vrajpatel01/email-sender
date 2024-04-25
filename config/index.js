require('dotenv').config()

module.exports = {
    APP_PORT,
    DB_USER,
    DB_PORT,
    DB_NAME,
    DB_HOST,
    DB_PASSWORD,
    SAULT_ROUND,
    JWT_SECRET,
    MAIL_HOST,
    MAIL_PORT,
} = process.env