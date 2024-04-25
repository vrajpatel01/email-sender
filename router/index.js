const router = require('express').Router()

const { mailController, authController } = require('../controller')

router.post('/login', authController.login)
router.post('/signup', authController.register)
router.post('/mail', mailController.send)

module.exports = router