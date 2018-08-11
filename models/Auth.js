const User = require('./User')

class Auth {
	static login(req, res, next) {
		const { name, pass } = req.body

		User.authenticate(name, pass, (err, user) => {
			if (err) return next(err)

			if (user) {
				req.session.uid = user.id
				res.status(200).send(user)
			} else {
				res.status(500).send('Sorry! Invalid credantials.')
			}
		})
	}

	static register(req, res, next) {
		const { name, pass } = req.body

		User.getByName(name, (err, user) => {
			if (err) return next(err)

			if (user.id) {
				res.send('Username already taken')
			} else {
				let user = new User({
					name: name,
					pass: pass
				})

				user.save(err => {
					if (err) return next(err)
					req.session.uid = user.id
					res.send(`user: ${ name } register compleated`)
				})
			}
		})
	}

	static logout(req, res) {
		req.session.destroy(err => {
			if (err) throw err
			res.status(200).send('exit')
		})
	}
}

module.exports = Auth