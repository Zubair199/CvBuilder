const User = require('../models/User')

exports.auth = (req,res,next)=>{
  const {userId} = req.session
  
  if(userId){
    const user = User.findById(userId).exec((err,data)=>{
      
      if(!data)
      {
        return res.status(401).json({
          error:'session of user not present'
      })
      }

      data.salt=undefined
      data.hashed_password = undefined
      
      req.profile = data
      console.log("in Auth middleware  Obj id = "+req.profile)
      next();
      
    })

    }
    else{
      return res.status(401).json({
        error:'PLEASE SIGN IN'
    })
    }

   
  }
 
