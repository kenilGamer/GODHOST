import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import Shop from '../../components/Shop';

function Rayzer () {
  let data = [
    {
      url: "/imgs/price1.svg",
      title: "COAL PLAN",
      money: "399",
      list: ['4 Gb ram ', '100% CPU', '4 backups', '35 gb storage','4 TB Traffic',"AMD Ryzen ™ 9 5900X"],
      isEnd : true,
      title1 : "buy now"
    },
    {
      url: "/imgs/price2.svg",
      title: "IRON PLAN",
      money: "499",
      list: ['6 Gb ram ', '200% CPU', '4 backups', '50 gb storage','4 TB Traffic',"AMD Ryzen ™ 9 5900X"],
      isEnd : true,
      title1 : "buy now"
    },
    {
      url: "/imgs/price3.svg",
      title: " GOLD PLAN",
      money: "699",
      list: ['8 Gb ram ', '200% CPU', '4 backups', '75 gb storage','4 TB Traffic',"AMD Ryzen ™ 9 5900X"],
      isEnd : true,
      title1 : "buy now"
    },
    {
      url: "/imgs/price1.svg",
      title: "EMERALD PLAN",
      money: "999",
      list: ['12 Gb ram ', '300% CPU', '8 backups', '100 bg storage','25 TB Traffic',"AMD Ryzen ™ 9 5900X"],
      isEnd : true,
      title1 : "buy now"
    },
    {
      url: "/imgs/price2.svg",
      title: "DIMOND PLAN",
      money: "1599",
      list: ['16 Gb ram ', '400% CPU', '10 backups', '120 gb storage','30 TB Traffic',"AMD Ryzen ™ 9 5900X"],
      isEnd : true,
      title1 : "buy now"
    },
    {
      url: "/imgs/price3.svg",
      title: "DIMOND PLAN",
      money: "1999",
      list: ['24 Gb ram ', '600% CPU', '15 backups', '160 gb storage','35 TB Traffic',"AMD Ryzen ™ 9 5900X"],
      isEnd : true,
      title1 : "buy now"
    },
    {
      url: "/imgs/price1.svg",
      title: "END PLAN",
      money: "2499",
      list: ['32 Gb ram ', '600% CPU', '20 backups', '200 gb storage','40 TB Traffic',"AMD Ryzen ™ 9 5900X"],
      isEnd : true,
      title1 : "buy now"
    },
  ];
  // gsap.registerPlugin(ScrollTrigger);
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
  useEffect(() => {
    if (container.current) {
      gsap.to(container.current, {duration: 1, yPercent:-100});
    }
  },[container]);
  return (
    <div>
    
      <div className='max-w-screen-xl dd min-h-screen ss flex flex-col gap-1 mx-auto  px-5 md:px-10'>
      <h1 className='text-center text-3xl md:text-5xl ddd tracking-wider uppercase  '>
       Rayzer plans list
      </h1>
        <div
        // ref={container}
          className={` flex dd gap-10 z-10 max-md:w-[100vw] flex-wrap items-center justify-center  py-10 shop1 ${isMobile ? 'opacity-75' : 'opacity-100 transition-opacity duration-500'}`}
        >
          {data.map((item, index) => (
            <Shop key={index} title={item.title1}  data={item} />
          ))}
        </div>
    </div>
    </div>
  )
}

export default Rayzer 