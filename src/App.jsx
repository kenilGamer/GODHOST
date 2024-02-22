/* eslint-disable no-unused-vars */

import React from 'react'
import Home from './pages/Home'
import { Route, Router, Routes } from 'react-router-dom'
function App() {
  return (
    <div className='w-full h-screen'>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App