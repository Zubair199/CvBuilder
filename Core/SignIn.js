import React,{useState,useEffect} from 'react'
import { StyleSheet, View } from 'react-native';
import { Input,theme, Block,Text,Icon,Button  } from 'galio-framework';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {signIn} from '../Api/CoreApis'
const SignIn = ({navigation})=>{

  try {
    AsyncStorage.getItem('user').then(user=>{
      if(user){
        navigation.navigate('Form')
      }
      
    })
  } catch (e) {
    console.log(e)
  }

  const [email,setEmail]= useState("")
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
    if(error===""&&success===""){
      
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
  const handleSignIn =  (event)=>{
    if (email.trim() === "") {
     
      showToast("Error","error","Please Enter Email Address")
    } else if(password ==="") {
      
      showToast("Error","error","Please Enter Password")
    }
    else{
     signIn(email,password)
     .then(async(res)=>{
      try {
        await AsyncStorage.setItem('user', JSON.stringify(res.data.user))
      } catch (e) {
        console.log(e)
      }
       setSuccess(`Successfully Logged In With ${res.data.user.username}!`);navigation.navigate('Form')})
     .catch(err=>{setError(err.response.data.error)})
    }
  }
  return(
    
    <View style={styles.container}>
      
      <View style={styles.header}>
     
      
      
      <Icon name="login" family="AntDesign" size={55} style={{paddingRight:10}}/>
      <Text h1 color="#fff"	>Login In</Text>
      </View>
      <View style={styles.footer}>
      <View style={styles.input}>
      <Icon name="profile" family="AntDesign" size={55} style={{paddingRight:10}} />
      <Input placeholderTextColor={theme.COLORS.THEME} placeholder="Email" rounded type="email-address" onChangeText={(email)=>{setEmail(email)}} style={styles.textInput}/>
      </View>
      <View style={styles.input}>
      <Icon name="fingerprint" family="Entypo" size={55} style={{paddingRight:10}} />
      <Input viewPass rounded  placeholderTextColor={theme.COLORS.THEME} placeholder="Password" password onChangeText={(password)=>{setPassword(password)}} style={styles.textInput}/>
      </View>
      <View style={{justifyContent:'center'}}>
      <Block center>
      <Button onPress={(e)=>handleSignIn(e)} color='#50C7C7' round>
        SignIn
      </Button>
      </Block>
      <Block right>
      <Button onPress={()=>navigation.navigate('SignUp')} color="warning" round size='small'>SignUp</Button> 
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
    flex:1,
    justifyContent: 'flex-end',
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
    marginTop:10
  },
  textInput:{
    flex:1,
    paddingHorizontal:20,
    width:250,
    borderColor: theme.COLORS.THEME,paddingRight:10,


  },
  // button: {
  //   alignItems: "center",
  //   backgroundColor: "#fff",
  //   paddingTop :10,
  //   justifyContent:'center',
    

  // },

});
export default SignIn 