import axios from 'axios'

  export const signIn= (email,password)=>{ 
    const user= {
      email:email,
      password:password
    
    }
    const opt = {
      timeout: 4000,
    }
    const axiosIns = axios.create(opt)
    return axiosIns.post('http://192.168.100.11:8088/api/signin',user)
  }
  export const signUp= (email,password,username)=>{ 
   const user= {
     email:email,
     password:password,
     username:username
   }
   const opt = {
    timeout: 4000,
  }
  const axiosIns = axios.create(opt)
   return axiosIns.post('http://192.168.100.11:8088/api/signup',user)
  }

