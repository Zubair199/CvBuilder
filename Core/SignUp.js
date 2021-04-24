import React,{useState,useEffect} from 'react'
import { StyleSheet, View,ActivityIndicator} from 'react-native';
import { Input,theme, Block,Text,Icon,Button } from 'galio-framework';
import Toast from 'react-native-toast-message';
import {signUp} from '../Api/CoreApis'
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignUp = ({navigation})=>{

  const [email,setEmail]= useState("")
  const [username,setUsername]= useState("")
  const [password,setPassword]= useState("")
  const [error,setError]= useState("")
  const [success,setSuccess]= useState("")
  const [loading,setLoading] = useState(false)
  const showToast = (text1,type,text2)=>{

    Toast.show({
      text1: text1,
      text2: text2,
      type: type
    })
  }

  useEffect(()=>{
      //////////////////////THIS CODE SHOULD BE COMMENTED WHILE TESTING DUE TO LIMITATIONS OF React Testing library for rendering //////////////
    const unsubscribe = navigation.addListener('focus',() => {
      try {
         AsyncStorage.getItem('user').then(user=>{
          console.log(user)
          if(user){
            navigation.navigate('Form')
          }
          else{ setLoading(false)}
          
        })
      } catch (e) {
        console.log(e)
        setLoading(false)
      }
    });
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    if(error===""){
      console.log()
    }
    else if(error!==""){
      Toast.show({
        text1:'Error',
        text2: error,
        type: 'error'
      })
    }
   ////////////////REMOVE THIS WITH EVENT LISTNER /////////////////
    return unsubscribe 
  
  
  },[error,navigation])
  useEffect(()=>{
    if(success===""){
      console.log()
    }
    else if(success!==""){
      Toast.show({
        text1:'Success',
        text2: success,
        type: 'success'
      })
    }
   
  
  },[success])
  const handleSignUpTest = (event)=>{
  
   if(username ==="") {
    
    return false
   
  }
  else if(email.trim() === "") {
   
    return false
  }   else if(email!==""){
    if(ValidateEmail(email)){
      if(password ===""){
        
        return false
      }
      else{
             return signUp(email,password,username)  
      }
    }
  
     else{
      Toast.show({
        text1:'Error',
        text2: "Please Enter A Valid Email",
        type: 'error'
      })
     }
  }
 
  //

  
}
  const handleSignUp = (event)=>{
      setLoading(true)
     if(username ==="") {
      
      showToast("Error","error","Please Enter Username")
      setLoading(false)
    }
    else if(email.trim() === "") {
      setLoading(false)
      showToast("Error","error","Please Enter Email Address")
    }   else if(email!==""){
      if(ValidateEmail(email)){
        if(password ===""){
          setLoading(false)
          showToast("Error","error","Please Enter Password")
        }
        else{
          
          signUp(email,password,username).then(async res=>{setSuccess(`Successfully Created User ${res.data.user.username}!`); try {
            await AsyncStorage.setItem('user', JSON.stringify(res.data.user))
          } catch (e) {
            console.log(e);setLoading(true)
          };navigation.navigate('Form',{username:username,email:email})}).catch(err=>{if(err.response==undefined){ Toast.show({
            text1:'Error',
            text2: "Make Sure you are Connected to the Server",
            type: 'error'
          })}else{setError(err.response.data.error);setLoading(false);} })
        
          
        }
      }
    
       else{
        setLoading(false)
        Toast.show({
          text1:'Error',
          text2: "Please Enter A Valid Email",
          type: 'error'
        })
       }
    }
   
    //

    
  }
  function ValidateEmail(mail) 
{
 if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail))
  {
    return (true)
  }
  
    return (false)
}
  return(

    <View style={styles.container}>

      <View style={styles.header}><Icon name="addusergroup" family="AntDesign" size={55} style={{paddingRight:10}}/><Text h1 color="#fff"	>SignUp</Text></View>
      <View style={styles.footer}>
      <View style={styles.input}>
      <Icon name="profile" family="AntDesign" size={55} style={{paddingRight:10}}/>
      <Input testID="usernameId" rounded icon="email" family="Entypo" placeholder="Username" onChangeText={(username)=>{setUsername(username)}} placeholderTextColor={theme.COLORS.THEME} style={styles.textInput}/>
     
      </View>
      <View style={styles.input}>
      <Icon name="email" family="Entypo" size={55} style={{paddingRight:10}} />
      <Input testID="emailId" rounded icon="profile" family="AntDesign" style={styles.textInput} placeholderTextColor={theme.COLORS.THEME} placeholder="Email" type="email-address" onChangeText={(email)=>{setEmail(email)}} />
      
      </View>
      <View style={styles.input}>
      <Icon name="fingerprint" family="Entypo" size={55} style={{paddingRight:10}} />
      <Input testID="passwordId" password rounded icon="lock" family="Entypo" viewPass placeholder="Password" placeholderTextColor={theme.COLORS.THEME} onChangeText={(password)=>{setPassword(password)}} style={styles.textInput}/>
      </View>
      <View style={{justifyContent:'center',paddingLeft:30}}>
      <Block center>
      {loading&&<ActivityIndicator size="large" color="#00ff00" />}
      <Button  onPress={(e)=>handleSignUp(e)} color='#50C7C7' round>
        SignUp
      </Button>
      
      </Block>
      <Block right>
      <Text style={{color: 'blue'}} onPress={()=>navigation.navigate('SignIn')}>
       Already Have An Account?
      </Text>
      </Block>
      
      
      </View>
     
      </View>
      <Button style={{display:'none'}} testID="buttonId" title="Testing" onPress={(e)=>handleSignUpTest(e)}>asd</Button>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
    
    
  },
  header:{
    flex:0.7,
    justifyContent: 'flex-end',
    paddingTop:30,
    paddingHorizontal:20,
    paddingBottom:30,
    alignItems:'center'

  },
  footer:{
    flex:3,
    backgroundColor: '#fff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:30,
    paddingHorizontal:20,

  },
  input:{
    flexDirection:'row',
    marginTop:10,
    
  },
  textInput:{
    flex:1,
    paddingHorizontal:30,
    borderColor: theme.COLORS.THEME,paddingRight:10,
    width:250

  },
  // button: {
  //   alignItems: "center",
  //   backgroundColor: "#fff",
  //   paddingTop :10,
  //   justifyContent:'center',
    

  // },

});
export default SignUp 