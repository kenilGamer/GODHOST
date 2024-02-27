/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from './Button';
import { useGSAP } from '@gsap/react';

function Navbar({ timeline }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='w-full m-auto py-5 flex max-md:items-start fixed justify-between z-50 items-center px-5 max-md:px-20'>
      <div className='flex gap-1 items-center'>
        <h1>
          <img
            src="https://github.com/kenilGamer/GOD_APP/blob/main/public/images/img1.png?raw=true"
            className='object-cover w-10'
            alt=""
          />
        </h1>
        <h1 className='text-xl dd'>GODCRAFT</h1>
      </div>

      {/* Responsive Menu Button */}
      <div className='flex flex-col justify-center items-center'>
      <button className='hidden max-md:block' onClick={toggleMobileMenu}>
        <span className='text-2xl'>&#9776;</span>
      </button>

      <div className=''>
      <div className={`flex flex-col md:flex-row gap-4 items-center nav uppercase ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
        {["Home", "PACKAGES", "HELP", "CONTACT"].map((item, index) => (
          <a className='text-sm dd' href={`#${item}`} key={index}>
            {item}
          </a>
        ))}
        <a href="/signup">
          <Button className="nav" />
        </a>
        {/* <a href="#" className='dd uppercase'>Sign in</a> */}
      </div>
      </div>
      </div>
     
    </div>
  );
}

export default Navbar;
