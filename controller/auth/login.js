const Joi = require("joi")
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')

const connection = require('../../config/database')
const { JWT_SECRET } = require('../../config')

const login = async (req, res, next) => {

    const credentialScheme = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })

    const credentialValidator = credentialScheme.validate(req.body)

    if (credentialValidator.error) {
        return next(credentialValidator.error)
    }

    const { email, password } = req.body

    try {
        const query = "SELECT `id`, `name`, `email`, `password`, `created_at`, `updated_at` FROM `user` WHERE `email` = ?"
        const values = [email]
        const [result, fields] = await connection.execute(query, values)
        if (result.length == 0) {
            return res.json({
                message: 'user is not found',
                error: true
            })
        }
        const passwordCompare = await bcrypt.compare(password, result[0].password)
        if (!passwordCompare) {
            return res.json({
                message: 'username and password is incorrect',
                error: true
            })
        }

        const tokenData = {
            id: result[0].id,
            email: result[0].email,
            name: result[0].name
        }

        const token = jsonwebtoken.sign(tokenData, JWT_SECRET)

        return res.json({
            token,
            error: false
        })

    } catch (error) {
        return next(error)
    }
}

module.exports = login