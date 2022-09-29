import React,{ useContext } from 'react';
import { themeContext } from "../../Context";
import {Link} from "react-router-dom";
import './Working.css';
import Upwork from '../../Images/upwork.png';
import Facebook from '../../Images/facebook.png';
import Fiverr from '../../Images/images.jpg';
import Amazon from '../../Images/amazon.webp';
import { motion } from "framer-motion";

function Working() {
   // context
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  // Transition
  const transition = { duration: 4, type: "spring" };
  return (
    <>
     <div className="works container" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text dummy text of printingLorem ispum is simpley dummy text of printing
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        </div>
        {/* Right side */}
        <motion.div
        initial={{ rotate: 45 }}
        whileInView={{ rotate: 0 }}
        viewport={{ margin: "-80px" }}
        transition={{ duration: 3.5, type: "spring" }}
        >
        <div className="w-right">
            <div className='w-mainCircle'>
            <div
            className="w-secCircle">
              <a href=''>
            <img src={Upwork} alt="upwork" width='45px' />
            </a>
          </div>
          <div className="w-secCircle">
            <a href=''>
              <img src={Fiverr} alt="fiverr" width='45px' />
              </a>
            
          </div>
          <div className="w-secCircle">
          <a href=''>
            <img src={Amazon} alt="Amazon" width='45px' />
            </a>
          </div>
          <div className="w-secCircle">
          <a href=''>
            <img src={Facebook} alt="Facebook" width='45px' />
            </a>
          </div>
            </div>
               {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
        </div>
</motion.div>
        </div>
    </>
  )
}

export default Working;