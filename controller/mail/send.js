const Joi = require('joi')
const nodemailer = require('nodemailer')
const { MAIL_HOST, MAIL_PORT } = require('../../config')
const template = require('../../config/emailTemplate.js')

const send = async (req, res, next) => {

    const emailSchema = Joi.object({
        fromName: Joi.string().required(),
        to: Joi.string().required(),
        from: Joi.string().email().required(),
        subject: Joi.string().required(),
        cc: Joi.string().empty(""),
        bcc: Joi.string().empty(""),
        body: Joi.string().required(),
        mailUser: Joi.string().email().required(),
        mailPassword: Joi.string().required()
    })

    const emailValidator = emailSchema.validate(req.body)

    if (emailValidator.error) {
        return next(emailValidator.error)
    }
    const { fromName, from, to, subject, cc, bcc, body, mailUser, mailPassword } = req.body

    try {
        const transporter = nodemailer.createTransport({
            host: MAIL_HOST,
            port: MAIL_PORT,
            secure: false,
            auth: {
                user: mailUser,
                pass: mailPassword
            }
        })

        const info = await transporter.sendMail({
            from: `${fromName} <${from}>`,
            to,
            cc,
            bcc,
            subject,
            html: template(fromName, body)
        })
        res.json({
            info
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = send