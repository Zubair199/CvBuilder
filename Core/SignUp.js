import React,{useState,useEffect} from 'react'
import { StyleSheet, View,TouchableOpacity } from 'react-native';
import { Input,theme,withGalio,GalioProvider, Block,Text,Icon,Button } from 'galio-framework';
import Toast from 'react-native-toast-message';
import {signUp} from '../Api/CoreApis'
const SignUp = ({navigation})=>{

  const [email,setEmail]= useState("")
  const [username,setUsername]= useState("")
  const [password,setPassword]= useState("")
  const [error,setError]= useState("")
  const [success,setSuccess]= useState("")

  const showToast = (text1,type,text2)=>{

    Toast.show({
      text1: text1,
      text2: text2,
      type: type
    })
  }

  useEffect(()=>{
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
   
  
  },[error])
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

  const handleSignUp = (event)=>{
  
     if(username ==="") {
      
      showToast("Error","error","Please Enter Username")
    }
    else if(email.trim() === "") {
     
      showToast("Error","error","Please Enter Email Address")
    } else if(password ==="") {
      
      showToast("Error","error","Please Enter Password")
    }
    else{
      
     signUp(email,password,username).then(res=>{setSuccess(`Successfully Created User ${res.data.user.username}!`);navigation.navigate('Form',{username:username,email:email})}).catch(err=>{console.log(err.response.data);setError(err.response.data.error); })
    }
    //

    
  }
  return(

    <View style={styles.container}>

      <View style={styles.header}><Icon name="addusergroup" family="AntDesign" size={55} style={{paddingRight:10}}/><Text h1 color="#fff"	>SignUp</Text></View>
      <View style={styles.footer}>
      <View style={styles.input}>
      <Icon name="profile" family="AntDesign" size={55} style={{paddingRight:10}}/>
      <Input  placeholder="Username" onChangeText={(username)=>{setUsername(username)}} placeholderTextColor={theme.COLORS.THEME} style={styles.textInput}/>
     
      </View>
      <View style={styles.input}>
      <Icon name="email" family="Entypo" size={55} style={{paddingRight:10}} />
      <Input  style={styles.textInput} placeholderTextColor={theme.COLORS.THEME} placeholder="Email" type="email-address" onChangeText={(email)=>{setEmail(email)}} />
      
      </View>
      <View style={styles.input}>
      <Icon name="fingerprint" family="Entypo" size={55} style={{paddingRight:10}} />
      <Input password  viewPass placeholder="Password" placeholderTextColor={theme.COLORS.THEME} onChangeText={(password)=>{setPassword(password)}} style={styles.textInput}/>
      </View>
      <View style={{justifyContent:'center',paddingLeft:30}}>
      <Block center>
      <Button onPress={(e)=>handleSignUp(e)} color='#50C7C7' round>
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