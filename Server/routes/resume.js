const express = require('express')
const router = express.Router()

const {create} = require('../controllers/resume') 


//routes
router.post('/create',create);



module.exports = router;