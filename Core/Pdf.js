import React,{useState} from 'react'
import { StyleSheet, View,TouchableOpacity,ScrollView,Image, Dimensions } from 'react-native';
import * as IntentLauncher from 'expo-intent-launcher';
import { Input,theme,withGalio,GalioProvider, Block,Text,Icon,Button } from 'galio-framework';
import * as Print from 'expo-print'
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
const Pdf = ({route,navigation})=>{

  const {email,title,username,description,phone,address,university,highSchool,school,dateFromS,dateToS,dateToU,dateFromU,dateToH,dateFromH,skills} = route.params;
  
  let title1 =""
  let tname1 = ""
  let time1s=""
  let time1e=""
  let title2 =""
  let tname2 = ""
  let time2s=""
  let time2e=""
  let title3 =""
  let tname3 = ""
  let time3s=""
  let time3e=""
  if(university!==""&&highSchool!==""){

    title1 ="UNIVERSITY"
    tname1 = university
    time1s=dateFromU+"-"
    time1e=dateToU
    title2 ="HIGH-SCHOOL"
    tname2 = highSchool
    time2s=dateFromH+"-"
    time2e=dateToH
    title3 ="SCHOOL"
    tname3 = school
    time3s=dateFromS+"-"
    time3e=dateToS
  }
  else if(highSchool!==""){
     title2 ="HIGH-SCHOOL"
     tname2 = highSchool
     time2s=dateFromH+"-"
     time2e=dateToH
     title3 ="SCHOOL"
     tname3 = school
     time3s=dateFromS+"-"
     time3e=dateToS

  }

  let set1 = []
  skills.map((val,index)=>{
    if(index==0){
     set1.push('<ul class="list-group list-group-horizontal">') 
     set1.push(`<li class="list-group-item list-group-item-primary">${val}</li>`)
     if(skills.length<2){
      set1.push(`</ul>`) 
     } 
    }
    else if(index>0&&index<=1){
      set1.push(`<li class="list-group-item list-group-item-primary">${val}</li>`) 
      if(skills.length<3){
        set1.push(`</ul>`) 
       } 
    }
    else if(index==2){
      set1.push(`<li class="list-group-item list-group-item-primary">${val}</li>`) 
      if(skills.length<4){
        set1.push(`</ul>`) 
       } 
    }
    else if(index==3){
      set1.push(`<li class="list-group-item list-group-item-primary">${val}</li>`) 
      set1.push(`</ul>`) 
    
    }
    if(index==4){
     set1.push('<ul class="list-group list-group-horizontal">') 
     set1.push(`<li class="list-group-item list-group-item-primary">${val}</li>`) 
     if(skills.length<6){
      set1.push(`</ul>`) 
     }
    }
    else if(index>4&&index<=5){
      set1.push(`<li class="list-group-item list-group-item-primary">${val}</li>`) 
      if(skills>7){
        set1.push(`</ul>`) 
       }
    }
    else if(index==6){
      set1.push(`<li class="list-group-item list-group-item-primary">${val}</li>`) 
      if(skills.length<8){
        set1.push(`</ul>`) 
       }
    }
    else if(index==7){
      set1.push(`<li class="list-group-item list-group-item-primary">${val}</li>`) 
      set1.push(`</ul>`) 
    
    }
   
  
  })
 
  

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
       
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <title>Pdf Content</title>
        <style>
.vl {
  border-left: 6px solid grey;
  height: 500px;
  position: absolute;
  left: 45%;
  margin-left: -3px;
  top: 220px;
}
</style>
    </head>
    <body>
  
    <div class="container">
  <div class="row">
    <div class="col">
     <h1  style="">${username}</h1>
    </div>
    <div class="col">
    <h5 style="color:grey;padding-left:180px">${email}&nbsp;&nbsp;<span style="padding-top:0px" class="material-icons">email</span></h5>
    </div>

  </div>
  <div class="row">
    <div class="col">
     <h4 style="color:DodgerBlue;">${title}</h4>
    </div>
    <div class="col">
    <h5 style="color:grey;padding-left:320px;padding-bottom:15px">${phone}&nbsp;&nbsp<span class="material-icons">
    phone_iphone
    </span></h5>
    </div>
   
  </div>
  <div class="row">
    <div class="col">
    <textarea rows="4"  style="border:0px" cols="25">${description}</textarea>
    </div> 
    <div class="col">
    <h5 style="color:grey;padding-left:170px">${address}&nbsp;&nbsp<span class="material-icons">
    home
    </span></h5>
    </div> 
    <hr class="rounded">
    
    <div class="row">
    <div class="col">
    <h1 ><b><u>Education</u></b></h1>
    <h2 style="color:grey;padding-top:20px">${title1}:</h2>
    <h3>${tname1}</h3>
    <h5>${time1s}${time1e}</h5>
    <h2 style="color:grey;padding-top:20px">${title2}:</h2>
    <h3>${tname2}</h3>
    <h5>${time2s}${time2e}</h5>
    <h2 style="color:grey;padding-top:20px">${title3}:</h2>
    <h3>${tname3}</h3>
    <h5>${time3s}${time3e}</h5>
   
    

    </div>
    <div class="vl"></div>
    <div  class="col">
    <h1 style="padding-left:100px">Skills</h1>

    ${set1.map((val)=>{
      return `${val}`  
    })}
    
    </div> 

    </div> 




  </div>
  





  
 
       
    </body>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
    </html>
`;

const createPDF = async (html) => {
  try {
      const { uri } = await Print.printToFileAsync({ html });
        const permission = await MediaLibrary.requestPermissionsAsync();
        if (permission.granted) {
        //await MediaLibrary.createAssetAsync(uri);
        return uri
        }
      
  }
      catch (err) {
      console.error(err);
  }
};
const filePa = FileSystem.documentDirectory+"zubair/project.pdf"

//FileSystem.makeDirectoryAsync(FileSystem.documentDirectory+"zubair").then(res=>{console.log(res)}).catch(err=>console.log(err))
console.log(filePa)

const [ur,setUr]= useState("")

createPDF(htmlContent).then(data=>{

  //setUr(data);
  const obj1 = {
    from:data,
    to:filePa
  }
  console.log(data)
  
  //FileSystem.copyAsync(obj1).then(data1=>{console.log(data1)}).catch(err=>{console.log(err)})
  FileSystem.getContentUriAsync(data).then(cUri => {
    console.log(cUri);
    IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
      data: cUri,
      flags: 1,
    });
  });
  //FileSystem.readDirectoryAsync(filePa).then(res=>{console.log(res)})
  //FileSystem.readAsStringAsync(filePa).then(data1=>{console.log(data1)})
  
  

})




// const obj1 = {
//   to:filePa, from:data
// };console.log(obj1);FileSystem.moveAsync(obj1)
//   .then(({ uri }) => {
//     console.log('Finished downloading to ', uri);
//   })
//   .catch(error => {
//     console.error(error);
//   });
  return(
    <View>
      <Text h1>loading</Text>
   
    </View>
  )

}


export default Pdf











// Add flex-rightend to contacts 