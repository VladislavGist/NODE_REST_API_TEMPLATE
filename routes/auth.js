const router = require('express').Router()

const moduleName = '/auth'

const Auth = require('../models/Auth')

router.post(`${ moduleName }/login`, Auth.login)
router.post(`${ moduleName }/register`, Auth.register)
router.get(`${ moduleName }/logout`, Auth.logout)

module.exports = router