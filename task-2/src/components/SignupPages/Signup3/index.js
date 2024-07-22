/** @format */

import React from "react";
import "./style.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Nav from "../../Nav";

const Signup3 = () => {
  return (
    <>
      <Nav
        content={
          <ul className='navbar'>
            <li class='language-selector'>
              <select>
                <option value='en'>English (united state)</option>
                <option value='gu'>Gujarati</option>
                <option value='hi'>Hindi</option>
              </select>
            </li>
            <li class='login-button'>
              <button>Log in</button>
            </li>
          </ul>
        }
      />
      <div className='mainbox'>
        <div className='innerbox2'>
          <section className='section1'>
            <div className='innersection'>
              {" "}
              <div className='signup3content'>
                <h1>Explore the world to experience the beauty of nature</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  lobortis maximus
                </p>
              </div>
              <div className='dlinkuse'>
                <div className='signupdiv signupbox1'>
                  <FcGoogle className='icon' /> <p>Continue with Google</p>
                </div>
                <div className='signupdiv signupbox2'>
                  <FaFacebook className='icon' /> <p>Continue with Facebook</p>
                </div>
                <div className='signupdiv signupbox3'>
                  <FaApple className='icon' /> <p>Continue with Apple</p>
                </div>
              </div>
              <div className='or-divider signup3divider'>OR</div>
              <button className='signup3btn'>Signup with Email</button>
              <div className='singup3lastcontent'>
                <p>
                  By signing up, you agree to the{" "}
                  <a href='#'> Terms of Service </a>
                  and <a href='#'> Privacy Policy</a> , including
                  <a href='#'> cookie use </a>.
                </p>
              </div>
            </div>
          </section>
          <section className='section2'></section>
        </div>
      </div>
    </>
  );
};

export default Signup3;
