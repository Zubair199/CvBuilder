import 'react-native';
import React from 'react'
import Form from "../Core/Form"
import {render,fireEvent} from '@testing-library/react-native'

const mockNavigation = {
  navigate: jest.fn(),
  // it should also have 
  addListener: jest.fn()
};

describe('<Form Component />', () => {
  const expectedResponse = {
        
   
    username: 'zubair',
    email: 'zubairaslam2014@gmail.com',
    phone: '03368458820',
    description: 'Seeking a professional position to incorporate my strong analytical problem-solving skills tocreate smart solutions',
    skills:["c++","java","kotlin","nodejs","c++","java","kotlin","nodejs","c++","java","kotlin","nodejs"],
    projects:{ title:["project 1"],
      description:["cross platform desktop application using Electron powered by mysql server that keeps tracks of staff diagnostics aswell as workers , manages medicines for prescription and reciept printing with history for each patient especially made to cater SESSI organisation"],
      startDate:["09/2021"],
      endDate:["09/2021"]
    },
    address:"133-B-Block-2-Pechs",
    school:"habib public School",
    university:"Fast University",
    masters:"Fast University",
    dateFromS:"09/2021",dateToS:"09/2021",dateToU:"09/2021",dateFromU:"09/2021",dateToM:"09/2021",dateFromM:"09/2021",dateToH:"09/2021",dateFromH:"09/2021",
    highSchool:"habib high School",
    user:"607a0112a3c780495cb8fc44"
}
  it("testaction",async() => {
    //const onPress =jest.fn()
    const {getByTestId} = render(<Form navigation={mockNavigation}/>)
    //const handleClick = jest.spyOn(React, "useState");
   const email =getByTestId("emailId")
  const title = getByTestId("titleId")
  const username= getByTestId("usernameId")
  const description= getByTestId("descriptionId")
  const school= getByTestId("schoolId")
  const address= getByTestId("addressId")
  const highSchool= getByTestId("highSchoolId")
  const university= getByTestId("universityId")
  const masters= getByTestId("mastersId")
  const phone= getByTestId("phoneId")
  const skills=getByTestId("skillsId")
  const expT=getByTestId("extitleId")
  const expD=getByTestId("exdescriptionId")
  const FormButton = getByTestId("buttonId");

  //Here values set in each textInput
  fireEvent.changeText(username, 'zubairaslam');
  fireEvent.changeText(email, 'zubairaslam2014@gmail.com');
  fireEvent.changeText(title, 'Software Engineer');
  fireEvent.changeText(description, 'Seeking a professional position to incorporate my strong analytical problem-solving skills tocreate smart solutions');
  fireEvent.changeText(phone, "03368458820");
  fireEvent.changeText(address, '133-B-Block-2-Pechs');
  fireEvent.changeText(school, 'habib public School');
  fireEvent.changeText(university, 'Fast University');
  fireEvent.changeText(masters, 'Fast University');
  fireEvent.changeText(highSchool, 'habib high School');
  fireEvent.changeText(skills, "c++,java,kotlin,nodejs,c++,java,kotlin,nodejs,c++,java,kotlin,nodejs");
  fireEvent.changeText(expT, "project 1");
  fireEvent.changeText(expD,"cross platform desktop application using Electron powered by mysql server that keeps tracks of staff diagnostics aswell as workers , manages medicines for prescription and reciept printing with history for each patient especially made to cater SESSI organisation");

    
    
     //Here button createCv is fired and response taken in const
     try{
      const val = await fireEvent.press(FormButton)
      expect(val.data.resume).toEqual(expectedResponse);
     }
     catch(e){
       if(e.response){
         console.log(e.response.data)
         fail(e)
       
       }
     } 
     //Here response is matched with real response
    })
    
    

  });

 //Here Id's are set to call respective textInput
 
   
    
  
