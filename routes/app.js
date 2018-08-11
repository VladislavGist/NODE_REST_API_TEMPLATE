const router = require('express').Router()

const moduleName = '/app'

router.get(`${ moduleName }`, (req, res) => {
	if (!req.session.passport) {
		res.send('please loggining')
	} else {
		res.send('you is loggined')
	}
})

module.exports = router