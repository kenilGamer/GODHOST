import React from 'react';
import heroImage from '../assets/imgs/hero_right.png';
import Button from './Button';
import Navbar from './Navbar';

function Hero1({timeline}) { 
  return (
    <div className='relative home dd z-50'>
     <img src="/src/assets/imgs/top-left-shape.png" className='-mt-20 absolute' alt="" />
    <div className='max-w-screen-xl mx-auto mt-20 h-[80vh] flex items-center justify-center max-md:w-[100vw] max-md:flex-col mb-8'> 
    
      <div className='hero-l w-7/12 h-full max-md:w-[100vw]  hero-l flex justify-center flex-col gap-10 max-md:px-10 p-10 '>
        <p  className='text-[#8f68e2] text-sm'>Best Gaming & web hosting service provider</p>
        <h1 className='text-[5.5vw] max-md:text-[9vw] dd font-extrabold uppercase '>Powerful web hosting</h1>
         <p className='text-sm font-medium opacity-50'>Supercharge your WordPress hosting with detailed website analytics, marketing tools, security, and data backups all in one place.</p>
         <a href="#" className='font-extralight tracking-wider font-serif'> <Button title='Get Started'/> </a>
      </div>
      <div className='h-full hero-r motion-safe:animate-pulse duration-700 scale-105 w-5/12 object-cover  flex items-center justify-center'>
        <img src={heroImage} className='w-[100vw] max-md:w-0 ' alt="" />
      </div>
    </div>
    </div>
  );
}

export default Hero1;
