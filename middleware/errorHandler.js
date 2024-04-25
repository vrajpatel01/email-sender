const Joi = require('joi')

const errorHandler = (err, req, res, next) => {
    let status = 500;
    let data = {
        message: 'internal server error',
        originalMessage: err.message,
        error: true
    }

    if (err instanceof Joi.ValidationError) {
        status = 422
        data = {
            message: err.message,
            error: true
        }
    }

    if (err?.sqlState) {
        statusCode = 404
        data = {
            message: err.sqlMessage,
            error: true
        }
    }

    res.status(status).json(data)
}

module.exports = errorHandler