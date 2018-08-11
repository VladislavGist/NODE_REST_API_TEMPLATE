const bcrypt = require('bcrypt')

const generateId = () => {
	return Math.random()
}

const encrypt = (cb, pass) =>
	bcrypt.genSalt(12, (err, salt) => {
		if (err) return cb(err)
		bcrypt.hash(pass, salt)
			.then(hash => {
				cb(null, hash, salt)
			})
			.catch(err => {
				cb(err)
			})
	})

module.exports = {
	generateId,
	encrypt,
	compressionImage
}