/** @format */

import React, { useState } from "react";
import "./style.css";
import { FcGoogle } from "react-icons/fc";
import Nav from "../../Nav";

const Signup5 = () => {
  const [signup, setSignup] = useState(false);
  const handleModal = () => {
    setSignup(!signup);
  };
  return (
    <>
      {" "}
      <Nav
        content={
          <>
            <ul className='navbar'>
              <li className='search-item'>
                <form className='max-w-md mx-auto'>
                  <label
                    for='default-search'
                    className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
                  >
                    Search
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                      <svg
                        className='w-4 h-4 text-gray-500 dark:text-gray-400'
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
                      className='block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='Search'
                      required
                    />
                  </div>
                </form>
              </li>
              <li className='language-selector'>
                <select>
                  <option value='en'>English(united state)</option>
                  <option value='gu'>Gujarati</option>
                  <option value='hi'>Hindi</option>
                </select>
              </li>
              <li className='signup-button'>
                <button onClick={handleModal}>Sign up</button>
              </li>
            </ul>
          </>
        }
      />
      <div className='mainbox signup5box'>
        <section
          className='section1'
          style={{ display: signup ? "flex" : "none" }}
        >
          <h1>Sign up for free</h1>
          <h2>Full access to in any of our products</h2>
          <input type='text' placeholder='Enter your email address' />
          <button>Continue</button>
          <h4 className='ortag'>OR</h4>
          <div className='signupbox'>
            <FcGoogle className='icon' /> <p>Continue with Google</p>
          </div>
          <div className='close'></div>
        </section>

        <section className='section2'>
          <h1>Travel with us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            mollitia provident et molestias ipsam fuga pariatur maiores, optio,
            unde sit doloremque, molestiae aut! Quos beatae quibusdam omnis
            temporibus blanditiis sapiente
          </p>
          <button onClick={handleModal} className='hover:bg-transparent'>
            Sign up
          </button>
        </section>
      </div>
    </>
  );
};

export default Signup5;
