/** @format */

import React, { useState } from "react";
import "./style.css";
import Nav from "../../Nav";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { IoMdLock } from "react-icons/io";
const Login2 = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <Nav />
      <div className='mainboxlogin2'>
        <section className='centerlogin2box'>
          <h1>Log in</h1>
          <p className='text-gray-500 mb-8'>
            New to Design space?
            <a href='#' className='underline text-black ml-1'>
              Sign up for free
            </a>
          </p>
          <div className='login2formsection'>
            <form>
              <div>
                <label className='flex justify-between items-center mb-1'>
                  Email address
                </label>
                <input type='text' />
              </div>
              <div>
                <label className='flex justify-between items-center mb-1'>
                  Password
                  <span
                    className='flex items-center gap-2 cursor-pointer'
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                    {passwordVisible ? "Hide" : "Show"}
                  </span>
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  className='w-full p-2 border border-gray-300 rounded'
                />
              </div>
              <p>
                <a href='#' className='underline'>
                  Forgot password?
                </a>
              </p>
              <button className='loginbtn'>Log in</button>
            </form>
            <section className='dlinks flex justify-between  mt-6'>
              <div className='iconbox'>
                <FaFacebook />
              </div>
              <div className='iconbox'>
                <FaApple />
              </div>
              <div className='iconbox'>
                <FcGoogle />
              </div>
              <div className='iconbox'>
                <BsTwitter />
              </div>
            </section>
            <button className='ssobtn mt-6'>
              <IoMdLock className='mr-2 text-2xl' />
              Log in With SSO
            </button>
          </div>
        </section>
      </div>
    </>
  );
};
export default Login2;
