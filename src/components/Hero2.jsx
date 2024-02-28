import React, { useRef } from 'react'
import Cards from './Cards'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function Hero2() {
  let data = [
    {
      url: "https://themewagon.github.io/ecohosting/assets/img/icon/services1.svg", 
      title:"Employee Owned", 
      chat:"Supercharge your WordPress hosting with detailed website analytics, marketing tools."
    },
    {
      url: "https://themewagon.github.io/ecohosting/assets/img/icon/services2.svg", 
      title:"Commitment To Security", 
      chat:"Supercharge your WordPress hosting with detailed website analytics, marketing tools."
    },
    {
      url: "https://themewagon.github.io/ecohosting/assets/img/icon/services3.svg", 
      title:"Passion For Privacy", 
      chat:"Supercharge your WordPress hosting with detailed website analytics, marketing tools."
    },
    {
      url: "https://themewagon.github.io/ecohosting/assets/img/icon/services4.svg", 
      title:"Employee Owned", 
      chat:"Supercharge your WordPress hosting with detailed website analytics, marketing tools."
    },
    {
      url: "https://themewagon.github.io/ecohosting/assets/img/icon/services5.svg", 
      title:"24/7 Support", 
      chat:"Supercharge your WordPress hosting with detailed website analytics, marketing tools."
    },
    {
      url: "https://themewagon.github.io/ecohosting/assets/img/icon/services6.svg", 
      title:"100% Uptime Guaranteed", 
      chat:"Supercharge your WordPress hosting with detailed website analytics, marketing tools."
    },
     ]
     gsap.registerPlugin(ScrollTrigger);
     const container = useRef();
    
     useGSAP(() => {
         gsap.from(container.current, {
           opacity:0,
           // x:100,
          //  transform:"translateX(390%)",
           duration: 3,
          //  stagger:0.5,
           scrollTrigger: {
             scroll: "body",
             trigger: container.current,
             start: 'top 10%', // Adjust the start position as needed
             end: 'top 20%',  // Adjust the end position as needed
             scrub: 1,
             // markers: true,
            //  pin: true
           },
           // Duration should be a number, not a string
         });
       });
  return (
  <div ref={container} className='mt-52 max-md:w-[100vw] max-w-screen-xl m-auto ssss py-20 max-md:px-0 px-10 h-full'>
    <div className='text-center mb-10'>
      <h1 className='text-6xl  uppercase dd'>Most amazing features</h1>
    </div>
    <div className='flex items-center gap-y-10 justify-between max-md:w-[110vw] max-md:flex-col flex-wrap'>
      {data.map((itme,index)=>(<Cards key={index} data={itme} />))}
    </div>
  </div>
  )
}

export default Hero2