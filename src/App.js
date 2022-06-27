import React, {useState} from "react";
import './App.css';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from './Components/Footer';
import Info from './Components/Info';
import NavBar from './Components/NavBar';
import SliderPlay from './Components/SliderPlay';
import SignUp from "./Components/SignUp";
import AboveFooter from "./Components/AboveFooter";
import Login2 from "./Components/Login2";
import BelowSearchBar from './Components/BelowSearchBar'

function App() {
  const [signUp, setsignUp] = useState(false)
  const [logIN, setlogIN] = useState(false)

  const handleSignUp=()=>{
    setsignUp(true)
    console.log(signUp)
  }
  const handleLogIn=()=>{
    setlogIN(true)
    console.log(logIN)
  }

  return (
    <>
    <BrowserRouter>
    <div className='lg:m-1/3 xl:m-1/2'>
    {<NavBar Click={handleSignUp} ClickLogIn={handleLogIn}/> }
    {!signUp || logIN ?  
      <Routes>
        <Route exact path="/login" element={<Login2/>} />
      </Routes> : null
      }
      {!signUp && <BelowSearchBar/>}
      <Routes>
        <Route exact path="/signup" element={<SignUp/>} />
      </Routes>
      {!signUp &&  <Info/>}
      {!signUp &&  <SliderPlay/>}
      {!signUp &&  <AboveFooter/>}
      {!signUp &&  <Footer/>}
      </div> 
    </BrowserRouter>
    </>
  );
}

export default App;
