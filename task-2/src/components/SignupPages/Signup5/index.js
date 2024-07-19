/** @format */

import React from "react";
import "./style.css";
import { FcGoogle } from "react-icons/fc";

const Signup5 = () => {
  return (
    <div className='mainbox signup5box'>
      <section className='section1'>
        <h1>Sign up for free</h1>
        <p>Full access to in any of our products</p>
        <input type='text' placeholder='Enter your email address' />
        <button>Continue</button>
        <h2>OR</h2>
        <div className='signupdiv signupbox1'>
          <FcGoogle className='icon' /> <p>Continue with Google</p>
        </div>
      </section>
      <section className="section2">
        <h1>Travel with us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia mollitia
          provident et molestias ipsam fuga pariatur maiores, optio, unde sit
          doloremque, molestiae aut! Quos beatae quibusdam omnis temporibus
          blanditiis sapiente
        </p>
      </section>
    </div>
  );
};

export default Signup5;
