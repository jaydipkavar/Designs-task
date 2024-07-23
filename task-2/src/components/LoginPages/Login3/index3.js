/** @format */

import React, { useState } from "react";
import "./style.css";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
const Login3 = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <div className='navaba w-full h-20 bg-white border-b-4 border-gray-200 '>
        <section className='flex justify-between items-center h-20'>
          <h2 className='ml-10 flex justify-between items-center'>
            <FaArrowLeft className='mr-2' />
            Back
          </h2>
          <h1 className='mr-20'>Create an account</h1>
        </section>
      </div>
      <div className='mainboxlogin3'>
        <section className='leftformsection'>
          <h1 className='w-full text-center text-2xl mb-8'>Log in</h1>
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

            <button className='loginbtn'>Log in</button>
          </form>
        </section>
        <div className='loginor'>OR </div>
        <section className='rightdlinksection'>
          <div className='dlinkbox'>
            <FcGoogle className='mr-3 text-2xl' />
            <p>Continue with Google</p>
          </div>
          <div className='dlinkbox'>
            <FaFacebook className='mr-3 text-2xl' />
            <p>Continue with Facebook</p>
          </div>
          <div className='dlinkbox'>
            <MdEmail className='mr-3 text-2xl' />
            <p>Sign up with Email</p>
          </div>
        </section>
      </div>
    </>
  );
};
export default Login3;
