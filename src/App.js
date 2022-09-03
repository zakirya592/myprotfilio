import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './Component/Navbar/Navbar.jsx'
import Intro from './Component/Intro/Intro.jsx';
import Service from './Component/Services/Service.jsx';
import Expericence from './Component/Expericence/Expericence';
import Working from './Component/Working/Working';
import Silder from './Component/Silder/Silder.jsx';
import Testimonial from './Component/Testimonial/Testimonial.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Footer from './Component/Footer/Footer.jsx';
import { themeContext } from './Context';
import { useContext } from "react";
import Contacts from './Component/Contact/Contacts';

function App() {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
     <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
    <Navbar/>
    <Intro/>
    <Service/>
    <Expericence/>
    <Working/>
    <Silder/>
    <Testimonial/>
    <Contact/>
    <Contacts/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
