const router = require('express').Router()

const moduleName = '/ad'

router.get(moduleName, (req, res) => {
	res.send('ad')
})

module.exports = router