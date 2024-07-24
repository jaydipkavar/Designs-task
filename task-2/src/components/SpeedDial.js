/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const SpeedDial = () => {
  const [isOpen, setIsOpen] = useState(false);
  const speedDialRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false); // Close the menu when a link is clicked
    }
  };

  const handleClickOutside = (event) => {
    if (speedDialRef.current && !speedDialRef.current.contains(event.target)) {
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
    <div
      ref={speedDialRef}
      data-dial-init
      className='fixed bottom-6 start-6 group z-10 flex justify-center flex-col items-center'
    >
      <div
        id='speed-dial-menu-bottom-left'
        className={`flex flex-col items-center ${
          isOpen ? "mb-4" : "hidden"
        } space-y-2`}
      >
        <ul className='speeddialbox'>
          <Link to='/signup1'>
            <li onClick={handleLinkClick}>Signup1</li>
          </Link>
          <Link to='/signup2'>
            <li onClick={handleLinkClick}>Signup2</li>
          </Link>
          <Link to='/signup3'>
            <li onClick={handleLinkClick}>Signup3</li>
          </Link>
          <Link to='/signup4'>
            <li onClick={handleLinkClick}>Signup4</li>
          </Link>
          <Link to='/signup5'>
            <li onClick={handleLinkClick}>Signup5</li>
          </Link>
          <Link to='/login1'>
            <li onClick={handleLinkClick}>Login1</li>
          </Link>
          <Link to='/login2'>
            <li onClick={handleLinkClick}>Login2</li>
          </Link>
          <Link to='/login3'>
            <li onClick={handleLinkClick}>Login3</li>
          </Link>
          <Link to='/login4'>
            <li onClick={handleLinkClick}>Login4</li>
          </Link>
          <Link to='/login5'>
            <li onClick={handleLinkClick}>Login5</li>
          </Link>
        </ul>
      </div>
      <button
        type='button'
        data-dial-toggle='speed-dial-menu-bottom-left'
        aria-controls='speed-dial-menu-bottom-left'
        aria-expanded={isOpen}
        onClick={toggleMenu}
        className='flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800'
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
        <span className='sr-only'>Open actions menu</span>
      </button>
    </div>
  );
};

export default SpeedDial;
