const router = require('express').Router()

const moduleName = '/app'

router.get(moduleName, (req, res) => {
	res.send('ok')
})

module.exports = router