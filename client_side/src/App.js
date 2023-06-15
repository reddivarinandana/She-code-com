import './App.css';
 import Signup from './Components/Signup';
 import Login from './Components/Login';
import { useState } from 'react';
import ForgotPage from './Components/Forgotpage';
import HomePage from './Components/Homepage';
import Tutorial from './Components/Tutorialpage';
   import Video from './Components/Videos';
  import OneConcept from './Components/oneTutorial';
import TestPage from './Components/Testpage';
  import Introduction from './Components/introtopython';
 import Syntax from './Components/syntaxinpython';

 function App() {
   const [islogin, setIsLogin] = useState(false);
   const [isforgot, setIsForgot] = useState(false);
   return (
     <div className="App">
       {
         (islogin && isforgot === false) ? <Login islogin={islogin} setIsLogin={setIsLogin} setIsForgot={setIsForgot} /> : (isforgot) ? <ForgotPage setIsLogin={setIsLogin} setIsForgot={setIsForgot}/>: <Signup islogin={islogin} setIsLogin={setIsLogin} />
       }
       <br/>
       <HomePage/>  
       <br/>
       <Tutorial/>
      <br/>
      <Video/>
      <br/>
      <TestPage/> 
      <br/>
      <Introduction/>
      <br/>
      <Syntax/>
    </div>
  );
}

export default App;
