import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from './Components/Footer';
import Info from './Components/Info';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import SliderPlay from './Components/SliderPlay';
import SignUp from "./Components/SignUp";
import AboveFooter from "./Components/AboveFooter";

function App() {
  return (
    <>
    <BrowserRouter>
    <div className='lg:m-1/3 xl:m-1/2'>
    <NavBar/>
    <Routes>
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
      <SearchBar/>
      <Info/>
      <SliderPlay/>
      <AboveFooter/>
      <Footer/>
      </div>
      
    </BrowserRouter>
    
    </>
  );
}

export default App;
