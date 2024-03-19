import React, { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import HeroSection from './HeroSection';

const Hero4 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      duration:2,
      scrollTrigger: {
        trigger: containerRef.current, // Use containerRef if applicable
        start: 'top 20%',
        end: 'top 50%',
        // markers: true,
        toggleActions: 'play none none reset',
        scrub: 5,
      },
    });
    const tl2 = gsap.timeline({
      duration:2,
      scrollTrigger: {
        trigger: ".hero-section-2", // Use containerRef if applicable
        start: 'top 50%',
        end: 'top 60%',
        // markers: true,
        toggleActions: 'play none none reset', 
        scrub: 5,
      },
    });
    tl.from('.hero-section-1 .hero-section-image img', {
      opacity: 0,
      x: -100,
      duration: 3,
    }).from('.hero-section-1 .hero-section-content ', {
      opacity: 0,
      x: 100,
      duration: 3,
    })
    tl2.from('.hero-section-2 .hero-section-image img', {
      opacity: 0,
      x: 100,
      duration: 3,
    }).from('.hero-section-2 .hero-section-content', {
      opacity: 0,
      y: 100,
      duration: 3,
    });
  }, []);

  return (
    <div ref={containerRef} className="w-full dd min-h-screen add flex items-center justify-center flex-col p-5 max-md:p-20">
      <HeroSection
        title="Dedicated support"
        description="Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you succeed!"
        buttonTitle="Join Discord"
        image="/imgs/about1.png"
        className="hero-section-1 mb-5"
        show={false}
      />
      <HeroSection
        buttonTitle="Join Discord"
        title="Global server location"
        description="Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you succeed!"
        image="/imgs/about2.png"
        className="hero-section-2 hero-section-reverse"
        show={true}
      />
    </div>
  );
};

export default Hero4;
