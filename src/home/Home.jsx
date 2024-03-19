import React, { lazy, Suspense, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero1 from '../components/Hero1';
import Hero2 from '../components/Hero2';
import Hero3 from '../components/Hero3';
import Hero4 from '../components/Hero4';
import Footer from '../components/Footer';
// import { FaCircleArrowUp } from 'react-icons/fa6';
const LazyComponent = lazy(() => import('./LazyComponent '));

import LocomotiveScroll from 'locomotive-scroll';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FaCircleArrowUp } from "react-icons/fa6";
import CanvasAnimation from '../components/CanvasAnimation';

function home() {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.from(".nav1 h1, .nav a ", {
      opacity: 0,
      y: -60,
      x: (target, index) => (index % 2 === 0 ? -60 : 90),
      duration: 1,
      stagger: 0.3,
    });
    tl.from(".hero-l",{
      opacity: 0,
      x: -60,
      // x: (target, index) => (index % 2 === 0 ? -60 : 90),
      duration: 1,
      stagger: 0.3,
    }
    );    
    tl.from(".axcx  ",{
      opacity: 0,
      x: -60,
      // x: (target, index) => (index % 2 === 0 ? -60 : 90),
      duration: 1,
      stagger: 0.3,
    }
    );
    tl.from(".hero-r img",{
      opacity: 0,
      scale: 0.5,
      // x: (target, index) => (index % 2 === 0 ? -60 : 90),
      duration: 1,
      stagger: 0.3,
    }
    );
    gsap.to(".nav-full", {
      backgroundColor: "#4c1e51",
      scrollTrigger: {
        trigger: ".nav-full",
        start: "top 0",
        end: "top -100%",
        scrub: true,
      },
    });

    gsap.from(".top", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".top",
        start: "top 0",
        end: "top -30%",
        scrub: true,
      },
    });
  });


  const totop = () => {
    
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 50);
    // alert('Button clicked!')
  };
  return (
   <div>
    
    <div className=' top right-10 bottom-10 z-[9999] fixed hover:scale-110 transform'>
  <button  onClick={totop} className="flex items-center justify-center w-full h-full text-4xl z-50  text-[#d082fd] overflow-hidden  ">
    <FaCircleArrowUp className=' bg-white  rounded-full' />
  </button>
</div>

    <div className='w-full min-h-screen select-none bg-[#2d0a31] text-white overflow-x-hidden'>
      <Navbar timeline={tl} />
      <Hero1 timeline={tl} />
      <Hero2/>
      <Hero3/>
      <Hero4/>
      <Footer/>
    </div>
   </div>
  )
}

export default home