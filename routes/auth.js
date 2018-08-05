const router = require('express').Router()

const moduleName = '/auth'

const AuthModule = require('../models/Auth')
const Auth = new AuthModule()

router.get(moduleName, Auth.login)

module.exports = router