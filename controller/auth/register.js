const bcrypt = require('bcrypt')
const Joi = require('joi')
const { SAULT_ROUND } = require('../../config')
const connection = require('../../config/database')

const register = async (req, res, next) => {

    const registerSchema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    })

    const registerValidator = registerSchema.validate(req.body)

    if (registerValidator.error) return next(registerValidator.error)

    const { email, password, name } = req.body

    try {
        const pas = await bcrypt.hash(password, Number(SAULT_ROUND))

        const data = {
            name, email, password: pas
        }

        const query = "INSERT INTO `user`(`name`, `email`, `password`) VALUES (?,?,?)"
        const values = [data.name, data.email, data.password]
        const [result, fields] = await connection.execute(query, values)

        if (result.affectedRows == 1) {
            return res.json({
                message: 'account is created',
                error: false
            })
        }

        res.json({
            message: 'having some problem to create account',
            error: true
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = register