const { encrypt } = require('../models/Utilities')

class User {
	hashPassword(cb) {
		encrypt(cb, this.pass)
	}
}

module.exports = User