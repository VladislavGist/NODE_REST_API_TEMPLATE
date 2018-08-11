const User = require('./models/User')

const user = new User({
	name: 'Bill',
	pass: 'g45h453idk'
})

user.save(err => {
	if (err) console.log({ err })
	console.log(user.id, ' save')
})

User.getByName('Bill', (err, user) => {
	if (err) console.log({ err })
	console.log({ user })
})