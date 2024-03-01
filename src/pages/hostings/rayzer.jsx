import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import Shop from '../../components/Shop';

function Rayzer () {
  let data = [
    {
      url: "/src/assets/imgs/price1.svg",
      title: "COAL PLAN",
      money: "299",
      list: ['8 Gb ram ', '200% CPU', '4 backups', '35 gb storage','10 TB Traffic',"Intel® Xeon® Gold 6150"],
      isEnd : true,
      title : "buy now"
    },
    {
      url: "/src/assets/imgs/price2.svg",
      title: "IRON PLAN",
      money: "499",
      list: ['12 Gb ram ', '350% CPU', '4 backups', '50 gb storage','15 TB Traffic',"Intel® Xeon® Gold 6150"],
      isEnd : true,
      title : "buy now"
    },
    {
      url: "/src/assets/imgs/price3.svg",
      title: " GOLD PLAN",
      money: "550",
      list: ['16 Gb ram ', '400% CPU', '4 backups', '60 gb storage','20 TB Traffic',"Intel® Xeon® Gold 6150"],
      isEnd : true,
      title : "buy now"
    },
    {
      url: "/src/assets/imgs/price1.svg",
      title: "EMERALD PLAN",
      money: "950",
      list: ['24 Gb ram ', '600% CPU', '8 backups', '100 bg storage','25 TB Traffic',"Intel® Xeon® Gold 6150"],
      isEnd : true,
      title : "buy now"
    },
    {
      url: "/src/assets/imgs/price2.svg",
      title: "DIMOND PLAN",
      money: "13999",
      list: ['36 Gb ram ', '600% CPU', '10 backups', '200 gb storage','30 TB Traffic',"Intel® Xeon® Gold 6150"],
      isEnd : true,
      title : "buy now"
    },
    {
      url: "/src/assets/imgs/price3.svg",
      title: "DIMOND PLAN",
      money: "1850",
      list: ['48 Gb ram ', '800% CPU', '15 backups', '300 gb storage','35 TB Traffic',"Intel® Xeon® Gold 6150"],
      isEnd : true,
      title : "buy now"
    },
    {
      url: "/src/assets/imgs/price1.svg",
      title: "END PLAN",
      money: "2899",
      list: ['64 Gb ram ', '800% CPU', '20 backups', '500 gb storage','40 TB Traffic',"Intel® Xeon® Gold 6150"],
      isEnd : true,
      title : "buy now"
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
      Intel  plans list
      </h1>
        <div
        // ref={container}
          className={` flex dd gap-10 max-md:w-[50vw] max-sm:w-[100vw] flex-wrap items-center justify-center  py-10 shop1 ${isMobile ? 'opacity-100' : 'opacity-100 transition-opacity duration-500'}`}
        >
          {data.map((item, index) => (
            <Shop key={index} title={item.title}  data={item} />
          ))}
        </div>
    </div>
    </div>
  )
}

export default Rayzer   