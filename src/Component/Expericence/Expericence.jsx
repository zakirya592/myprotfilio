import React, { useRef,useState,useContext } from 'react';
import { themeContext } from "../../Context";
import './Expericence.css'

function Expericence() {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'orange':''}}>1+</div>
        <span style={{ color: darkMode ? "white" : "" }}>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'orange':''}}>4+</div>
        <span style={{ color: darkMode ? "white" : "" }}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'orange':''}}>1+</div>
        <span style={{ color: darkMode ? "white" : "" }} >companies </span>
        <span>Work</span>
      </div>
    </div>
    </>
  )
}

export default Expericence;