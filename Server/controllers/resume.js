const Resume = require('../models/Resume')
const {errorHandler} = require('../helpers/dbErrorHandler')
exports.create =async (req,res)=>{
  
  const resume2 = await Resume.findOne({email:req.body.email})
    if(resume2){
        try{
        const resume3 = await Resume.updateOne(req.body._id,req.body)
        console.log(resume3)
        }
        catch(e){
            console.log(e)
        }

    }
    else{
        const resume = new Resume(req.body)
        await resume.save((err,resume1)=>{
            if(err){
                console.log(err)
                res.status(400).json({
                    error:errorHandler(err)
                });     
            }
            else{
               
                res.json({
                    resume1
                });
            }
            
           
        });
    }
 
  
 
  
}
