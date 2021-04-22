const Resume = require('../models/Resume')
const {errorHandler} = require('../helpers/dbErrorHandler')
exports.create =(req,res)=>{
    
  const resume = new Resume(req.body)
  console.log(req.body)
  resume.save((err,resume1)=>{
      if(err){
          res.status(400).json({
              error:errorHandler(err)
          });
          
          
          
      }
      else{
         
          res.json({
              resume
          });
      }
      
     
  });
}
