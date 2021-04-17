import React,{useState} from 'react'
import { StyleSheet, View,TouchableOpacity,ScrollView,Image } from 'react-native';
import { Input,theme,withGalio,GalioProvider, Block,Text,Icon,Button } from 'galio-framework';
import * as Print from 'expo-print'
import * as FileSystem from 'expo-file-system';
const Pdf = ({route,navigation})=>{
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pdf Content</title>
        <style>
            body {
                font-size: 16px;
                color: rgb(255, 196, 0);
            }

            h1 {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1>Hello, UppLabs!</h1>
    </body>
    </html>
`;

const createPDF = async (html) => {
  try {
      const { uri } = await Print.printToFileAsync({ html });
      return uri;
  } catch (err) {
      console.error(err);
  }
};

createPDF(htmlContent).then(data=>{FileSystem.DownloadResumable.downloadAsync(data)
  .then(({ uri }) => {
    console.log('Finished downloading to ', uri);
  })
  .catch(error => {
    console.error(error);
  });})
 


  return(
    <View>
      <Text h1>loading</Text>
    </View>
  )

}

export default Pdf