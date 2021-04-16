const User = require('../models/User');

exports.userById = (req,res,next,id)=>{

  User.findById(id).exec((err,user)=>{
    if(err||!user){
      return res.status(400).json({
        error:'User not found'
      })
    }
    req.profile = user;
    next();
  })
}

exports.read= (req,res)=>{

  req.profile.hashed_password = undefined
  req.profile.salt = undefined
  return res.json(req.profile);

}

exports.update= (req,res)=>{
  User.findOneAndUpdate({_id:req.profile._id},{$set:req.body},{new:true,useFindAndModify:false},(err,user)=>{
    if(err){
      return res.status(400).json({
        error:"You are Not Authorized to perform this action"
      })

    }
    user.hashed_password=undefined
    user.salt=undefined
    req.session.userId = user._id
    res.json(user)
  })

}