import React , { useContext }  from 'react';
import "./Toggle.css";
import { BsFillMoonFill ,BsFillSunFill} from 'react-icons/bs';
import { themeContext } from "../../Context";

function Toggle() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
        // debugger
        theme.dispatch({ type: "toggle" });
        console.log('click to ');
      };
  return (
   <>
   <div className="toggle" onClick={handleClick}>
   <BsFillMoonFill/>
   <BsFillSunFill/>

   <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>

   </div>
   </>
  )
}

export default Toggle;