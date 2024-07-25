/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const SpeedDial = () => {
 const [isOpen, setIsOpen] = useState(false);
 const speedDialRef = useRef(null);

 const toggleMenu = () => {
   setIsOpen((prevState) => !prevState);
 };

 const handleLinkClick = () => {
   if (isOpen) {
     setIsOpen(false); 
   }
 };

 const handleClickOutside = (event) => {
   if (
     speedDialRef.current &&
     !speedDialRef.current.contains(event.target) &&
     !event.target.closest("button")
   ) {
     setIsOpen(false); 
   }
 };

 useEffect(() => {
   if (isOpen) {
     document.addEventListener("mousedown", handleClickOutside);
   } else {
     document.removeEventListener("mousedown", handleClickOutside);
   }

   return () => {
     document.removeEventListener("mousedown", handleClickOutside);
   };
 }, [isOpen]);
  return (
    <div>
      <div
        ref={speedDialRef}
        className={`fixed bottom-20 left-0 z-10 flex flex-col transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          width: "auto",
          height: "auto",
          backgroundColor: "white",
          boxShadow: "0 -4px 8px rgba(0,0,0,0.2)",
          transition: "transform 0.3s ease",
          marginBottom: "20px",
          textAlign:"center"
        }}
      >
        <div className='flex flex-col p-4 space-y-2 h-full'>
          <ul className='flex flex-col space-y-2'>
            <Link to='/signup1' onClick={handleLinkClick}>
              <li className='p-2 hover:bg-gray-200 rounded'>Signup1</li>
            </Link>
            <Link to='/signup2' onClick={handleLinkClick}>
              <li className='p-2 hover:bg-gray-200 rounded'>Signup2</li>
            </Link>
            <Link to='/signup3' onClick={handleLinkClick}>
              <li className='p-2 hover:bg-gray-200 rounded'>Signup3</li>
            </Link>
            <Link to='/signup4' onClick={handleLinkClick}>
              <li className='p-2 hover:bg-gray-200 rounded'>Signup4</li>
            </Link>
            <Link to='/signup5' onClick={handleLinkClick}>
              <li className='p-2 hover:bg-gray-200 rounded'>Signup5</li>
            </Link>
            <Link to='/login1' onClick={handleLinkClick}>
              <li className='p-2 hover:bg-gray-200 rounded'>Login1</li>
            </Link>
            <Link to='/login2' onClick={handleLinkClick}>
              <li className='p-2 hover:bg-gray-200 rounded'>Login2</li>
            </Link>
            <Link to='/login3' onClick={handleLinkClick}>
              <li className='p-2 hover:bg-gray-200 rounded'>Login3</li>
            </Link>
            <Link to='/login4' onClick={handleLinkClick}>
              <li className='p-2 hover:bg-gray-200 rounded'>Login4</li>
            </Link>
            <Link to='/login5' onClick={handleLinkClick}>
              <li className='p-2 hover:bg-gray-200 rounded'>Login5</li>
            </Link>
          </ul>
        </div>
      </div>
      <button
        type='button'
        aria-controls='speed-dial-menu'
        aria-expanded={isOpen}
        onClick={toggleMenu}
        className='fixed bottom-6 left-6 z-20 bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg'
      >
        <svg
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 18 18'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M9 1v16M1 9h16'
          />
        </svg>
        <span className='sr-only'>Toggle drawer</span>
      </button>
    </div>
  );
};

export default SpeedDial;
