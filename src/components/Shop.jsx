import Button from './Button';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
function Shop({ data,title = "#",w}) {
  const shopContainer = useRef(null);
  // Use the `useGSAP` hook to get a GSAP timeline.
  const tl = useGSAP((t) => t, [shopContainer]);
  
  if (typeof window !== "undefined") {
    gsap.to(window, {scrollTrigger: {trigger: shopContainer.current, start:"top center"}});
  }
    gsap.registerPlugin(ScrollTrigger);
    const container = useRef();
useGSAP(() => {
        // Set up the animation when the component mounts
        // gsap.to(container.current, {duration: 1, yPercent:-20, ease:"power3.out"});
    }, [container]);


  return (
    <div ref={shopContainer} className= {`min-w-64 z-20   py-10 px-2 flex flex-col justify-center overflow-hidden items-center gap-6 shop`}>
      <div className='flex items-center justify-center p-5'>
        <img src={data?.url} alt="" />
      </div>
      <div className='text-center flex flex-col overflow-hidden gap-1'>
        <h1 className='text-3xl sh text-[#ffffff] '>{data?.title}</h1>
        <p className='text-2xl sh text-[#ffffff] max-md:text-wrap flex  items-center justify-center'><samp>₹</samp>{data?.money} / <span className='text-xs'>month</span></p>
        {data.list.map((item) => (
          <span className='sh' key={item}>{item}</span>
        ))}
      </div>
      <div className=''>
       {data && data.id ? (
         <a href={`/${data.id}`}><Button title={title} link={`/checkout?id=${data?.id}`} /></a>
       ):<Button title={title} link={`/checkout?id=${data?.id}`} />}
      </div>
    </div>
  );
}

export default Shop;
