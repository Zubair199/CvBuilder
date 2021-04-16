import React,{Fragment} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './Core/Home'
import SignIn from './Core/SignIn'
import SignUp from './Core/SignUp'
import Form from './Core/Form'
import Toast from 'react-native-toast-message'

const Stack = createStackNavigator()
export default function App() {
  let data1= false;
  AsyncStorage.getItem('user').then(data=>{if(data){data1=true}}).catch(err=>{if(err){data1=false}})
 
  return (
    
      <NavigationContainer>
       <Stack.Navigator >
      
        {
         
            data1==true?(
             
              <Fragment>
              
              <Stack.Screen options={{title:"Resume Form Page"}} name="Form" component={Form}/>
              
              </Fragment>
            )
            :
            ( 
              

              <Fragment>
                <Stack.Screen options={{title:"Home Page"}} name="Home" component={Home}/>
                <Stack.Screen options={{title:"Login Page"}} name="SignIn" component={SignIn}/>
                <Stack.Screen options={{title:"SignUp Page"}} name="SignUp" component={SignUp}/>
                <Stack.Screen options={{title:"Resume Form Page"}} name="Form" component={Form}/>
               </Fragment>
                
              )
              
           
        }
        </Stack.Navigator>
        
        
      
      <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
      
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
