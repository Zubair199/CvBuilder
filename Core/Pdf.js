import React,{useState,useEffect} from 'react'
import {StyleSheet, View,ActivityIndicator } from 'react-native';
import * as IntentLauncher from 'expo-intent-launcher';
import { Text } from 'galio-framework';
import * as Print from 'expo-print'
import * as FileSystem from 'expo-file-system';

const Pdf = ({route,navigation})=>{

 
  const {email,title,username ,description,phone,address,university,highSchool,school,dateFromS,dateToS,dateToU,dateFromU,dateToH,dateFromH,skills,values,masters,dateToM,dateFromM,layout} = route.params;
  console.log(layout)
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
  let title4 =""
  let tname4 = ""
  let time4s=""
  let time4e=""
  if(masters!==""){
    console.log(masters)
    title1 ="MASTERS:"
    tname1 = masters
    time1s="("+dateFromM.toString().substr(0,7)+"/"
    time1e=dateToM.toString().substr(0,7)+")"
    title2 ="UNIVERSITY:"
    tname2 = university
    time2s="("+dateFromU.toString().substr(0,7)+"/"
    time2e=dateToU.toString().substr(0,7)+")"
    title3 ="HIGH-SCHOOL:"
    tname3 = highSchool
    time3s="("+dateFromH.toString().substr(0,7)+"/"
    time3e=dateToH.toString().substr(0,7)+")"
    title4 ="SCHOOL:"
    tname4 = school
    time4s="("+dateFromS.toString().substr(0,7)+"/"
    time4e=dateToS.toString().substr(0,7)+")"
    console.log(time2s,time2e)
  }
  else if(university!==""&&highSchool!==""){
    console.log(university)
    title1 ="UNIVERSITY:"
    tname1 = university
    time1s="("+dateFromU.toString().substr(0,7)+"/"
    time1e=dateToU.toString().substr(0,7)+")"
    title2 ="HIGH-SCHOOL:"
    tname2 = highSchool
    time2s="("+dateFromH.toString().substr(0,7)+"/"
    time2e=dateToH.toString().substr(0,7)+")"
    title3 ="SCHOOL:"
    tname3 = school
    time3s="("+dateFromS.toString().substr(0,7)+"/"
    time3e=dateToS.toString().substr(0,7)+")"
    console.log(time2s,time2e)
  }
  else if(highSchool!==""){
    title1 =university
    tname1 = university
    time1s=dateFromU
    time1e=dateToU
     title2 ="HIGH-SCHOOL"
     tname2 = highSchool
     time2s=dateFromH+"--"
     time2e=dateToH
     title3 ="SCHOOL"
     tname3 = school
     time3s=dateFromS+"--"
     time3e=dateToS
     console.log(time2s,time2e)
  }


  let set1 = []
  
 
  skills.map((val,index)=>{
    if(index==0){
     set1.push(`<ul class="list-group list-group-horizontal" style="font-size:10px;">`) 
     set1.push(`<li class="list-group-item list-group-item-primary">${val}</li>`)
     if(skills.length<2){
      set1.push(`</ul>`) 
     } 
    }
    else if(index==1){
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
      set1.push(`<ul class="list-group list-group-horizontal" style="font-size:10px;">`) 
     
     set1.push(`<li class="list-group-item list-group-item-primary">${val}</li>`) 
     if(skills.length<6){
      set1.push(`</ul>`) 
     } 
      
    }
    else if(index==5){
      set1.push(`<li class="list-group-item list-group-item-primary ">${val}</li>`) 
      if(skills.length<7){
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
    else if(index==8){
      set1.push(`<ul class="list-group list-group-horizontal" style="font-size:10px;">`) 
      set1.push(`<li class="list-group-item list-group-item-primary">${val}</li>`) 
      if(skills.length<10){
        set1.push(`</ul>`) 
       }
    }
    else if(index==9){
     
      set1.push(`<li class="list-group-item list-group-item-primary">${val}</li>`) 
    
      if(skills.length<11){
        set1.push(`</ul>`) 
       }
    }
    else if(index==10){
      set1.push(`<li class="list-group-item list-group-item-primary">${val}</li>`) 
      if(skills.length<12){
        set1.push(`</ul>`) 
       }
      }
    else if(index==11){
      set1.push(`<li class="list-group-item list-group-item-primary">${val}</li>`) 
      set1.push(`</ul>`) 
    }


   
  
  })


 
  
  let set2 = new Array(values.title.length).fill(0)
 

  console.log(set2)
  let htmlContent
  if(layout=="ESP"){
    htmlContent=  `
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
  
    <div style="border-style:solid;border-width: 0.4px;"  class="container">
  <div class="row">
    <div class="col">
     <h1 style="">${username}</h1>
    </div>
    <div class="col">
    <h6 style="color:grey;text-align:right;padding:8px">${email}<span style="padding-top:0px" class="material-icons">email</span></h6>
    </div>

  </div>
  <div class="row">
    <div class="col">
     <h4 style="color:DodgerBlue;">${title}</h4>
    </div>
    <div class="col">
    <h6 style="color:grey;text-align:right;padding:8px">${phone}<span class="material-icons">
    phone_iphone
    </span></h6>
    </div>
   
  </div>
  <div class="row">
    <div class="col">
    <textarea rows="3"  style="border:0px" cols="25">${description}</textarea>
    </div> 
    <div class="col">
    <h6 style="color:grey;text-align:right">${address}<span class="material-icons">
    home
    </span></h6>
    </div> 
  
    
    <div style="border-style:solid;border-width: 0.4px 0px 0px 0px;" class="row">
    <div style="border-style:solid;border-width: 0px 0.4px 0px 0px;" class="col">
    <h5 ><b><u>Education</u></b></h5>
    <h4 style="color:blue;padding-top:${title1?`12px`:`0px`}">${title1}</h4>
    <h4>${tname1}</h4>
    <h5>${time1s.substr(0,9)}${time1e.substr(0,9)}</h5>
    <h4 style="color:blue;padding-top:12px">${title2}</h4>
    <h4>${tname2}</h4>
    <h5>${time2s}${time2e}</h5>
    <h4 style="color:blue;padding-top:12px">${title3}</h4>
    <h4>${tname3}</h4>
    <h5>${time3s}${time3e}</h5>
    <h4 style="color:blue;padding-top:12px">${title4}</h4>
    <h4>${tname4}</h4>
    <h5>${time4s}${time4e}</h5>

    

    </div>
    
    <div style="text-align: center;" class="col-6">
    <h5 style=""><b><u>Skills</u></b></h5>
    <div class="col" style="padding-right:400px">${set1.map((val)=>{
      return `${val}`
    })}</div>
    
    <h5 style="padding-top:20px"><b><u>Experience/Work-History</u></b></h5>
    
    

    ${set2.map((val,index)=>{
      
      return ` <textarea rows="2" cols="25"  style="border:0px;text-align: center;resize:none;font-size:14px">${values.title[index]}(${values.startDate[index].substr(0,7)}--${values.endDate[index].substr(0,7)})</textarea>
      <textarea rows="4"  style="border:0px;text-align: center;font-size:11px" cols="40">${values.description[index]}</textarea>`
    })}

    </div> 

    </div> 




  </div>
  





  
 
       
    </body>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
    </html>
`;
  }
  else{
    htmlContent=  `
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
  
    <div style="border-style:solid;border-width: 0.4px;"  class="container">
  <div class="row">
    <div class="col">
     <h1 style="">${username}</h1>
    </div>
    <div class="col">
    <h6 style="color:grey;text-align:right;padding:8px">${email}<span style="padding-top:0px" class="material-icons">email</span></h6>
    </div>

  </div>
  <div class="row">
    <div class="col">
     <h4 style="color:DodgerBlue;">${title}</h4>
    </div>
    <div class="col">
    <h6 style="color:grey;text-align:right;padding:8px">${phone}<span class="material-icons">
    phone_iphone
    </span></h6>
    </div>
   
  </div>
  <div class="row">
    <div class="col">
    <textarea rows="3"  style="border:0px" cols="25">${description}</textarea>
    </div> 
    <div class="col">
    <h6 style="color:grey;text-align:right;">${address}<span class="material-icons">
    home
    </span></h6>
    </div> 
  
    
    <div style="border-style:solid;border-width: 0.4px 0px 0px 0px;" class="row">
    <div style="border-style:solid;border-width: 0px 0.4px 0px 0px;text-align:center" class="col">
    <h3 ><b><u>Experience/Project</u></b></h3>
    ${set2.map((val,index)=>{
      
      return ` <textarea rows="2" cols="25"  style="border:0px;color:blue;text-align: center;resize:none;font-size:14px">${values.title[index]}(${values.startDate[index].substr(0,7)}--${values.endDate[index].substr(0,7)})</textarea>
      <textarea rows="4"  style="border:0px;text-align: center;font-size:11px;resize:none" cols="35">${values.description[index]}</textarea>`
    })}
    

    </div>
    
    <div style="text-align: center;" class="col-6">
    <h3 style="">Skills</h3>
    <div class="col" style="padding-right:400px">${set1.map((val)=>{
      return `${val.substr(0)}`
    })}</div>
    
    
    
    <h3 style="padding-top:20px" ><b><u>Education</u></b></h3>
    <h6 style="color:blue;padding-top:${title1?`12px`:`0px`}">${title1}</h6>
    <h6>${tname1}</h6>
    <h6>${time1s.substr(0,9)}${time1e.substr(0,9)}</h6>
    <h6 style="color:blue;padding-top:12px">${title2}</h6>
    <h6>${tname2}</h6>
    <h6>${time2s}${time2e}</h6>
    <h6 style="color:blue;padding-top:12px">${title3}</h6>
    <h6>${tname3}</h6>
    <h6>${time3s}${time3e}</h6>
    <h6 style="color:blue;padding-top:12px">${title4}</h6>
    <h6>${tname4}</h6>
    <h6>${time4s}${time4e}</h6>

    

    </div> 

    </div> 




  </div>
  





  
 
       
    </body>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
    </html>
`;
  }
 

const createPDF = async (html) => {
  try {
      const { uri } = await Print.printToFileAsync({ html });     
        return uri
  }
      catch (err) {
      console.error(err);
  }
};


FileSystem.makeDirectoryAsync(FileSystem.documentDirectory+username,{intermediates:true}).then(res=>{console.log(res)}).catch(err=>console.log(err))




createPDF(htmlContent).then(data=>{

 
 
  
  
  FileSystem.getContentUriAsync(data).then(cUri => {
    console.log(cUri);
    IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
      data: cUri,
      flags: 1,
    }).then(data1=>{console.log(data1)});
  });
  
  
  

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
    <View style={[styles.container]}>
      <Text h4>On This Screen?Press the Back Button on Your Phone</Text>
      <Text h6>Please make sure you are on a stable network!this pdf generator uses Google Icons to generate Icons if you see no icons Please press the back button and submit again </Text>

      
    <ActivityIndicator size="large" color="#00ff00" />
   
    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
 
});

export default Pdf











// Add flex-rightend to contacts 