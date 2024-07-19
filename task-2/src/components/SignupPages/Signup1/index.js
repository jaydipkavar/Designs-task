/** @format */

import React from "react";
import logo from "../../../assets/images/1.png";
import { FcGoogle } from "react-icons/fc";
import "./style.css";
function Signup1() {
  return (
    <>
      <div className='mainbox'>
        <div className='innerbox'>
          <section className='section1'>
            <div className='contentdiv'>
              {" "}
              <h1>Design with us to unlock your creativity </h1>
              <h3>Access to thousands of design resources and templates</h3>
            </div>
            <div className='signupdiv '>
              <FcGoogle className='icon' /> Sign up with your Google account
            </div>
            <div className='or-divider'> OR</div>
            <div className='inputdiv'>
              <input type='text' placeholder='Email Address' />
              <button type='button'>Sing up</button>
            </div>
            <p>
              By signing up, you agree to the <a href='#'>Terms of use</a> and{" "}
              <a href='#'>Privacy Policy</a>
            </p>
          </section>
          <section className='section2'>
            <img src={logo} alt='Design resources' />
          </section>
        </div>
      </div>
    </>
  );
}

export default Signup1;
