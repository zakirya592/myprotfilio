import React, { useContext } from "react";
import "./Intro.css";
import {Link} from "react-router-dom";
import Floating from'../Floating/Floating';
import crown from '../../Images/download.jpg';
import like from '../../Images/like.jpg';
import {motion} from 'framer-motion';
import { themeContext } from "../../Context";
const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // Transition
  const transition = { duration: 4, type: "spring" };

  return (
    <div className="Intro container" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "black" }}>Hy! I Am</span>
          <span>Muhammad zakirya</span>
          <span>
           I am an Frontend web Developer with high level of experience in web designing
            and development, producting the Quality work by using react.js
            I am an Frontend web Developer using react.js to be discrete , almost one years experience a CodeCue solution , While i pursue my "BS" i Software engineering at University of Haripur.I love to learn new skill and already khow HTML ,CSS,JavaScript Bootstrap,and wordprees but my fiverty is 'react.js '. AS determined young  developer as i am,who is starting but i assure you a greatly satisfied poece of work .if you are looking for someone with my set of skill,you khow where to fine me.
            Thank you
          </span>
        </div>
        <Link to="contact" download smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
        <a href="https://github.com/zakirya592/" target='_blank'><img src="https://i.ibb.co/P16FMZn/9919.png" alt="gethub" border="0" width="50px"/></a>
        <a href="https://www.linkedin.com/in/muhammad-zakirya-7b6352246"target='_blank'><img src="https://i.ibb.co/k5r4Tr9/363-3632986-logo-linkedin-png-rond-transparent-png.png" alt="Linkden" border="0" width="50px"/></a>
         <a href="https://www.instagram.com/zakirya.m/" target="_blank"><img src="https://i.ibb.co/G3bCGdD/Instagram-logo-2016-svg.webp"
        width="50px" alt="Instagram"/></a>

        </div>
      </div>
{/* Right side */}
      <div className="i-right">
          <div className='image'>
          <img src="https://i.ibb.co/g4pvJWR/myphoto1.png" alt="myphoto"  border="0"/>
          </div>
          {/* First card */}
          <motion.div  initial={{ top: "-4%", left: "80%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div">
          <Floating img={crown}  text1="react.js" text2="Developer" />
          </motion.div>
          {/* Second card */}
          <motion.div  initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div">
          <Floating img={like}  text1="Web" text2="Developer" />
          </motion.div>
        </div>
      
    </div>
  );
};

export default Intro;