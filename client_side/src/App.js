import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { useState } from 'react';
import ForgotPage from './Components/Forgotpage';
import HomePage from './Components/Homepage';

function App() {
  const [islogin, setIsLogin] = useState(false);
  const [isforgot,setIsForgot] = useState(false);
   return (
    <div className="App">
       {(!islogin) ?
         <Signup islogin={islogin} setIsLogin={setIsLogin} />
         :
         <Login islogin={islogin} setIsLogin={setIsLogin} />}  

          <ForgotPage/>
          {/* (!islogin) ? (!isforgot) ? <Signup islogin={islogin} setIsLogin={setIsLogin} setIsForgot={setIsForgot} />: <ForgotPage setIsForgot={setIsForgot}/>:<Login islogin={islogin} setIsLogin={setIsLogin}/> */}

          {(!isforgot)?
              <Login islogin ={islogin} setIsLogin={setIsLogin}/>
              :
              <ForgotPage isforgot={isforgot} setIsForgot={setIsForgot}/>
              
          }
          <HomePage/>
      </div>
  );
}

export default App;
