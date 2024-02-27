import React, { useState } from 'react';
import Button from './Button';
import axios from 'axios';

function Signup() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/signup', {
        name,
        username,
        email,
        password,
        confirmPassword,
      });

      console.log(response.data); // You can handle the response as needed
    } catch (error) {
      console.error('Error signing up:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='w-full dd h-screen flex items-center object-cover p-10 justify-center'>
      <img src="/src/assets/imgs/cintaku_8.jpg" className='fixed w-screen h-screen' alt="" />
      <div className='z-50 text-white p-10'>
        <h1 className="text-6xl max-md:text-xl mt-5 text-center">Sign Up</h1>
        <form action="#" method="post" onSubmit={handleSubmit} className="flex flex-col text-black font-mono gap-y-2 w-96 max-md:w-52 mt-1">
          <label htmlFor="name" className='text-white'>Name: </label>
          <input className='p-1' type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your Name" />
          
          <label htmlFor="username" className='text-white'>Username: </label>
          <input className='p-1' type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="username" />
          
          <label htmlFor="email" className='text-white'>Email: </label>
          <input className='p-1' type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="your@email.com" />
          
          <label htmlFor="password" className='text-white'>Password: </label>
          <input className='p-1' type="password" name="password" minLength={8} maxLength={300} id="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="**********" autoComplete="new-password" />
          
          <label htmlFor="confirmPassword" className='text-white'>Confirm Password: </label>
          <input className='p-1' type="password" name="confirmPassword" minLength={8} autoCorrect='password' maxLength={300} id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required placeholder="**********" autoComplete="new-password" />
          
          <div className='flex max-md:flex-col justify-center items-center gap-x-2'>
            <button type="submit" className="text-white rounded">
              <Button title="Register" />
            </button>
            <h1 className='flex items-center text-center justify-center text-white dd'>or</h1>
            <a href='/login' className="text-white rounded">
              <Button title='Login' />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
