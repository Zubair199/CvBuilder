// skills empty array pls look over ??
import React,{useState,useEffect} from 'react'
import { StyleSheet, View,ScrollView,Image } from 'react-native';
import { Input,theme, Block,Text,Button } from 'galio-framework';
import RadioButtonRN from 'radio-buttons-react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {Resume} from '../Api/CoreApis'
import Icon from 'react-native-vector-icons/FontAwesome';
const Form =  ({route,navigation})=>{

  const [userId,setUserId] = useState("")


  useEffect(()=>{
    
    try {
      AsyncStorage.getItem('user').then(user=>{
        if(user)
        {
          
          setUserId(JSON.parse(user)._id)
        }
        
      })
    } catch (e) {
      
      console.log(e)
    }

  },[])
  
  
  const [email,setEmail]= useState("")
  const [title,setTitle] = useState("")
  const [username,setUsername]= useState("")
  const [description,setDescription]= useState("")
  const [school,setSchool]= useState("")
  const [address,setAddress]= useState("")
  const [highSchool,setHighSchool]= useState("")
  const [university,setUniversity]= useState("")
  const [masters,setMasters]= useState("")
  const [phone,setPhone]= useState(0)
  const [skills,setSkills]= useState([])
  const [error,setError]= useState("")
  const [current , setCurrent] = useState("")
  const [dateFromS, setDateFromS] = useState("")
  const [dateToS, setDateToS] = useState("")
  const [dateFromH, setDateFromH] = useState("")
  const [dateToH, setDateToH] = useState("")
  const [dateFromU, setDateFromU] = useState("")
  const [dateToU, setDateToU] = useState("")
  const [dateFromM, setDateFromM] = useState("")
  const [dateToM, setDateToM] = useState("")

  const [values , setValues] = useState({
    title:[],
    description:[],
    startDate:[],
    endDate:[]
  })
  const [layout,setLayout] = useState("ESP")
  const [currentTitle,setCurT] = useState("")
  const [currentDes,setCurD] = useState("")
  const [currentStart,setCurS] = useState("")
  const [currentEnd,setCurE] = useState("")
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const data = [
    {
      label: 'Education,skills,experience/projects',
      accessibilityLabel: 'ESP'
     },
     {
      label: 'Experience/projects,skills,Education',
      accessibilityLabel: 'PSE'
     }
    ];
    
   

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
    let dateF = date1.split('T')
    dateF[0]=dateF[0].substr(1,dateF[0].length)
    
    if(current === "schoolstart"){
      setDateFromS(dateF[0])
      if(dateToS!=="" && school!==""){
        Toast.show({
          text1: "Success",
          text2:  "School Form Filled",
          type: 'success'
        })
      }
     
    }
    else if(current === "schoolend"){
      setDateToS(dateF[0])
      if(dateFromS!==""&& school!==""){
        Toast.show({
          text1: "Success",
          text2:  "School Form Filled",
          type: 'success'
        })

      }
     
      console.log(dateFromS , dateToS , school)
    }
    else if(current === "highschoolstart"){
      setDateFromH(dateF[0])
      if(dateToH!=="" && highSchool!==""){
        Toast.show({
          text1: "Success",
          text2:  "HighSchool Form Filled",
          type: 'success'
        })
      }
      
    }
    else if(current === "highschoolend"){
      setDateToH(dateF[0])
      if( dateFromH!==""&& highSchool!==""){
        Toast.show({
          text1: "Success",
          text2:  "HighSchool Form Filled",
          type: 'success'
        })
      }

     
    }
    else if(current === "unistart"){
      setDateFromU(dateF[0])
      if(dateToU!=="" && university!==""){
        Toast.show({
          text1: "Success",
          text2:  "University Form Filled",
          type: 'success'
        })
      }
     
    }
    else if(current === "uniend"){
      setDateToU(dateF[0])
      if( dateFromU!==""&& university!==""){
        Toast.show({
          text1: "Success",
          text2:  "University Form Filled",
          type: 'success'
        })
      }
      
    }
    else if(current === "masterstart"){
      setDateFromM(dateF[0])
      if(dateToM!==""  && masters!==""){
        Toast.show({
          text1: "Success",
          text2:  "Masters Form Filled",
          type: 'success'
        })
      }
     
    }
    else if(current === "masterend"){
      setDateToM(dateF[0])
      if( dateFromM!==""&& masters!==""){
        Toast.show({
          text1: "Success",
          text2:  "Masters Form Filled",
          type: 'success'
        })
      }
     
    }
    else if(current === "projects"){
      // let val = {...values}
      // val.startDate.push(dateF[0])
      setCurS(dateF[0])
    }
    else if(current === "projecte"){  
      // let val = {...values}
      // val.endDate.push(dateF[0])
      setCurE(dateF[0])
    }
    hideDatePicker();
  };
  const handleExperience = ()=>{
    let val = {...values}
      if(currentStart==""||currentEnd==""||currentTitle==""||currentDes==""){
        Toast.show({
          text1: "Error",
          text2: currentStart==""?"Start-Date not Set":currentEnd==""?"End-Date not Set":currentTitle==""?"Title Cannot be Empty":currentDes==""?"Please Enter The Description":"",
          type: 'error'
        })
      }
      else{
      val.startDate.push(currentStart)
      val.endDate.push(currentEnd)
      val.title.push(currentTitle)
      val.description.push(currentDes)
      setValues(val)
      Toast.show({
        text1: "Success",
        text2: "Project Added Successfully",
        type: 'success'
      })
      setCurD("")
      setCurS("")
      setCurT("")
      setCurE("")
    }
  }
  
  return(
    <ScrollView>
    <View style={styles.container}>

      <View style={styles.header}><Image source={require('../assets/logo/resume.png')} style={{ width: 100, height: 100,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomRightRadius:50,borderBottomLeftRadius:50 }}/>
      <Text  h4 color="#fff"	>Resume Form</Text></View>
      <View style={styles.footer}>
      <Text h4 >Credentials</Text>
      <View style={styles.input}>
      
      <Input testID="usernameId" icon="profile" family="AntDesign" color={theme.COLORS.THEME} style={styles.textInput} placeholder="Username" onChangeText={(username1)=>{const username12=username1.length>1&&username1.charAt(0).toUpperCase() + username1.substr(1,username1.length);setUsername(username12)}} placeholderTextColor={theme.COLORS.THEME} />
     
      </View>
      <View style={styles.input}>
      
      <Input testID="titleId" icon="profile" family="AntDesign" color={theme.COLORS.THEME} style={styles.textInput} placeholder="Title" onChangeText={(tiles)=>{setTitle(tiles.toUpperCase() )}} placeholderTextColor={theme.COLORS.THEME} />
     
      </View>
      <View style={styles.input}>
      
      <Input testID="emailId" icon="email" family="Entypo" color={theme.COLORS.THEME} style={styles.textInput} placeholderTextColor={theme.COLORS.THEME}  placeholder="Email" type="email-address" onChangeText={(email1)=>{setEmail(email1)}} />
      </View>
      <View style={styles.input}>
      <Input testID="phoneId" icon="phone" family="AntDesign" color={theme.COLORS.THEME} style={styles.textInput} placeholderTextColor={theme.COLORS.THEME}  placeholder="Phone Number" type="numeric" onChangeText={(phon)=>{setPhone(phon)}} />
      </View>
      <View style={styles.input}>
      <Input testID="addressId" icon="address" family="Entypo" color={theme.COLORS.THEME} style={styles.textInput} placeholderTextColor={theme.COLORS.THEME}  placeholder="Address" onChangeText={(add1)=>{setAddress(add1)}} />
      </View>
      <View style={styles.input}>
      <Input testID="descriptionId" icon="text-document" onChangeText={(des)=>{setDescription(des)}} family="Entypo" color={theme.COLORS.THEME} placeholderTextColor={theme.COLORS.THEME}  placeholder="Description" style={styles.textInput} multiline={true} numberOfLines={4}/>
      </View>
      <Text h4 >Education</Text>
      <View style={{marginTop:10}}>
     
      <Input testID="schoolId" icon="school" onChangeText={(s)=>{setSchool(s);if( dateFromS!==""&& dateToS!==""){
        Toast.show({
          text1: "Success",
          text2:  "High School Form Filled",
          type: 'success'
        })
      }}}  family="FontAwesome5" color={theme.COLORS.THEME} placeholderTextColor={theme.COLORS.THEME}  placeholder="School Name" style={styles.textInput} multiline={true} numberOfLines={2}/>
      <View style={{marginTop:10,flexDirection:"row"}}><Button onPress={()=>showDatePicker("schoolstart")}>Start Date</Button><Button onPress={()=>showDatePicker("schoolend")}>End Date</Button></View>
     
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <Input testID="highSchoolId" icon="school" family="FontAwesome5" onChangeText={(h)=>{setHighSchool(h);if( dateFromH!==""&& dateToH!==""){
        Toast.show({
          text1: "Success",
          text2:  "High School Form Filled",
          type: 'success'
        })
      }}} color={theme.COLORS.THEME} placeholderTextColor={theme.COLORS.THEME}  placeholder="High School?" style={styles.textInput} multiline={true} numberOfLines={2}/>
      <View style={{marginTop:10,flexDirection:"row"}}><Button onPress={()=>showDatePicker("highschoolstart")}>Start Date</Button><Button onPress={()=>showDatePicker("highschoolend")}>End Date</Button></View>  
      <Input testID="universityId" icon="school" family="FontAwesome5" onChangeText={(u)=>{setUniversity(u);if( dateFromU!==""&& dateToU!==""){
        Toast.show({
          text1: "Success",
          text2:  "University Form Filled",
          type: 'success'
        })
      }}} color={theme.COLORS.THEME} placeholderTextColor={theme.COLORS.THEME}  placeholder="University?" style={styles.textInput} multiline={true} numberOfLines={2}/>
      <View style={{marginTop:10,flexDirection:"row"}}><Button onPress={()=>showDatePicker("unistart")}>Start Date</Button><Button onPress={()=>showDatePicker("uniend")}>End Date</Button></View>
      <Input testID="mastersId" icon="school" family="FontAwesome5" onChangeText={(m)=>{setMasters(m);if( dateFromM!==""&& dateToM!==""){
        Toast.show({
          text1: "Success",
          text2:  "Masters Form Filled",
          type: 'success'
        })
      }}} color={theme.COLORS.THEME}  placeholderTextColor={theme.COLORS.THEME}  placeholder="Masters?" style={styles.textInput} multiline={true} numberOfLines={2}/>
      <View style={{marginTop:10,flexDirection:"row"}}><Button onPress={()=>showDatePicker("masterstart")}>Start Date</Button><Button onPress={()=>showDatePicker("masterend")}>End Date</Button></View> 
      </View>
      <Text h4 >Skills( C++ , Java etc) (max 12)</Text>
      <View style={styles.input}>
      <Input testID="skillsId" icon="social-skillshare" family="Foundation" onChangeText={(skill)=>{const sk1 = skill.split(',');
      let skill1=[]
      sk1.map((val,index)=>{if(val!==""){skill1.push(val)}

    })
      setSkills(skill1)
      }} color={theme.COLORS.THEME} placeholderTextColor={theme.COLORS.THEME}  placeholder="C++" style={styles.textInput} multiline={true} numberOfLines={100}/>
      </View>
      <Text h4 >Experience? (max 4)</Text>
      <View style={styles.input}>     
      <Input testID="extitleId" icon="text-document" family="Entypo" onChangeText={(t)=>{setCurT(t)}} value={currentTitle} color={theme.COLORS.THEME} placeholderTextColor={theme.COLORS.THEME}  placeholder="Title" style={styles.textInput} multiline={true} numberOfLines={1}/>
      </View>
      <View style={styles.input}>     
      <Input testID="exdescriptionId"  icon="text-document" family="Entypo" onChangeText={(d)=>{setCurD(d)}} value={currentDes} color={theme.COLORS.THEME} placeholderTextColor={theme.COLORS.THEME}  placeholder="description" style={styles.textInput} multiline={true} numberOfLines={1}/>
      </View>
      <View style={{marginTop:10,flexDirection:"row"}}><Button onPress={()=>showDatePicker("projects")} >Start Date</Button><Button onPress={()=>showDatePicker("projecte")}>End Date</Button></View>
      <View style={{marginTop:10,flexDirection:"row"}}><Button onPress={()=>handleExperience()} color='info' >Add Proj/Exp</Button></View>

      <Text h4>Layouts!</Text>
      <RadioButtonRN
        data={data}
        selectedBtn={(e) =>{setLayout(e.accessibilityLabel);console.log(e.accessibilityLabel)}}
        icon={
          <Icon
            name="check-circle"
            size={25}
            color="#2c9dd1"
          />
        }
        initial={1}
      />
      
      <Block center>
        
      
      <Button onPress={(e)=>{
        if(skills.length==0||email==""||title==""||username==""||description==""||phone==""||highSchool==""||school==""||dateFromS==""||dateFromS==""||dateToH==""||dateFromH==""||values.title.length==0||address==""){
          
          Toast.show({
            text1: "Error",
            text2: email==""?"Please Enter Email":title==""?"Please Enter Title":username==""?"UserName Cannot be Empty":description==""?"Please Enter The Description":highSchool==""?"Please Enter HighSchool Name":school==""?"Please Enter School Name":dateFromS==""?"Start-Date not Set For School":dateToS==""?"End-Date not Set For School":dateFromH==""?"Start-Date not Set For High-School":dateToH==""?"End-Date not Set For High-School":address==""?"Please Enter Address":skills.length==0?"Please Enter Your Skills":values.title.length<1?"Please Enter A project or Experience":"",
            type: 'error'
          })

        }
        else{
          let flag =false;
           if(university!==""||dateToU!==""||dateFromU!==""){
             if(university==""||dateToU==""||dateFromU==""){
              Toast.show({
                text1: "Error",
                text2:"University Data Incomplete",
                type: 'error'
              })
              flag=true;
             }
           }
           if(masters!==""||dateToM!==""||dateFromM!==""){
             if(masters==""||dateToM==""||dateFromM==""){
              Toast.show({
                text1: "Error",
                text2:"Masters Data Incomplete",
                type: 'error'
              })
              flag=true;
             }
           }
          if(flag==false){
          // const obj ={email,title,username,description,phone,address,university,highSchool,masters,school,skills,experienceDescription:[currentDes],experienceTitle:[currentTitle],user:userId}
          // Resume(obj).then(data1=>{console.log(data1.data)
          // }).catch(e1=>{console.log(e1.response.data)})
           navigation.navigate('Pdf',{email,title,username,description,phone,address,university,highSchool,masters,school,dateFromS,dateToS,dateToU,dateFromU,dateToM,dateFromM,dateToH,dateFromH,skills,values,layout,userId})
        }
        }
      }
        } color='#50C7C7' round>
        Submit
      </Button>

     
      
      </Block>
      
    
      
      
     
      </View>
       {/* FOR TESTING ON JEST */}
       <Button style={{display:'none'}} testID="buttonId" onPress={(e)=>{
           const obj ={email,title,username,description,phone,address,university,highSchool,masters,school,skills,experienceDescription:[currentDes],experienceTitle:[currentTitle],user:"607a0112a3c780495cb8fc44"}
          return Resume(obj)}} color='#50C7C7' round>
          </Button>
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