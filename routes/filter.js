const router = require('express').Router()

const moduleName = '/filter'

router.get(moduleName, (req, res) => {
	res.send('filter')
})

module.exports = router