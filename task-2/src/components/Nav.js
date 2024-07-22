/** @format */

import React from "react";

const Nav = ({ content }) => {
  return (
    <>
      <div className='header'>
        <nav>
          <section className='leftside'>
            <div className='logo'></div>
          </section>
          <section className='rightside'>{content}</section>
        </nav>
      </div>
    </>
  );
};
export default Nav;
