import React,{useState} from 'react'
import { StyleSheet, View,TouchableOpacity,ScrollView,Image } from 'react-native';
import { Input,theme,withGalio,GalioProvider, Block,Text,Icon,Button } from 'galio-framework';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Form =  ({route,navigation})=>{

   
 
  
  const [email,setEmail]= useState("")
  const [username,setUsername]= useState("")
  const [description,setDescription]= useState("")
  const [school,setSchool]= useState("")
  const [highSchool,setHighSchool]= useState("")
  const [university,setUniversity]= useState("")
  const [masters,setMasters]= useState("")
  const [phone,setPhone]= useState(0)
  const [error,setError]= useState("")
  const [current , setCurrent] = useState("")
  const [dateFromS, setDateFromS] = useState(new Date())
  const [dateToS, setDateToS] = useState(new Date())
  const [dateFromH, setDateFromH] = useState(new Date())
  const [dateToH, setDateToH] = useState(new Date())
  const [dateFromU, setDateFromU] = useState(new Date())
  const [dateToU, setDateToU] = useState(new Date())
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
 

  const showDatePicker = (val) => {
   console.log(val)
    setCurrent(val)
    setDatePickerVisibility(true);
   
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    const date1 =  JSON.stringify(date)
    const dateF = date1.split('T')
    if(current === "schoolstart"){
     
      setDateFromS(dateF[0])
    }
    else if(current === "schoolend"){
      setDateToS(dateF[0])
      console.log(dateFromS , dateToS , school)
    }
    else if(current === "highschoolstart"){
     
      setDateFromH(dateF[0])
    }
    else if(current === "highschoolend"){
      setDateToH(dateF[0])
    }
    else if(current === "unistart"){
     
      setDateFromU(dateF[0])
    }
    else if(current === "uniend"){
      setDateToU(dateF[0])
    }
    else if(current === "masterstart"){
     
      setDateFromM(dateF[0])
    }
    else if(current === "masterend"){
      setDateToM(dateF[0])
    }

    hideDatePicker();
   
  };

 
  const handleSignUp = (event)=>{
 
  }
  return(
    <ScrollView>
    <View style={styles.container}>

      <View style={styles.header}><Image source={require('../assets/logo/resume.png')} style={{ width: 100, height: 100,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomRightRadius:50,borderBottomLeftRadius:50 }}/>
      <Text h1 color="#fff"	>Resume Form</Text></View>
      <View style={styles.footer}>
      <Text h4 >Credentials</Text>
      <View style={styles.input}>
      
      <Input icon="profile" family="AntDesign" style={styles.textInput} placeholder="Username" onChangeText={(username)=>{setUsername(username)}} placeholderTextColor={theme.COLORS.THEME} />
     
      </View>
      <View style={styles.input}>
      
      <Input icon="email" family="Entypo" color={theme.COLORS.THEME} style={styles.textInput} placeholderTextColor={theme.COLORS.THEME}  placeholder="Email" type="email-address" onChangeText={(email)=>{setEmail(email)}} />
      </View>
      <View style={styles.input}>
      <Input icon="phone" family="AntDesign" color={theme.COLORS.THEME} style={styles.textInput} placeholderTextColor={theme.COLORS.THEME}  placeholder="Phone Number" type="numeric" onChangeText={(phone)=>{setPhone(email)}} />
      </View>
      <View style={styles.input}>
      <Input icon="text-document" onChangeText={(des)=>{setDescription(des)}} family="Entypo" color={theme.COLORS.THEME} placeholderTextColor={theme.COLORS.THEME}  placeholder="Description" style={styles.textInput} multiline={true} numberOfLines={4}/>
      </View>
      <Text h4 >Education</Text>
      <View style={{marginTop:10}}>
     
      <Input icon="school" onChangeText={(s)=>{setSchool(s)}}  family="FontAwesome5" color={theme.COLORS.THEME} placeholderTextColor={theme.COLORS.THEME}  placeholder="School Name" style={styles.textInput} multiline={true} numberOfLines={2}/>
      <View style={{marginTop:10,flexDirection:"row"}}><Button onPress={()=>showDatePicker("schoolstart")}>Start Date</Button><Button onPress={()=>showDatePicker("schoolend")}>End Date</Button></View>
     
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
     
      <Input icon="school" family="FontAwesome5" color={theme.COLORS.THEME} placeholderTextColor={theme.COLORS.THEME}  placeholder="High School?" style={styles.textInput} multiline={true} numberOfLines={2}/>
      <View style={{marginTop:10,flexDirection:"row"}}><Button onPress={()=>showDatePicker("highschoolstart")}>Start Date</Button><Button onPress={()=>showDatePicker("highschoolend")}>End Date</Button></View>
     
      <Input icon="school" family="FontAwesome5" color={theme.COLORS.THEME} placeholderTextColor={theme.COLORS.THEME}  placeholder="University?" style={styles.textInput} multiline={true} numberOfLines={2}/>
      <View style={{marginTop:10,flexDirection:"row"}}><Button onPress={()=>showDatePicker("unistart")}>Start Date</Button><Button onPress={()=>showDatePicker("uniend")}>End Date</Button></View>
     
      <Input icon="school" family="FontAwesome5" color={theme.COLORS.THEME} placeholderTextColor={theme.COLORS.THEME}  placeholder="Masters?" style={styles.textInput} multiline={true} numberOfLines={2}/>
      <View style={{marginTop:10,flexDirection:"row"}}><Button onPress={()=>showDatePicker("masterstart")}>Start Date</Button><Button onPress={()=>showDatePicker("masterend")}>End Date</Button></View>
     
      
      </View>
      <Text h4 >Skills( C++ , Java etc)</Text>
      <View style={styles.input}>
      <Input icon="social-skillshare" family="Foundation" color={theme.COLORS.THEME} placeholderTextColor={theme.COLORS.THEME}  placeholder="C++" style={styles.textInput} multiline={true} numberOfLines={100}/>
      </View>
      <Text h4 >Prior Projects?</Text>
      <View style={styles.input}>
        
      <Input icon="text-document" family="Entypo" color={theme.COLORS.THEME} placeholderTextColor={theme.COLORS.THEME}  placeholder="Description" style={styles.textInput} multiline={true} numberOfLines={4}/>
      </View>
      
     

      <View style={{justifyContent:'center',paddingLeft:30}}>
      <Block>
      <Button onPress={(e)=>navigation.navigate('Form')} color='#50C7C7' round>
        Submit
      </Button>
      </Block>
      
      <Text h6>{error}</Text>
      
      </View>
     
      </View>
      
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
    
    
  },
  header:{
    flex:0.3,
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
  
    paddingHorizontal:40,
    borderColor: theme.COLORS.THEME,
    width:250
   

  },
  // button: {
  //   alignItems: "center",
  //   backgroundColor: "#fff",
  //   paddingTop :10,
  //   justifyContent:'center',
    

  // },

});
export default Form 