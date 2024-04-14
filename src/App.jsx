import "./App.css";
import Login from "./Components/Login/Login.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import { useState } from "react";
//Import route và routes để render element phù hợp với đường dẫn
import { Route,Routes } from "react-router-dom";
function App() {

  return (
    <div>
      <Routes>
        {/* kiểm tra và render element phù hợp với route  */}
         <Route path='/' element = {<Login/>} />
         <Route path='/signup' element = {<SignUp/>} />
         <Route path='/signup' element = {<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
