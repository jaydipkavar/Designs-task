/** @format */

import React, { useState } from "react";
import "./style2.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
const Signup2 = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className='mainbox' style={{ height: "auto" }}>
        <div className='signup2innerbox'>
          <section className='section1'>
            <div className='logo'></div>
            <h2>Sign up for free to start live-streaming</h2>
            <div className='dlinkbox'>
              <FaFacebook className='icon' /> <p>Continue with Facebook</p>
            </div>
            <div className='dlinkbox'>
              <FcGoogle className='icon' /> <p>Continue with Google</p>
            </div>
            <div className='dlinkbox'>
              <BsTwitter className='icon' /> <p>Continue with Apple</p>
            </div>
          </section>
          <h3>OR</h3>
          <p>Sign up with your email address</p>
          <section className='formsection'>
            <form>
              <label>Profile name</label>
              <input type='text' placeholder='Enter your profile name' />
              <label>Email</label>
              <input type='email' placeholder='Enter your email address' />
              <label>Password</label>
              <div className='password-container'>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder='Enter your password'
                />
                <span
                  className='password-toggle'
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <p>What's your gender?</p>
              <div className='gender-options'>
                <div>
                  {" "}
                  <input type='radio' name='gender' value='Female' />
                  <label>Female</label>
                </div>
                <div>
                  <input type='radio' name='gender' value='Male' />
                  <label>Male</label>
                </div>
                <div>
                  {" "}
                  <input type='radio' name='gender' value='Non-binary' />
                  <label>Non-binary</label>
                </div>
              </div>
              <p>What's your date of birth?</p>
              <div className='date-selection'>
                <div>
                  <label>Month</label>
                  <select>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                  </select>
                </div>
                <div>
                  <label>Date</label>
                  <select>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <div>
                  {" "}
                  <label>Year</label>
                  <select>
                    {" "}
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                  </select>
                </div>
              </div>
              <div className='marketing-checkbox'>
                <input type='checkbox' />
                <p className='shareline'>
                  Share my registration data with our content provider for
                  marketing purposes.
                </p>
              </div>
              <div className='policybox'>
                <p>
                  By creating an account, you agree to the
                  <a href='#'>Terms of Use </a> and{" "}
                  <a href='#'>Privacy Policy</a>.
                </p>
              </div>
              <ReCAPTCHA sitekey='Your client site key' className='recaptcha' />
              <button type='submit'>Sign up</button>
              <p style={{ textAlign: "center" }}>
                Already have an account? <a href='#'>Log in</a>
              </p>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default Signup2;
