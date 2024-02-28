import Button from './Button';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
function Shop({ data }) {
    gsap.registerPlugin(ScrollTrigger);
    const container = useRef();
    useGSAP(() => {
        // ✅ safe, created during execution, selector text scoped
     
      });

  return (
    <div className='w-[25vw] max-md:w-full  p-2 flex flex-col overflow-hidden items-center gap-5 shop rounded-md'>
      <div className='flex items-center justify-center p-10'>
        <img src={data.url} alt="" />
      </div>
      <div className='text-center flex flex-col overflow-hidden gap-5'>
        <h1 className='text-3xl sh text-[#ffffff] '>{data.title}</h1>
        <p className='text-2xl sh text-[#ffffff]'>${data.money} / <span className='text-xs'>month</span></p>
        {data.list.map((item) => (
          <span className='sh' key={item}>{item}</span>
        ))}
      </div>
      <div className=''>
        <Button title='more info' link={`/checkout?id=${data.id}`} />
      </div>
    </div>
  );
}

export default Shop;
