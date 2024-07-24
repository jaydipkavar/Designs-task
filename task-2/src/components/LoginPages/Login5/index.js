/** @format */

import React, { useState } from "react";
import Nav from "../../Nav";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./style.css";
import Footer from "../../Footer";

const Login5 = () => {
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
              <li className='bg-white text-black rounded-xl border border-black px-8 py-3 mr-8'>
                <button className='flex justify-center items-baseline'>
                  <FaUser className='mr-2' />
                  Sign in or create an account
                </button>
              </li>
            </ul>
          </>
        }
      />
      <div className='mainboxlogin5'>
        <section className='innersection flex justify-center items-center'>
          <div className='w-2/4 flex flex-col justify-center items-center p-8'>
            <section className='w-4/5'>
              <h1 className='text-left mb-4 font-medium text-3xl'>Sign In</h1>
              <p className='text-right w-full mb-4'>
                {" "}
                <a href='#' className='underline font-bold'>
                  Reset Password
                </a>
              </p>
              <form className='w-full'>
                <div className='mb-4'>
                  <label>Email</label>
                  <input
                    type='text'
                    className='w-full p-2 border border-gray-300 rounded'
                  />
                </div>
                <div className='mb-4'>
                  <label className='flex justify-between items-center'>
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
                <button
                  type='submit'
                  className='w-full flex justify-center items-center p-4 border border-black rounded-full mb-4 text-xl mt-8'
                >
                  Sign In
                </button>
              </form>
              <div className='or-divider mb-4'>
                <span>OR</span>
              </div>
              <div className='w-full flex justify-center items-center p-4 border border-black rounded-full cursor-pointer text-xl'>
                <FcGoogle className='icon mr-3' /> Continue with Google
              </div>
              <p className='mt-6'>
                By continuing, you agree to the{" "}
                <a href='#' className='underline ml-1 font-semibold'>
                  Terms of use
                </a>{" "}
                and
                <a href='#' className='underline font-semibold ml-1'>
                  Privacy Policy
                </a>
                .
              </p>
            </section>
          </div>
          <div className='absolute left-50% top-0 bottom-0 w-1 bg-neutral-200'></div>
          <div className='w-1/2 flex flex-col justify-center items-center'>
            <section className='w-3/4 mb-4'>
              <h1 className='text-left mb-2 text-3xl text-neutral-600 font-semibold'>
                Create an account
              </h1>
              <p className='mb-4 text-neutral-500'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                lobortis maximus.
              </p>
            </section>
            <ul className='w-4/6 flex flex-col justify-center items-center mt-3 mb-4 gap-4'>
              {Array(5)
                .fill()
                .map((_, index) => (
                  <li
                    key={index}
                    className='w-full mb-2 list-disc text-neutral-500'
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi lobortis maximus.
                  </li>
                ))}
            </ul>
            <button className='p-4 mt-7 w-2/3 text-2xl bg-black border text-white border-black rounded-full'>
              Create an account
            </button>
          </div>
        </section>
      </div>
      <div className='flex justify-center items-center w-full flex-col'>
        {" "}
        <Footer />
      </div>
    </>
  );
};

export default Login5;
