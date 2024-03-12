import React from 'react';
import img from '../../public/imgs/about1.png'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
function Cards({ data }) {
  gsap.registerPlugin(ScrollTrigger);
     const container = useRef();
    
     useGSAP(() => {
         
       });
  return (
    <div className=' w-[28vw] .sdsd max-md:w-full items-center justify-center flex gap-1 flex-col'>
      <div className='flex items-center justify-center'>
        <img src={data.url} alt="ss" />
      </div>
      <div className='flex  flex-col dd items-center max-md:w-full h-full justify-between text-white gap-10 text-center'>
        <h1 className="text-3xl ">{data.title}</h1>
        <p>{data.chat}</p>
      </div>

    </div>
  );
}

export default Cards;
