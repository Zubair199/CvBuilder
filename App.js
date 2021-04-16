import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './Core/Home'
import SignIn from './Core/SignIn'
import SignUp from './Core/SignUp'
import Form from './Core/Form'
const Stack = createStackNavigator()
export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{title:"Home Page"}} name="Home" component={Home}/>
        <Stack.Screen options={{title:"Login Page"}} name="SignIn" component={SignIn}/>
        <Stack.Screen options={{title:"SignUp Page"}} name="SignUp" component={SignUp}/>
        <Stack.Screen options={{title:"Resume Form Page"}} name="Form" component={Form}/>
      </Stack.Navigator>
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
