/** @format */

import React, { useState } from "react";
import "./style.css";
import phoneImage1 from "../../../assets/images/mob1.png";
import phoneImage2 from "../../../assets/images/mob2.png";
import android from "../../../assets/images/android.png";
import iphone from "../../../assets/images/iphone.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Login1 = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <div className='mainboxlogin1'>
        <section className='sectiondes'>
          <div className='mobilebox'>
            {" "}
            <img src={phoneImage2} alt='Phone 2' className='phone1' />
            <img src={phoneImage1} alt='Phone 1' className='phone2' />
          </div>
        </section>
        <section className='sectionform'>
          <div className='formbox'>
            <div className='logo'></div>
            <h1>Log in</h1>
            <form>
              <div>
                <label>Phone number, username, or email address</label>
                <input type='text' />
              </div>
              <div>
                <label className='flex justify-between items-center'>
                  Your password
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
              <button>Log in</button>
            </form>
            <div className='or-divider'>
              <span>OR</span>
            </div>
            <div className='continue-with-facebook'>
              <FaFacebook className='icon mr-3' /> Continue with Facebook
            </div>
            <a href='#' className='mt-6 underline text-xl '>
              Forgot your password?
            </a>
          </div>
          <div className='dsignupbox '>
            <p>
              Don't have an account?{" "}
              <a href='#' className='underline'>
                Sign up
              </a>
            </p>
          </div>
          <div className='app-download-buttons flex justify-center align-middle space-x-4 mt-7'>
            <a
              href='https://apps.apple.com'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block'
            >
              <img
                src={iphone}
                alt='Download on the App Store'
                className='w-40 h-14'
              />
            </a>
            <a
              href='https://play.google.com'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block'
            >
              <img
                src={android}
                alt='Get it on Google Play'
                className='w-40 h-14'
              />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};
export default Login1;
