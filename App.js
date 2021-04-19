import React,{Fragment,useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from 'galio-framework';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './Core/Home'
import SignIn from './Core/SignIn'
import SignUp from './Core/SignUp'
import Form from './Core/Form'
import Toast from 'react-native-toast-message'
import Pdf from './Core/Pdf'


const Stack = createStackNavigator()
const AuthStack = createStackNavigator()


// function AuthStackScreen(){
  
//   return(
    
//     <AuthStack.Navigator >
//     <AuthStack.Screen options={{title:"Home Page"}} name="Home" component={Home}/>
//     <AuthStack.Screen options={{title:"Login Page"}} name="SignIn" component={SignIn}/>
//     <AuthStack.Screen options={{title:"SignUp Page"}} name="SignUp" component={SignUp}/>
//     </AuthStack.Navigator>
    
//   )
// } 

// function Verified(props){
  
//   return(
    
//     <Stack.Navigator >
//     <Stack.Screen options={{title:"Resume Form Page",headerRight: () => (
//             <Button onlyIcon icon="logout" onPress={() =>{try{AsyncStorage.removeItem('user')}catch{
//             };Toast.show({
//               text1:'Success',
//               text2: "Logged Out Successfully",
//               type: 'success'
//             });}} iconFamily="AntDesign" iconSize={30} color="primary" iconColor="#fff" style={{ width: 40, height: 40 }}>LogOut</Button>
//           )}} name="Form" component={Form}/>
//     </Stack.Navigator>
    
//   )
// } 

export default function App() {
 
  
  const [user,setUser] = useState(false)
  

    useEffect(()=>{
      AsyncStorage.getItem('user')
      .then(data=>{if(data){setUser(true);navigation.navigate('Form')}})
      .catch(err=>{if(err){setUser(false);}})
  
    },[])
    
   
  return (

       <NavigationContainer >  
       <Stack.Navigator>
       
        <Stack.Screen options={{title:"Home Page"}} name="Home" component={Home}/>
        <Stack.Screen options={{title:"Login Page"}} name="SignIn" component={SignIn}/>
        <Stack.Screen options={{title:"SignUp Page"}} name="SignUp" component={SignUp}/>
        <Stack.Screen  options={({ navigation, route }) => ({
          headerTitle:"Resume Form",headerLeft:null,headerRight:()=>(<Button onlyIcon icon="logout" onPress={() =>{try{AsyncStorage.removeItem('user')}catch{
              };navigation.navigate('SignIn')}} iconFamily="AntDesign" iconSize={30} color="primary" iconColor="#fff" style={{ width: 40, height: 40 }}>LogOut</Button>
              )
        })} name="Form" component={Form}/>
        <Stack.Screen  options={({ navigation, route }) => ({
          headerTitle:"Pdf Conversion",headerLeft:null,headerRight:()=>(<Button onlyIcon icon="logout" onPress={() =>{try{AsyncStorage.removeItem('user')}catch{
              };navigation.navigate('SignIn')}} iconFamily="AntDesign" iconSize={30} color="primary" iconColor="#fff" style={{ width: 40, height: 40 }}></Button>
              )
        })} name="Pdf" component={Pdf}/>
        
      </Stack.Navigator>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
      
     
 
   
   
  )    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
