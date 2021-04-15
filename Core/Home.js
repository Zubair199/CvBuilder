import React from 'react'
import { StyleSheet, View ,Image} from 'react-native';
import { Input,Text, Block,Button} from 'galio-framework';
const Home = ({navigation})=>{
  return(
    <View style={styles.container}>
      <View style={styles.header}>
      <Image source={require('../assets/logo/CV_Builder_2x.png')}/>
      </View>
      <View style={styles.footer}>
        <View style={styles.text}>
        <Text h3>Get Stated!</Text>
        <Button round uppercase onPress={()=>{navigation.navigate('Form')}}>Sign In</Button>
        </View>
      
      </View>
     
      {/* <Button title="Go to form" onPress={()=>{navigation.navigate('Form')}}/> */}
    </View>
  );
}

  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#009387'
    },
    header:{
      flex:2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    footer:{
      flex:1,
      backgroundColor:'#fff',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      paddingVertical:50,
      paddingHorizontal:30
    },
    text:{
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
export default Home 