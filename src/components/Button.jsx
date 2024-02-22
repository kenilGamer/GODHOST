/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Button({title = "sign up",width}) {
  return (
    <div className=' flex items-center justify-center py-4 w-40 rounded-full button shadow-md shadow-pink-800'>
        <button className={`text-sm  font-semibold text-center uppercase`}> {title} </button>
    </div>
  )
}

export default Button