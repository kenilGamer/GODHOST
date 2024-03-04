import React, { useRef, useState, useEffect } from 'react';
import Shop from './Shop';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Hero3() {
  let data = [
    {
      url: "/src/assets/imgs/price1.svg",
      title: "INTEL-PLANS",
      money: "350",
      list: ['8 Gb ram ', '200% CPU', '4 backups', '35 gb storage'],
      id: "intel"
    },
    {
      url: "/src/assets/imgs/price2.svg",
      title: "RAYZER-plans",
      money: "599",
      list: ['8 Gb ram ', '100% CPU', '4 backups', '25 gb storage'],
      id: "rayzer"
    },
    {
      url: "/src/assets/imgs/price3.svg",
      title: "WEB-PLANS",
      money: "450",
      list: ['4 Gb ram ', '100% CPU', '4 backups', 'full storage'],
      id: "websites"
    },
    
    // {
    //   url: "/src/assets/imgs/price1.svg",
    //   title: "BOTS-PLANS",
    //   money: "150",
    //   list: ['4 Gb ram ', '100% CPU', '4 backups', 'full storage'],
    //   id: "bots"
    // },
  ];
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useGSAP(() => {
    gsap.from(".ss .ddd", {
      // opacity: 0,
      // duration: 1,
      // yPercent: -100,
      // ease: 'elastic',
      // y:-100,
      scrollTrigger: {
        trigger: ".ss",
        start: "top 0%",
        end: "top -30%",
        target:"body",  // Adjust the end position as needed
        scrub: 5,
      }
    });

    gsap.from(container.current, {
      // transform: "translateX(110%)",
      x: "+=100%",
      // scrollBehavior:  "smooth",
      rotation: 2,
      duration: 1,
      delay: 0.4,
      // y: -200,
      stagger: 0.5,
      scrollTrigger: {
        trigger: container.current,
        start: 'top 0%',
        end: 'top -50%',
        target:"body",  // Adjust the end position as needed
        scrub: 3,
        pin: true,
      },
    });
  });

  // Slider settings for mobile view
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=' w-full z-20  dd min-h-[200vh] ss flex  flex-col gap-10 mx-auto max:py-0 px-5 md:px-10'>
      <img src="/src/assets/imgs" alt="" />
      <h1 className='text-center text-3xl  md:text-5xl ddd tracking-wider uppercase  '>
        Choose a plan that fits for you
      </h1>
      <p className='text-center max-w-full mx-auto px-2  ddd'>
        Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are just part of the reason Bluehost is the ideal home for your WordPress website. We`re here to help you succeed.
      </p>

      {isMobile ? (
        // Render slider for mobile view with text-center class
        <Slider {...sliderSettings} className="mt-5 flex items-center justify-center  mb-5 text-center">
          {data.map((item, index) => (
            <div key={index} className='w-full'>
              <Shop data={item} />
            </div>
          ))}
        </Slider>
      ) : (
        // Render grid for larger screens
        <div
        ref={container}
          className={`w-full flex py-32 dd gap-20 z-10 items-cente justify-center rmd:flex-row  shop1  ${isMobile ? 'opacity-75' : 'opacity-100 transition-opacity duration-500'}`}
        >
          {data.map((item, index) => (
            <Shop key={index} title={"more info"} w={"52vw"} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Hero3;
