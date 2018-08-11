const router = require('express').Router()

const { Auth, authenticate, isAuth } = require('../models/Auth')

const moduleName = '/auth'

router.post(`${ moduleName }/login`, authenticate)
router.post(`${ moduleName }/register`, Auth.register)
router.get(`${ moduleName }/admin`, isAuth, Auth.admin)
router.get(`${ moduleName }/logout`, Auth.logout)

module.exports = router