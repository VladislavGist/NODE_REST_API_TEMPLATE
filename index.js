const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const session = require('express-session')

const config = require('./config')
const port = config.server.port

const logger = require('./middlewares/logger')
const errorHandler = require('./middlewares/errorHandler')
const user = require('./middlewares/user')

const routes = require('./routes/index')

app.use(logger)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: true
}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(user)
app.use(errorHandler)

app.use('/api', routes)

app.listen(port, () => {
	console.log(`Server started in port: ${ port }`)
})