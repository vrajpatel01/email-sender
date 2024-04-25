const Joi = require('joi')
const userSchema = require('../../models/user.js')
const bcrypt = require('bcrypt')
const { SAULT_ROUND } = require('../../config')

const register = async (req, res, next) => {

    const schema = Joi.object({
        username: Joi.string().min(3).max(50).required(),
        email: Joi.string().email().required(),
        role: Joi.string().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    })

    const validator = schema.validate(req.body)

    if (validator.error) return next(validator.error)

    const { username, email, password, role } = req.body
    try {
        const pas = await bcrypt.hash(password, Number(SAULT_ROUND))
        const user = new userSchema({
            username, email, role, password: pas
        })

        const response = await user.save();
        res.json({
            message: 'user created successfully',
            data: {
                username: response.username,
                email: response.email,
            }
        })
    } catch (error) {
        next(error)
    }
}

module.exports = register