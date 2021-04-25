import 'react-native';
import React from 'react'
import Signin from "../Core/SignIn"
import {render,act,fireEvent} from '@testing-library/react-native'
//import {shallow,mount} from "enzyme"

const mockNavigation = {
  navigate: jest.fn(),
  // it should also have 
  addListener: jest.fn()
};

describe('<Sign In Component />', () => {
  const expectedResponse = {
        
    _id: "607a0112a3c780495cb8fc44",
    username: 'zubair',
    email: 'zubairaslam2014@gmail.com',
   
  
}
  it("testaction",async() => {
    
 
    //const onPress =jest.fn()
   

    const {getByTestId } = render(<Signin navigation={mockNavigation}/>)
    const password = getByTestId("passwordId")
    
    const email = getByTestId("emailId")
    
    const signInButton = getByTestId("buttonId");
 
      
     //Here values set in each textInput
      fireEvent.changeText(password, 'asd1asd');
 
      fireEvent.changeText(email, 'zubairaslam2014@gmail.com');
     
    
    
     // //Here button createCv is fired and response taken in const
     try{
      const val = await fireEvent.press(signInButton)
      expect(val.data.user).toEqual(expectedResponse);
     }
       catch(e){
        if(e.response){
          console.log(e.response.data.error)
          fail(e)
        }
       }
      
      
     //Here response is matched with real response
     
           
    })
    
    

  });

 //Here Id's are set to call respective textInput
 
   
    
  
