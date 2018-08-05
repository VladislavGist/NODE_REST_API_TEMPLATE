const router = require('express').Router()

const moduleName = '/moderate'

router.get(moduleName, (req, res) => {
	res.send('moderate')
})

module.exports = router