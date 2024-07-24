/** @format */

import React from "react";
import android from "../assets/images/googlepay.png";
import iphone from "../assets/images/appstore.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='w-4/5 h-0.5 bg-neutral-400 mt-11'></div>
      <div className='flex justify-center items-start py-10  w-4/5'>
        <div className='w-1/2 flex justify-evenly items-start p-5'>
          <section>
            <ul className='space-y-2'>
              <li className='font-bold'>Product</li>
              <li>Pricing</li>
              <li>Solution</li>
              <li>Education</li>
              <li>Team plans</li>
            </ul>
          </section>
          <section>
            <ul className='space-y-2'>
              <li className='font-bold'>About us</li>
              <li>About</li>
              <li>Branding</li>
              <li>Newsroom</li>
              <li>Partnerships</li>
              <li>Affiliates</li>
              <li>Careers</li>
            </ul>
          </section>
          <section>
            <ul className='space-y-2'>
              <li className='font-bold'>Help and support</li>
              <li>Help center</li>
              <li>Contact us</li>
              <li>Privacy & Terms</li>
              <li>Safety information</li>
              <li>Sitemap</li>
            </ul>
          </section>
          <section>
            <ul className='space-y-2'>
              <li className='font-bold'>Community</li>
              <li>Agencies</li>
              <li>Freelancers</li>
              <li>Engineers</li>
            </ul>
          </section>
        </div>
        <div className='w-2/5'>
          <div className='app-download-buttons flex justify-center items-start space-x-4 mt-7'>
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
        </div>
      </div>
      <div className='w-4/5 h-0.5 bg-neutral-400 '></div>
      <div className=' py-4 flex justify-around items-center w-11/12'>
        <div className='flex justify-around items-center w-full mx-auto '>
          <div className='flex space-x-4'>
            <a href='#' className='text-gray-600'>
              CopyRight
            </a>
            <a href='#' className='text-gray-600'>
              Help
            </a>
            <a href='#' className='text-gray-600'>
              Privacy
            </a>
            <a href='#' className='text-gray-600'>
              Terms
            </a>
          </div>
          <div className='flex justify-center items-center gap-3 space-x-4'>
            <a href='#' className='text-gray-600 text-xl'>
              <FaFacebook />
            </a>
            <a href='#' className='text-gray-600 text-xl'>
              <FaTwitter />
            </a>
            <a href='#' className='text-gray-600 text-xl'>
              <FaInstagram />
            </a>
            <select className='bg-transparent border-none mb-0 ml-6'>
              <option value='en'>English (United States)</option>
              <option value='gu'>Gujarati</option>
              <option value='hi'>Hindi</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
