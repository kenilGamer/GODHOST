/* eslint-disable no-unused-vars */

import React from 'react'
import Home from './pages/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
function App() {
  return (
    <div className='w-full h-screen'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App