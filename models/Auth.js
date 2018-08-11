const passport = require('passport')

const authenticate = passport.authenticate('local', {
	failureRedirect: '/api/app',
	successRedirect: '/api/auth/admin'
})

const isAuth = (req, res, next) => {
	req.isAuthenticated() ? next() : res.redirect('/api/app')
}

class Auth {
	static register(req, res, next) {
		res.send('register')
	}

	static admin(req, res, next) {
		res.send('admin page')
	}

	static logout(req, res) {
		req.logout()
		res.send('logout')
	}
}

module.exports = {
	Auth,
	authenticate,
	isAuth
}