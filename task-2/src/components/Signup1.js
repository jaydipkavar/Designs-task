/** @format */

import React from "react";
import logo from "../assets/images/1.png";

function Signup1() {
  return (
    <>
      <div className='mainbox'>
        <div className='innerbox'>
          <section className='section1'>
            <h1>Design with us to unlock your creativity </h1>
            <h3>Access to thousands of design resources and templates</h3>
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
