const express = require('express')
const router = express.Router()

const {create,read,deleteR} = require('../controllers/resume') 


//routes
router.post('/create',create);
router.get('/read/:user',read);
router.get('/delete/:user',deleteR);



module.exports = router;