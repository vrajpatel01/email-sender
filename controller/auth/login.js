const Joi = require('joi')
const userSchema = require('../../models/user.js')
const { JWT_SECRET } = require('../../config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })

    const validator = schema.validate(req.body)
    if (validator.error) return next(validator.error)

    const { email, password } = req.body

    const findResult = await userSchema.findOne({
        email
    })

    const passwordCompare = await bcrypt.compare(password, findResult.password)
    if (!passwordCompare) {
        return res.json({
            message: 'username and password is incorrect',
            error: true
        })
    }

    const tokenData = {
        id: findResult._id,
        email: findResult.email,
        username: findResult.username,
        role: findResult.role
    }

    const token = jwt.sign(tokenData, JWT_SECRET)

    res.json({
        token,
        error: false
    })
}

module.exports = login