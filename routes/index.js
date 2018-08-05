const appRoutes = require('./app')
const filter = require('./filter')
const auth = require('./auth')
const user = require('./user')
const ad = require('./ad')
const moderate = require('./moderate')

module.exports = [
	appRoutes,
	filter,
	auth,
	user,
	ad,
	moderate
]