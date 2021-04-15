import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './Core/Home'
import Form from './Core/Form'
const Stack = createStackNavigator()
export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{title:"Home Page"}} name="Home" component={Home}/>
        <Stack.Screen options={{title:"Login In Page"}} name="Form" component={Form}/>
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
