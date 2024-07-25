/** @format */

import React from "react";
import "./style.css";
import img1 from "../../../assets/images/New Folder/1.jpeg";
import img2 from "../../../assets/images/New Folder/2.jpeg";
import img3 from "../../../assets/images/New Folder/3.jpeg";
import img4 from "../../../assets/images/New Folder/4.jpeg";
import img5 from "../../../assets/images/New Folder/5.jpeg";
import img6 from "../../../assets/images/New Folder/6.jpeg";
import img7 from "../../../assets/images/New Folder/7.jpeg";
import img8 from "../../../assets/images/New Folder/8.jpeg";
import img9 from "../../../assets/images/New Folder/9.jpeg";
import img10 from "../../../assets/images/New Folder/10.jpeg";
import img11 from "../../../assets/images/New Folder/11.jpeg";
import img12 from "../../../assets/images/New Folder/12.jpeg";
import img13 from "../../../assets/images/New Folder/13.jpeg";
import img14 from "../../../assets/images/New Folder/14.jpeg";
import img15 from "../../../assets/images/New Folder/15.jpeg";
import img16 from "../../../assets/images/New Folder/16.jpeg";
import qrimg from "../../../assets/images/New Folder/qr.png";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
];

const Login4 = () => {
  return (
    <div
      className='mainboxlogin4'
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      {Array(4)
        .fill()
        .map((_, rowIndex) => (
          <section key={rowIndex} className='flex justify-center items-center'>
            {images
              .slice(rowIndex * 4, rowIndex * 4 + 4)
              .map((img, imgIndex) => (
                <div key={imgIndex} className='w-1/4 h-25vh'>
                  <img
                    className='h-full w-full'
                    src={img}
                    alt={`image-${imgIndex + rowIndex * 4 + 1}`}
                  />
                </div>
              ))}
          </section>
        ))}
      <div className='overlay'></div>
      <section className='formsection'>
        <div className='w-2/4  formdiv flex justify-center items-center flex-col '>
          <h1 className='font-semibold text-4xl tracking-wide mt-5'>
            Welcome back
          </h1>
          <p className='text-xl text-stone-600 tracking-wider mb-8'>
            we're so excited to see you again!
          </p>
          <form>
            <div className='w-full justify-start items-center flex-col'>
              <label className='w-full'>Email or phone number</label>
              <input type='text' />
            </div>
            <div className='w-full justify-start items-center flex-col'>
              <label className='w-full'>Password</label>
              <input type='password' />
            </div>
            <p>
              <a href='#' className='underline font-bold'>
                Forgot your Password
              </a>
            </p>
            <button>Log in</button>
          </form>
          <p className='mt-7 mb-5 text-gray-400'>
            Don't have an account?
            <a href='#' className='underline ml-1 text-black'>
              Sign up
            </a>
          </p>
        </div>
        <div className='absolute left-50% top-0 bottom-0 w-1 bg-neutral-200'></div>
        <div className='qrdiv flex justify-center items-center flex-col  w-2/4'>
          <img src={qrimg} className='w-3/4 h-3/4' alt='qrimage' />
          <div className='flex justify-center items-center flex-col'>
            <h1 className='font-semibold text-3xl tracking-wide'>
              Log in with QR code
            </h1>
            <p className='text-xl text-stone-600 tracking-wider mb-8'>
              Scan this with our App to log in instantly
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login4;
