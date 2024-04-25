const express = require('express')
const app = express()
const { APP_PORT } = require('../config')
const errorHandler = require('../middleware/errorHandler.js')
const router = require('../router')
const connect = require('../config/database.js')

connect();
app.use(express.json())
const PORT = APP_PORT || 3000

app.use('/api', router)

app.use(errorHandler)
app.listen(PORT, () => console.log(`server running on PORT:${PORT}`))