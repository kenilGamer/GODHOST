import Button from './Button';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
function Shop({ data,title = "#",w}) {
    gsap.registerPlugin(ScrollTrigger);
    const container = useRef();
    useGSAP(() => {
        // ✅ safe, created during execution, selector text scoped
     
      });

  return (
    <div className= {`w-[${w}] max-md:w-screen py-2 px-2 flex flex-col justify-center overflow-hidden items-center gap-5 shop rounded-md`}>
      <div className='flex items-center justify-center p-5'>
        <img src={data?.url} alt="" />
      </div>
      <div className='text-center flex flex-col overflow-hidden gap-1'>
        <h1 className='text-3xl sh text-[#ffffff] '>{data?.title}</h1>
        <p className='text-2xl sh text-[#ffffff] max-md:text-wrap'>${data?.money} / <span className='text-xs'>month</span></p>
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
