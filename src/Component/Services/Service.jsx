import React,{ useContext } from 'react';
import { themeContext } from "../../Context";
import './Service.css';
import cv from '../../Images/CV.pdf'
import HeartEmoji from '../../Images/Heart.jpg'
import Card from '../../Component/Card/Card';
import {motion} from 'framer-motion';
function Service() {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // Transition
  const transition = { duration: 4, type: "spring" };
  return (
    <>
     <div className="services container" id="services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        <a href={cv} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right */}
      <div className="cards" >
          {/* First card */}
          <motion.div
           initial={{ left: "20rem" }}
           whileInView={{ left: "25rem" }}
           transition={transition}
          >
          < Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Adobe Photoshop, Adobe Illustrator, "}
          />
          </motion.div>
           {/* 2nd card */}
           <motion.div
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
          >
           <Card
            emoji={HeartEmoji}
            heading={"Developer"}
            detail={"HTML, CSS, javascript,Bootstrap React js,and wordpress"}
          />
          </motion.div>

      </div>
      </div>
    </>
  )
}

export default Service;