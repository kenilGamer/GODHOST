import React, { useState } from 'react';
import Button from '../components/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });

      if (response.data.message) {
        alert(response.data.message);
        navigate("/");
      } else {
        alert('Wrong credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error.response ? error.response.data : error.message);
      // Handle error (e.g., display error message to the user)
    }
  };
  return (
    
    <div className='w-full dd h-screen flex items-center object-cover p-10 justify-center'>
      <img src="../../public/imgs/cintaku_8.jpg" className='fixed w-screen h-screen' alt="" />
      <div className='z-50 text-white p-10 flex flex-col gap-10'>
        <h1 className="text-6xl max-md:text-xl mt-5 text-center">Login</h1>
        <form action="#" method="post" onSubmit={handleSubmit} className="flex flex-col text-black font-mono gap-y-2 w-96 max-md:w-52  mt-1">
{/*         
          <label htmlFor="username" className='text-white'>Username: </label>
          <input className='p-1' type="text" name="username" id="username" required placeholder="username" />
           */}
          <label htmlFor="email" className='text-white'>Email: </label>
          <input className='p-1' type="email" name="email" id="email" onChange={ e => setEmail(e.target.value)} required placeholder="your@email.com" />
          
          <label htmlFor="password" className='text-white'>Password: </label>
          <input className='p-1' type="password" name="password" minLength={8} onChange={ e => setPassword(e.target.value)} maxLength={300} id="password" required placeholder="**********" autoComplete="new-password" />
          <div className='text-white font-semibold'>
            <a href='/forward'>forward password?</a>
          </div>
          <div className='flex max-md:flex-col justify-center items-center gap-x-2'>
            <button type="submit"   className="text-white rounded"><Button onClick={handleSubmit} title='login'  /></button>
            <h1 className='flex items-center text-center justify-center text-white dd'>or</h1>
            <a href='/signup' className="text-white rounded"><Button title='signup' /></a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login