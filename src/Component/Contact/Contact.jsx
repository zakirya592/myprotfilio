import React, { useRef,useState,useContext } from 'react';
import { themeContext } from "../../Context";
import './Contact.css';
import emailjs from '@emailjs/browser'; 
import {motion} from 'framer-motion';
import { FcContacts } from 'react-icons/fc';

function Contact() {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // Transition
  const transition = { duration: 4, type: "spring" };
    const form = useRef();
    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ridg5wa', 'template_m1ohiud', form.current, 'yi12WB27thzrSZ6k3')
        .then((result) => {
            console.log(result.text);
            setDone(true);
            form.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <>

     <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        
      <FcContacts className='iconscontact'></FcContacts>
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }} >Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <motion.div initial={{ top: "-4%", right: "40%" }}
          whileInView={{ right: "5%" }}
          transition={transition}
      className="c-right">
        <form  ref={form} onSubmit={sendEmail}>
          <input type="text" required name="user_name" className="user"  placeholder="Enter you Name"/>
          <input type="email" required name="user_email" className="user" placeholder="Enter your Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "purple" }}
          ></div>
        </form>
      </motion.div>
    </div>
    </>
  )
}

export default Contact;