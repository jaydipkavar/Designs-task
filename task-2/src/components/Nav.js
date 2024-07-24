/** @format */

import React from "react";

const Nav = ({ content, leftcontent }) => {
  return (
    <>
      <div className='header'>
        <nav>
          <section className='leftside'>
            <div className='logo'></div>
            <div className='ml-6'>{leftcontent}</div>
          </section>
          <section className='rightside'>{content}</section>
        </nav>
      </div>
    </>
  );
};
export default Nav;
