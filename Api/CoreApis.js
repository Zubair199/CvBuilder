import axios from 'axios'

  export const signIn=async (email,password)=>{ 
    const user= {
      email:email,
      password:password
    
    }
    const opt = {
      timeout: 4000,
    }
    const axiosIns = axios.create(opt)
    return await axiosIns.post('http://192.168.100.10:8088/api/signin',user)
  }
  export const signUp=async (email,password,username)=>{ 
   const user= {
     email:email,
     password:password,
     username:username
   }
   const opt = {
    timeout: 4000,
  }
  const axiosIns = axios.create(opt)
   return await axiosIns.post('http://192.168.100.10:8088/api/signup',user)
  }
  export const Resume=async (obj)=>{ 
  //  const user= {
  //    email:email,
  //    username:username
  //  }
   const opt = {
    timeout: 4000,
  }
  
  const axiosIns = axios.create(opt)
   return await axiosIns.post('http://192.168.100.8:8088/api/resume/create',obj)
  }

