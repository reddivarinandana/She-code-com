import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { useState } from 'react';
import ForgotPage from './Components/Forgotpage';
import HomePage from './Components/Homepage';

function App() {
   const [islogin, setIsLogin] = useState(false);
  const [isForgot,setIsForgot] = useState(false);
   return (
    <div className="App">
       {(!islogin) ?
         <Signup islogin={islogin} setIsLogin={setIsLogin} />
         :
         <Login islogin={islogin} setIsLogin={setIsLogin} />} 

         <ForgotPage/>

          {/* {(!isForgot)?
              <Login islogin ={islogin} setIsLogin={setIsLogin}/>
              :
              <ForgotPage isForgot={isForgot} setIsForgot={setIsForgot}/>
              
          } */}
          <HomePage/>
      </div>
  );
}

export default App;
