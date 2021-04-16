const express = require('express')
const router = express.Router()

const {userById,read,update} = require('../controllers/user') 
const {requireSignin,isAdmin} = require('../controllers/auth')
const {auth} = require('../middleware/Utility')
//routes

router.get('/secret/:userId',auth,isAdmin,(req,res)=>{
  res.json({
    user:req.profile
  })
})

router.get('/user/:userId',auth,read)
router.put('/user/:userId',auth,update)


// router.param('userId',userById)






module.exports = router;