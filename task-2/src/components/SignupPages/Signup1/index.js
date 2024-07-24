/** @format */

import React from "react";
import logo from "../../../assets/images/1.png";
import { FcGoogle } from "react-icons/fc";
import "./style.css";
import Nav from "../../Nav";
function Signup1() {
  return (
    <>
      <Nav
        content={
          <ul>
            <li className='search-item' style={{ width: "60%" }}>
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
          </ul>
        }
      />
      <div className='mainbox'>
        <div className='innerbox'>
          <section className='section1'>
            <div className='contentdiv'>
              {" "}
              <h1>Design with us to unlock your creativity </h1>
              <h3>Access to thousands of design resources and templates</h3>
            </div>
            <div className='signupdiv '>
              <FcGoogle className='icon' /> Sign up with your Google account
            </div>
            <div className='or-divider'> OR</div>
            <div className='inputdiv'>
              <input type='text' placeholder='Email Address' />
              <button type='button'>Sign up</button>
            </div>
            <p>
              By signing up, you agree to the <a href='#'>Terms of use</a> and{" "}
              <a href='#'>Privacy Policy</a>
            </p>
          </section>
          <section className='section2'>
            <img src={logo} alt='Design resources' />
          </section>
        </div>
      </div>
    </>
  );
}

export default Signup1;
