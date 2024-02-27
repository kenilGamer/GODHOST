/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './Button'

function footer() {
  return (
    <div className='w-full min-h-[50vh] flex max-md:flex-col justify-between items-center dd bg-[#3b1440] text-white  '>
        <div className='flex flex-col w-6/12 justify-center items-center gap-1'>
            <div className='flex max-md:flex-col gap-3 text-3xl  items-center py-7 px-20'>
                <img src="/src/assets/imgs/logo.png" width={"50vw"} alt="" />
                <h1>GODCRAFT</h1>
            </div>
            <div className='px-28 max-md:px-1 text-center'>
            <p>Subscribe our newsletter to get updates about our services</p>
            </div>
            <div className='flex flex-col  gap-3 mb-6'>
                <button className='px-5 text-sm uppercase button2 duration-700 py-3 border-2 rounded-full border-[#695cae] '>Email Address</button>
                <Button title='Subscribe'/>
            </div>
        </div>
        <div className='flex flex-col w-4/12 justify-center items-center '>
            <div className='flex flex-col justify-center items-center  gap-4'>
                <a className='text-3xl ' >Company</a>
                <a className='hover:text-fuchsia-600' href="#">Why choose us</a>
                <a className='hover:text-fuchsia-600' href="#">Review</a>
                <a className='hover:text-fuchsia-600' href="#">Customers</a>
                <a className='hover:text-fuchsia-600' href="#">Blog</a>
                <a className='hover:text-fuchsia-600' href="#">Carrier</a>
            </div>
        </div>
        <div className='flex flex-col w-4/12 justify-center items-center '>
            <div className='flex flex-col justify-center items-center  gap-4'>
                <a className='text-3xl' >Products</a>
                <a className='hover:text-fuchsia-600' href="#">Why choose us</a>
                <a className='hover:text-fuchsia-600' href="#">Review</a>
                <a className='hover:text-fuchsia-600' href="#">Customers</a>
                <a className='hover:text-fuchsia-600' href="#">Blog</a>
                <a className='hover:text-fuchsia-600' href="#">Carrier</a>
            </div>
        </div>
        <div className='flex flex-col w-4/12 justify-center items-center '>
            <div className='flex flex-col justify-center items-center  gap-4'>
                <a className='text-3xl ' >Support</a>
                <a className='hover:text-fuchsia-600' href="#">Technology</a>
                <a className='hover:text-fuchsia-600' href="#">Products</a>
                <a className='hover:text-fuchsia-600' href="#">Customers</a>
                <a className='hover:text-fuchsia-600' href="#">Quality</a>
                <a className='hover:text-fuchsia-600' href="#">Sales geography</a>
            </div>
        </div>
    </div>
  )
}

export default footer