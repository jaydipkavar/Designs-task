/** @format */

import React from "react";
import "./style.css";
import androidImage from "../../../assets/images/android.png"; // Adjust the path as needed
import iphoneImage from "../../../assets/images/iphone.png"; // Adjust the path as needed

const Signup4 = () => {
  return (
    <div className='mainbox signup4box'>
      <section className='innerbox3'>
        <h1>Say hello to the World</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          lobortis maximus nunc, ac rhoncus odio congue quis. Sed ac semper
          orci, eu porttitor lacus.
        </p>
        <button>Sign up for free</button>
        <div className='store-links'>
          <a href='https://play.google.com/store/apps/details?id=com.example.android'>
            <img src={androidImage} alt='Android Store' />
          </a>
          <a href='https://apps.apple.com/us/app/example/id123456789'>
            <img src={iphoneImage} alt='iPhone Store' />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Signup4;
