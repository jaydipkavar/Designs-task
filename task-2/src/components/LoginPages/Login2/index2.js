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
      <Nav
        leftcontent={
          <ul className='flex justify-evenly items-center gap-6'>
            <li className='text-xl'>Home</li>
            <li className='text-xl text-neutral-500'>Web designs</li>
            <li className='text-xl text-neutral-500'>Mobile designs</li>
            <li className='text-xl text-neutral-500'>Design principles</li>
            <li className='text-xl text-neutral-500'>illustrations</li>
          </ul>
        }
        content={
          <>
            <ul className='navbar flex justify-evenly items-center gap-6'>
              <li className='language-selector'>
                <select>
                  <option value='en'>English (united state)</option>
                  <option value='gu'>Gujarati</option>
                  <option value='hi'>Hindi</option>
                </select>
              </li>
              <li className='bg-white hover:bg-green-900 hover:text-white ease-in-out duration-300 text-black rounded-xl border border-black px-8 py-3'>
                <button>Log in</button>
              </li>
              <li>
                <button className='bg-black text-white rounded-2xl border px-8 py-4 mr-8'>
                  Start free trail
                </button>
              </li>
            </ul>
          </>
        }
      />
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
            </form>
            <button className='loginbtn'>Log in</button>
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
