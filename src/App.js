import React,{useState} from 'react';
import Login from './Test/LoginScreen';
import AgeCalculator from './Test/AgeCalculator';

const App = () => {
  const [isLoggedin, setIsLogin] = useState(false);

  return (
    <div>
      {isLoggedin ? (<AgeCalculator />) : (<Login onLoginSuccess={() => setIsLogin(true)} />) } 
     
    </div>
    
  );
};

export default App;
