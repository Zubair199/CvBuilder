const express = require('express')
const router = express.Router()

const {create} = require('../controllers/resume') 

const {userSignupValidator} = require('../validator/index')
const {auth} = require('../middleware/Utility')

//routes
router.post('/create',create);



module.exports = router;