/** @format */

import React from "react";
import "./style.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Signup3 = () => {
  return (
    <>
      <div className='mainbox'>
        <div className='innerbox2'>
          <section className='section1'>
            <div className='signup3content'>
              <h1>Explore the world to experience the beauty of nature</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                lobortis maximus
              </p>
            </div>
            <div className='signupdiv signupbox1'>
              <FcGoogle className='icon' /> <p>Continue with Google</p>
            </div>
            <div className='signupdiv signupbox2'>
              <FaFacebook className='icon' /> <p>Continue with Facebook</p>
            </div>
            <div className='signupdiv signupbox3'>
              <FaApple className='icon' /> <p>Continue with Apple</p>
            </div>
            <div className='or-divider signup3divider'>OR</div>
            <button className='signup3btn'>Signup with Email</button>
            <div className='singup3lastcontent'>
              {" "}
              <p>
                By signing up, you agree to the{" "}
                <a href='#'> Terms of Service </a>
                and <a href='#'> Privacy Policy</a> , including
                <a href='#'> cookie use </a>.
              </p>
            </div>
          </section>
          <section className='section2'></section>
        </div>
      </div>
    </>
  );
};

export default Signup3;
