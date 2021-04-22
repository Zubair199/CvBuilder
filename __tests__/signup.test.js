import 'react-native';
import React from 'react'
import SignUp from "../Core/SignUp"
import {render,act,fireEvent} from '@testing-library/react-native'
//import {shallow,mount} from "enzyme"
describe('<Sign UP Component/>', () => {
  const expectedResponse = {
        
    
    username: 'zubair1200',
    email: 'zubairaslam1200@gmail.com',
   
  
}
  it("testaction",async() => {
    
 
    //const onPress =jest.fn()
   

    const {getByTestId } = render(<SignUp/>)
      const password = getByTestId("passwordId")
      const email = getByTestId("emailId")
      const username = getByTestId("usernameId")
      const signUpButton = getByTestId("buttonId");
 
      
     //Here values set in each textInput
       fireEvent.changeText(password, 'asd1asd');
       fireEvent.changeText(email, 'zubairaslam1200@gmail.com');
       fireEvent.changeText(username, 'zubair1200');
       
     
    
     // //Here button createCv is fired and response taken in const
     try{
      const val = await fireEvent.press(signUpButton)
      const response = {
        username:val.data.user.username,
        email:val.data.user.email,
        
       }
       console.log(response)
        expect(response).toEqual(expectedResponse);
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
 
   
    
  
