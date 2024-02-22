/* eslint-disable no-unused-vars */
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
      scrollTrigger: {
        scroll: 'body',
        trigger: '.hero-section-1',
        start: 'top 20%',
        end: 'top 20%',
        scrub: 2,
      },
    });

    tl.from('.hero-section-1 .hero-section-image img', {
      opacity: 0,
      x: -100,
      duration: 3,
    })
      .from('.hero-section-2', {
        opacity: 0,
        x: 100,
        duration: 3,
      })
      .from('.hero-section-3 .hero-section-image img', {
        opacity: 0,
        x: 100,
        duration: 3,
      })
      .from('.hero-section-4 .hero-section-content', {
        opacity: 0,
        y: 100,
        duration: 3,
      });
  }, []);

  return (
    <div className="w-full dd min-h-screen add flex flex-col p-5 md:p-20">
      <HeroSection
        title="Dedicated support"
        description="Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you succeed!"
        buttonTitle="Join Discord"
        image="/src/assets/imgs/about1.png"
        className="hero-section-1 mb-5"
        show={false}
      />
      <HeroSection
      buttonTitle="join discord"
        title="Global server location"
        description="Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you succeed!"
        image="/src/assets/imgs/about2.png"
        className="hero-section-2 hero-section-reverse "
        show={true}
      />
      
    </div>
  );
};

export default Hero4;