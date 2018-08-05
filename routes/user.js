const router = require('express').Router()

const moduleName = '/user'

router.get(moduleName, (req, res) => {
	res.send('user')
})

module.exports = router