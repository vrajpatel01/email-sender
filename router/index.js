const router = require('express').Router()

const { mailController } = require('../controller')

router.post('/mail', mailController.send)
router.get('/', (req, res, next) => res.json({ message: 'everything is running good.', status: 'running', error: false }))

module.exports = router