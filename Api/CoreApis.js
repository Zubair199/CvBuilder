import axios from 'react-native-axios'

  export const signIn= (email,password)=>{ 
    const user= {
      email:email,
      password:password
    
    }
   return axios.post('http://192.168.100.11:8088/api/signin',user)
  }
  export const signUp= (email,password,username)=>{ 
   const user= {
     email:email,
     password:password,
     username:username
   }
   return axios.post('http://192.168.100.11:8088/api/signup',user)
  }

