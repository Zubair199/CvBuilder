const mongoose = require('mongoose')
const crypto = require('crypto')
const {v1 : uuidv1} = require('uuid')


const resumeSchema = new mongoose.Schema({
  username:{
    type:String,
    trim:true,
    required:true,
    maxlength:32
  },
  email:{
    type:String,
    trim:true,
    required:true,
    unique:true
  },
  title:{
    type:String,

  },
  address:{
    type:String,

  },
 description:{
    type:String,

  },
  phone:{
    type:String,
  },
  skills:{
    type:Array,
  },
  dateFromS:{
    type:String,
    default:"09/2021"
  },
  dateToS:{
    type:String,
    default:"09/2021"
  },
  dateFromU:{
    type:String,
    default:"09/2021"
  },
  dateToU:{
    type:String,
    default:"09/2021"
  },
  dateFromM:{
    type:String,
    default:"09/2021"
  },
  dateToM:{
    type:String,
    default:"09/2021"
  },
  dateFromH:{
    type:String,
    default:"09/2021"
  },
  dateToH:{
    type:String,
    default:"09/2021"
  },
  school:{
    type:String
  },
  highSchool:{
    type:String
  },
  university:{
    type:String
  },
  masters:{
    type:String
  },
  experienceTitle:{
    type:Array
  },
  experienceDescription:{
    type:Array
  },
  experienceStart:{
    type:Array,
    default:["09/2021"]
  },
  experienceEnd:{
    type:Array,
    default:["09/2021"]
  }

},{timestamps:true})



module.exports = mongoose.model("Resume",resumeSchema);