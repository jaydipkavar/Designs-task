/** @format */

import React, { useState } from "react";
import "./style.css";
import image from "../../../assets/images/2.png";
import Nav from "../../Nav";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const Signup4 = () => {
  const [phone, setPhone] = useState("");
  return (
    <>
      {" "}
      <Nav
        content={
          <>
            <ul class='navbar'>
              <li class='search-item'>
                <form class='max-w-md mx-auto'>
                  <label
                    for='default-search'
                    class='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
                  >
                    Search
                  </label>
                  <div class='relative'>
                    <div class='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                      <svg
                        class='w-4 h-4 text-gray-500 dark:text-gray-400'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 20 20'
                      >
                        <path
                          stroke='currentColor'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                        />
                      </svg>
                    </div>
                    <input
                      type='search'
                      id='default-search'
                      class='block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='Search'
                      required
                    />
                  </div>
                </form>
              </li>
              <li class='language-selector'>
                <select>
                  <option value='en'>English(united state)</option>
                  <option value='gu'>Gujarati</option>
                  <option value='hi'>Hindi</option>
                </select>
              </li>
              <li class='Login-button'>
                <button>Log in</button>
              </li>
            </ul>
          </>
        }
      />
      <div className='mainbox singupbox4'>
        <section className='section1'>
          <div className='contentbox'>
            {" "}
            <h1>Design with us</h1>
            <p>Access to thousands of design resources and templates</p>
          </div>
          <div className='imagebox'>
            <img src={image} alt='pngimage' />
          </div>
        </section>
        <section className='sectionformbox'>
          {" "}
          <div className='innerform'>
            {" "}
            <h2 className='text-2xl font-bold mb-7 text-left'>Sign up now</h2>
            <form className='space-y-4'>
              <div className='flex space-x-4'>
                <div className='w-1/2'>
                  <label htmlFor='firstName' className='block text-gray-500'>
                    First Name
                  </label>
                  <input
                    type='text'
                    id='firstName'
                    className='w-full p-2 border border-gray-300 rounded'
                    placeholder='First Name'
                  />
                </div>
                <div className='w-1/2'>
                  <label htmlFor='lastName' className='block text-gray-500'>
                    Last Name
                  </label>
                  <input
                    type='text'
                    id='lastName'
                    className='w-full p-2 border border-gray-300 rounded'
                    placeholder='Last Name'
                  />
                </div>
              </div>
              <div>
                <label htmlFor='email' className='block text-gray-500'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  className='w-full p-2 border border-gray-300 rounded'
                  placeholder='Email'
                />
              </div>
              <div>
                <label htmlFor='phone' className='block text-gray-500 mb-2'>
                  Phone number
                </label>

                <PhoneInput
                  country={"us"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                  }}
                  containerStyle={{ width: "100%" }}
                  inputStyle={{
                    width: "96%",
                    padding: "22px",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    marginLeft:"25px"
                  }}
                  buttonStyle={{
                    border: "1px solid #ccc",
                    borderRadius: "4px 0 0 4px",
                  }}
                />
              </div>
              <div>
                <label htmlFor='password' className='block text-gray-500'>
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  className='w-full p-2 border border-gray-300 rounded'
                  placeholder='Password'
                />
              </div>
              <div className='checkboxsecton'>
                <div>
                  {" "}
                  <input type='checkbox' />
                  <p>
                    By creating an account, I agree to our{" "}
                    <a href='#'> Terms of use</a> and{" "}
                    <a href='#'>Privacy Policy</a>
                  </p>
                </div>
                <div>
                  <input type='checkbox' />
                  <p>
                    By creating an account, I am also consenting to receive SMS
                    messages and emails, including product new feature updates,
                    events, and marketing promotions.
                  </p>
                </div>
              </div>
              <div className='flex items-center justify-start'>
                <button className='px-10 py-3 bg-zinc-400 rounded-full text-white'>
                  Sign  up
                </button>
                <p className='ml-7'>
                  Already have an account?
                  <a href='/login' className='text-black-500 '>
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Signup4;
