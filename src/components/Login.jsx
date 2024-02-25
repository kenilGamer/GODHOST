import React from 'react'
import Button from './Button'

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('The form was submitted: ', e);
  };
  return (
    
    <div className='w-screen dd h-screen flex items-center object-cover overflow-hidden justify-center'>
    <img src="/src/assets/imgs/cintaku_8.jpg" className='fixed'  alt="" />
    <div className='z-50 text-white p-10'>
        <h1 className="text-6xl text-center">Sign Up</h1>
        <form action="#" method="post" className="flex flex-col text-black font-mono gap-y-2 w-96 mt-10">
            <label htmlFor="name"  className='text-white' >Name: </label>
            <input className='p-1' type="text" name="name" id="name" required placeholder="Your Name"/>

            <label htmlFor="email" className='text-white' >Email: </label>
            <input className='p-1' type="email" name="email" id="email" required placeholder="your@email.com"/>

            <label htmlFor="password" className='text-white' >Password: </label>
            <input className='p-1' type="password" name="password" id="password" required placeholder="**********"/>

            <div className='flex'>
            <button type="submit" onClick={handleSubmit} className=" text-white py-2 px-4 rounded"><Button width={20} title='Login'/></button>  
            <h1 className='flex items-center text-white dd'>or</h1>              
            <a href='/signup' className=" text-white py-2 px-4 rounded"><Button title='signup'/></a>                
            </div>
        </form>
    </div>
</div>
  )
}

export default Login