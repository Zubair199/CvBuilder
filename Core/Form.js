import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Input, Block,Text } from 'galio-framework';
const Form = ({navigation})=>{
  return(

    <View style={styles.container}>

      <View style={styles.header}><Text h1 color="#fff"	>Login In</Text></View>
      <View style={styles.footer}>
      

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

  }
});
export default Form 