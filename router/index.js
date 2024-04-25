const router = require('express').Router()

const { mailController, authController } = require('../controller')
const authenticator = require('../middleware/authenticator.js')


router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)
router.post('/mail', [authenticator], mailController.send)
router.get('/', (req, res, next) => res.json({ message: 'everything is running good.', status: 'running', error: false }))

module.exports = router