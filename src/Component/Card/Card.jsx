import React,{ useContext } from 'react';
import { themeContext } from "../../Context";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
   // context
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="emoji" />
      <span style={{ color: darkMode ? "white" : "" }}>{heading}</span>
      <span style={{ color: darkMode ? "white" : "" }}>{detail}</span>
      <button className="c-button" >LEARN MORE</button>
    </div>
  );
};

export default Card;