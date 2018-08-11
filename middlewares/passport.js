const passport = require('passport')
const localStrategy = require('passport-local').Strategy

passport.use(new localStrategy((username, password, done) => {
	if (username === 'admin' && password === 'admin') {
		return done(null, { username: 'admin' })
	} else {
		return done(null, false)
	}
}))

passport.serializeUser((user, done) => {
	done(null, user)
})

passport.deserializeUser((username, done) => {
	done(null, { username })
})

module.exports = passport