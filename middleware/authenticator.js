const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')

const authenticator = async (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.json({
            message: 'authentication token is required'
        })
    }

    const jwtData = await jwt.verify(authorization.split(" ")[1], JWT_SECRET)
    req.userData = jwtData
    next()
}

module.exports = authenticator