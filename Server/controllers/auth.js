const User = require('../models/User')
const {errorHandler} = require('../helpers/dbErrorHandler')

 
exports.signup =(req,res)=>{
    
    const user = new User(req.body)
    
    user.save((err,user)=>{
        if(err){
           
            res.status(400).json({
                error:errorHandler(err)
            });
            
            
            
        }
        else{
            user.salt=undefined
            user.hashed_password = undefined
            res.json({
                user
            });
        }
        
       
    });
}


exports.signin = (req,res)=>{
    // find the user based on email
    const {email,password}=req.body;
    console.log(req.body)
    User.findOne({email},(err,user)=>{
        if(err||!user){
            return res.status(400).json({
                error:'User with that email not not exist.Please Signup'
            });
        }
        // if user is found make sure the email and password matches
        // create authenticate method in user model
        if(!user.authenticate(password)){
            return res.status(401).json({
                error:'Email And Password Dont Match'
            })
        }
       
        const {_id,name,email}= user
       
        return res.json({user:{_id,email,name}});



    })
}

exports.signout= (req,res)=>{

    console.log(req.sessionID)
    req.session.destroy()
    res.clearCookie('sid', {path: '/'}).status(200).json({message:'Signout Successfully'});
    
   
}

exports.requireSignin =(req,res,next)=>{
    
    const {userId} = req.session
    console.log("in require sign in  Obj id = "+userId)
    if(!userId){
        return res.status(401).json({
            error:'Please Sign in First '
        })

    }
    next()
} 
   


// exports.requireSignin = expressJwt({
//     secret:process.env.JWT_SECRET,
//     userProperty:"auth",
//     algorithms: ['HS256']

// })
    
exports.isAuth= (req,res,next)=>{
    
    
    let user = req.profile && req.auth && req.profile._id == req.auth._id
    if(!user){
        return res.status(403).json({
            error:"Access denied"
        })
    }
    next();
}

  
exports.isAdmin = (req,res,next)=>{
     const {_id,role} = req.profile
  
     console.log("in isAdmin role= "+role)
     if(role ===0){
         return res.status(403).json({
             error:"Admin resource! Access denied"
         });
     }
     next();
  }
