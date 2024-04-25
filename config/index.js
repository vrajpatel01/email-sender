require('dotenv').config()

module.exports = {
    APP_PORT,
    MAIL_HOST,
    MAIL_PORT,
    DATABASE_URL,
    SAULT_ROUND,
    JWT_SECRET
} = process.env