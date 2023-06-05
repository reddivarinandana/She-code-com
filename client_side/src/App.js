import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { useState } from 'react';

function App() {
  const [islogin, setIsLogin] = useState(false)
  return (
    <div className="App">
      {(!islogin) ?
        <Signup islogin={islogin} setIsLogin={setIsLogin} />
        :
        <Login islogin={islogin} setIsLogin={setIsLogin} />}
    </div>
  );
}

export default App;
