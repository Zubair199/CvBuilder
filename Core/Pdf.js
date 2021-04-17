import React,{useState} from 'react'
import { StyleSheet, View,TouchableOpacity,ScrollView,Image } from 'react-native';
import { Input,theme,withGalio,GalioProvider, Block,Text,Icon,Button } from 'galio-framework';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';

const Pdf = ({navigation})=>{

  const page1 = PDFPage
  .create()
  .setMediaBox(250, 250)
  .drawText('You can add JPG images too!')
  .drawImage(jpgPath, 'jpg', {
     x: 5,
     y: 125,
     width: 200,
     height: 100,
  })
  .drawImage(pngPath, 'png', {
     x: 5,
     y: 25,
     width: 200,
     height: 100,
  });
 
// Create a new PDF in your app's private Documents directory
const docsDir = await PDFLib.getDocumentsDirectory();
const pdfPath = `${docsDir}/resume.pdf`;
PDFDocument
  .create(pdfPath)
  .addPages(page1)
  .write() // Returns a promise that resolves with the PDF's path
  .then(path => {
    console.log('PDF created at: ' + path);
    // Do stuff with your shiny new PDF!
  });

  return(
    <View>
      <Text h1>loading</Text>
    </View>
  )

}

export default Pdf