const register = require('./register.js')
const login = require('./login.js')

const authController = {
    register,
    login
}

module.exports = authController