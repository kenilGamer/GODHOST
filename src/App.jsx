/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero1 from './components/Hero1'
import Hero2 from './components/Hero2'
import Hero3 from './components/Hero3'
import Hero4 from './components/Hero4'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


  
function App() {
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
      autoResize: true,
      smoothScrolling: true,
      wrapper: window,
      content: document.documentElement,
      lerp: 0.1,
      duration: 4.5,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      normalizeWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    },
  });
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();
  const tl = gsap.timeline()
  useGSAP(() => {
      // ✅ safe, created during execution, selector text scoped
      tl.from(".nav1 h1", {
        opacity:0,
        y:-60,
        duration:1,
        stagger:.2
      });
      tl.from(".nav a", {
        opacity:0,
        y:-60,
        duration:1,
        stagger:.2
      });
      tl.from(".hero-l", {
        opacity:0,
        x:-60,
        duration:1,
        stagger:.2
      });
      tl.from(".hero-r img", {
        opacity:0,
        x:90,
        duration:1,
        stagger:.2
      });
    });
  return (
    <div className='w-full min-h-screen bg-[#2d0a31] text-white overflow-x-hidden'>
      <Navbar timeline={tl} />
      <Hero1 timeline={tl} />
      <Hero2/>
      <Hero3/>
      <Hero4/>
      <Footer/>
    </div>
  )
}

export default App