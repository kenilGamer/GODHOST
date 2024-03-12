import React from 'react'

function Button({ title = "sign up", width, onClick, disabled, color = 'pink', fontSize = 'text-sm' }) {
  const buttonClasses = `flex items-center justify-center py-4 w-40 rounded-full button ${disabled ? 'opacity-50 cursor-not-allowed' : `shadow-${color}-800`}`;


  return (
    <div className={buttonClasses}>
    <button className={`${fontSize} ss font-semibold sh text-center uppercase ${disabled ? 'text-gray-500' : 'text-white'}`} disabled={disabled}>
      {title}
    </button>
  </div>
  );
}

export default Button