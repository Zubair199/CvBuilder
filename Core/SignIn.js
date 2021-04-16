import React,{useState} from 'react'
import { StyleSheet, View,TouchableOpacity,Image,ScrollView } from 'react-native';
import { Input,theme, Block,Text,Icon,Button , Toast } from 'galio-framework';
import {signIn} from '../Api/CoreApis';
import axios from 'react-native-axios'
const SignIn = ({navigation})=>{

  const [isShow,setShow]= useState(false)
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const [error,setError]= useState("")
  const duration = 3000
  const handleSignIn = (event)=>{
    const user= {
      email,password
    }
    // fetch('http://192.168.100.11:8088/api/signin',{method:"POST",headers: {
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json'
    // },body:JSON.stringify({
    //   email:email,
    //   password:password
    // })}).then(response=>{
    //     response.json()}).then((json)=>{console.log(json.data)}).catch(err=>{ console.log(err)})

    axios.post('http://192.168.100.11:8088/api/signin',{email,password}).then(res=>{console.log(res)}).catch(err=>{setError(err.response.data.error);setShow(true);  setTimeout(()=>{setShow(false)}, 3000) })
    
  }
  return(
    
    <View style={styles.container}>
      
      <View style={styles.header}>
     
      <Toast isShow={isShow} round positionIndicator="top" fadeOutDuration={duration} color="warning">{error}</Toast>
      
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