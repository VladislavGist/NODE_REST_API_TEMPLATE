const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const config = require('./config')

const logger = require('./middlewares/logger')
const errorHandler = require('./middlewares/errorHandler')

app.use(logger)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(errorHandler)

app.get('/', (req, res) => {
	res.send('Yes')
})

const port = config.server.port

app.listen(port, () => {
	console.log(`Server started in port: ${ port }`)
})