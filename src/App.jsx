/* eslint-disable no-unused-vars */

import React from 'react'
import Home from './home/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Intel from './pages/hostings/Intel'
import Websites from './pages/hostings/websites'
import Bots from './pages/hostings/bots'
import Rayzer from './pages/hostings/rayzer'
import LocomotiveScroll from 'locomotive-scroll'
function App() {
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
      autoResize: true,
      smoothScrolling: true,
      wrapper: window,
      content: document.documentElement,
      lerp: 0.1,
      duration: 4.5,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      normalizeWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    },
  });
  return (
    <div className='w-full min-h-screen text-white bg-[#2d0a31] select-none'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/websites' element={<Websites/>} />
        <Route path='/rayzer' element={<Rayzer/>} />
        {/* <Route path='/bots' element={<Bots/>} /> */}
        <Route path='/intel' element={<Intel/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App