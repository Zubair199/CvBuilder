# CvBuilder

Cv Builder
A Cv Builder app based on React Native running on a NODEJs server with MongoDb database. Express is used to create REST APIs. You can create a RESUME which will be instantly displayed to you on pdf viewer as i am using Intent which is specifically for Android devices.
  
Pre Requirements:
1: need to install mongodb locally on the device from : https://www.mongodb.com/try/download/community 
2: need to have node js installed : https://nodejs.org/en/


Installation & usage
follow the steps:
1: you need to Clone the project 

2: run terminal in the project root folder and enter the following command : npm install // to download the node packages

3: open another terminal in the root folder and enter "cd Server" to go the the server root folder

4: now enter npm start to start the server along with the expo server and you can run the app in any device having expo app init

Note:
Make sure to replace the IP address in the API/CoreApis.js file in the root folder of the cloned project ,calls located in 'Core/Signin.js',Core/Signup and 'Core/LandingPage' to the IP address of your machine (you can view it using 'ipconfig' in your command prompt). I have set the default port to 8088 you can change it in the 'Server/server.js'.

npm start
This opens up the expo environment in the browser you can scan the QR-code from the expo app installed in your device (scan using the camera app in iOS device) which initiates the app on your device.

Ándroid Testing:
App has been tested on Android and found to be working consistently.
Ios Testing :
App has been tested on Android and found to be working consistently but does not show the pdf as Intent is not available for ios.

Testing:

Test for Signin.js ,SignUp.js and Form.js component is written using JEST framework you can run it in the terminal using the command:
For Testing Sign Up and Sign In Using Jest & react-testing-library You will need to comment out navigation.addListner Event Handler,
as during testing rendering the component Will lead to errors otherwise everything is running perfectly


npm run test







