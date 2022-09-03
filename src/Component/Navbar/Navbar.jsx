import React, {useState,useEffect } from "react";
import "./Navbar.css";
import { AiFillGoogleCircle,AiFillTwitterCircle,AiFillGithub,AiFillLinkedin} from 'react-icons/ai';
import Scroll from 'react-scroll';
import { Link } from "react-scroll";
import {Routes, Route} from "react-router-dom";
import Toggle from "../Toggle/Toggle";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,FacebookAuthProvider ,GithubAuthProvider ,sendEmailVerification ,RecaptchaVerifier  } from "firebase/auth";
import { auth } from "../firebase-config";
const Navbar = () => {
    const [createmail,setcreatemail]=useState();
    const [creatpassword,setcreatpassword]=useState();
    const [Logemail,setLogemail]=useState("");
    const [Logpassword,setLogpassword]=useState("");
    const [cPassword, setCPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [cPasswordClass, setCPasswordClass] = useState('form-control');
    const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

// Login section in firebase 
    const logined =async (e)=>{
        e.preventDefault();
        console.log(Logemail,Logpassword);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, Logemail, Logpassword).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            toast.success('You hava successfull Login ', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // alert(error.message);
            toast.error(`THe error due to ${error.message}`, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            // ..
          });
        

    }

// Singup section in firebase 
   const singuped =async (e)=>{
    e.preventDefault();
    console.log("clicked");
    console.log(createmail,creatpassword);
    const auth = getAuth();
    
    createUserWithEmailAndPassword(auth, createmail, creatpassword).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        sendEmailVerification(auth.currentUser).then(() => {
    // Email verification sent!
    // ...
  });
        // ...
        toast.success('You hava successfull created Account', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // alert(error.message);
        toast.error(`You hava not created acoount due to  ${error.message}`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        // ..
      });
   }
//    Login with google
const singupgoogle= async (e)=>{
    e.preventDefault();
    const provider=new GoogleAuthProvider;
    signInWithPopup(auth, provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    toast.success('You hava successfull Sing UP', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    
}
// //    Singup with fackbook
 const singupfackbook=()=>{
    const providers = new FacebookAuthProvider();
    signInWithPopup(auth, providers)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
  
      // ...
    });
 }  
//    Login with github
const github=()=>{
    const providered = new GithubAuthProvider();
    signInWithPopup(auth, providered)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });

}
//    Password & Confirm Password Matching Functionality
   useEffect(() => {
    if (isCPasswordDirty) {
        if (creatpassword === cPassword) {
            setShowErrorMessage(false);
            setCPasswordClass('form-control is-valid')
        } else {
            setShowErrorMessage(true)
            setCPasswordClass('form-control is-invalid')
        }
    }
}, [cPassword])
// Confirm password
   const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setIsCPasswordDirty(true);
}

  return (
   <>
  
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark  position-sticky">
        <div className="container position-sticky">
            <a className="navbar-brand" href="#">CheatSheet</a>
           
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-1 ml-5">
                <Toggle/>
                    {/* Home navbar */}
                    <li className="nav-item">
                        <Link className="nav-link " activeClass="active"   spy={true} smooth={true} to="Intro">Home</Link>
                    </li>
                       {/* Service navbar */}
                    <li className="nav-item">
                        <Link className="nav-link" to="services" activeClass="active" spy={true} smooth={true}>Service</Link>
                    </li>
                    {/* Expericence navbar */}
                    <li className="nav-item">
                        <Link className="nav-link" to="experience" activeClass="active" spy={true} smooth={true}>Expericence</Link>
                    </li>
                   {/* Working navbar */}
                    <li className="nav-item">
                        <Link className="nav-link" to="works" activeClass="active" spy={true} smooth={true}>works</Link>
                    </li>
                    {/* Silder navbar */}
                    <li className="nav-item">
                        <Link className="nav-link" to="portfolio" activeClass="active" spy={true} smooth={true}>portfolio</Link>
                    </li>
                     {/* Testimonial navbar */}
                     <li className="nav-item">
                        <Link className="nav-link" to="testimonial" activeClass="active" spy={true} smooth={true}>Testimonial</Link>
                    </li>
                     {/* Contact navbar */}
                     <li className="nav-item">
                        <Link className="nav-link" to="contact" activeClass="active" spy={true} smooth={true}>Contact</Link>
                    </li>

                </ul>
                
                <div className="text-end d-flex mt-md-2 mt-3">
                <button type="button" className="btn btn-outline-light me-2 ">Contact us</button>
                    <button type="button" className="btn btn-outline-light me-2 " data-bs-toggle="modal"
                        data-bs-target="#loginModal">Login</button>
                    <button type="button" className="btn btn-warning" data-bs-toggle="modal"
                        data-bs-target="#signupModal">Sign-up</button>
                </div>
            </div>
        </div>
    </nav>
  
    {/* <!-- Modal section for the login and sing  --> */}
<div className="main">
    {/* <!-- Modal login --> */}
    <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="loginModalLabel">login</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {/* <form > */}
                        <div className="mb-3">
                            <label htmlFor="Loginemail" className="form-label text-left">Email address</label>
                            <input type="email" value={Logemail} onChange={(e)=>setLogemail(e.target.value)} className="form-control" id="Loginemail"
                                aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text text-left">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label text-left">Password</label>
                            <input type="password" value={Logpassword} onChange={(e)=>setLogpassword(e.target.value)}  className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="text-start" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={logined} >Submit</button>
                        <button type="submit" className="btn btn-primary mx-3" onClick={singupgoogle}>Google</button>
                        <button type="submit" className="btn btn-primary mx-2" onClick={singupfackbook} >Fackbook</button>

      <button className="btn btn-outline-dark btn-floating m-1" onClick={github} role="button"
        ><AiFillGithub/></button>
                      
                   
                    {/* </form> */}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Modal Sing-up --> */}
    <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="signupModalLabel">Sign-up</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {/* <form> */}
                        <div className="mb-3">
                            <label htmlFor="text" className="form-label">UserName</label>
                            <input type="text" className="form-control" placeholder="Enter you Username" id="text"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email"  value={createmail} onChange={(e)=>setcreatemail(e.target.value)} className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Enter you email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pInputPassword1" className="form-label">Password</label>
                            <input type="password"  value={creatpassword} onChange={(e)=>setcreatpassword(e.target.value)} className="form-control" placeholder="Enter you password"
                                id="pInputPassword1"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label">ConformPassword</label>
                            <input type="password" value={cPassword} onChange={handleCPassword}   className="form-control" placeholder="Enter you ConformPassword"
                                id="cInputPassword1"/>
                        </div>
                        {showErrorMessage && isCPasswordDirty ? <div> Passwords did not match </div> : ''}

                        <button type="submit" className="btn btn-primary" onClick={singuped}>SIGN_UP</button>
                        <button type="submit" className="btn btn-primary mx-3" onClick={singupgoogle}>Google</button>
                    {/* </form> */}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <ToastContainer />
    </div>
   </>
  );
};

export default Navbar;