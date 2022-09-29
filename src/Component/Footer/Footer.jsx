import React, {useContext } from 'react';
import { themeContext } from "../../Context";
import './Footer.css';
import { Link } from "react-scroll";
import { BsFacebook ,BsInstagram} from 'react-icons/bs';
import { AiFillGoogleCircle,AiFillTwitterCircle,AiFillGithub,AiFillLinkedin} from 'react-icons/ai';
function Footer() {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
{/* //   <!-- Footer --> */}
  <footer  className="text-center toper-footer text-white" >
    {/* <!-- Grid container --> */}
    <div className="container-fluid" >
      {/* <!-- Section: Links --> */}
      <section className="mt-5" >
        {/* <!-- Grid row--> */}
        <div className="row text-center d-flex justify-content-center pt-5" >
          {/* <!-- Grid column --> */}
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link className=" text-white " activeClass="active"   spy={true} smooth={true} to="Intro">Home</Link>
            </h6>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
            <Link className="text-white " to="services" activeClass="active" >Service</Link>
            </h6>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
            <Link className="text-white" to="experience" activeClass="active">Expericence</Link>
            </h6>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
            <Link className="text-white" to="experience" activeClass="active">Expericence</Link>
            </h6>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
            <Link className="text-white" to="contact" activeClass="active" >Contact</Link>
            </h6>
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row--> */}
      </section>
      {/* <!-- Section: Links --> */}

      <hr className="my-5" />

      {/* <!-- Section: Text --> */}
      <section className="mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <p>
            I am an Frontend web Developer with high level of experience in web designing and development, producting the Quality work by using react.js
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Section: Text --> */}

      {/* <!-- Section: Social --> */}
     <section className='my-2'>
     {/* <!-- Facebook --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><BsFacebook />
      </a>

      {/* <!-- Twitter --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><AiFillTwitterCircle/></a>

      {/* <!-- Google --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><AiFillGoogleCircle/></a>

      {/* <!-- Instagram --> */}
      <a className="btn btn-outline-light btn-floating m-1" target='_blank' href="https://github.com/zakirya592/" role="button"
        ><BsInstagram/>
      </a>

      {/* <!-- Linkedin --> */}
      <a className="btn btn-outline-light btn-floating m-1" target='_blank' href="https://www.linkedin.com/in/muhammad-zakirya-7b6352246" role="button"
        ><AiFillLinkedin/>
      </a>

      {/* <!-- Github --> */}
      <a className="btn btn-outline-light btn-floating m-1" target='_blank' href="https://github.com/zakirya592/" role="button"
        ><AiFillGithub/>
      </a>
     </section>
      {/* <!-- Section: Social --> */}
    </div>
    {/* <!-- Grid container --> */}

    {/* <!-- Copyright --> */}
    <div
         className="text-center footer-bottom p-1"
         >
      © 2022 Copyright : 
      <a className=" email-footer" href="https://mdbootstrap.com/"> muhammadzakirya592@gmail.com</a>
    </div>
    {/* <!-- Copyright --> */}
  </footer>
{/* // <!-- End of .container --> */}
    </>
  )
}

export default Footer