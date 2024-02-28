import React from 'react'

function Button({ title = "sign up", width, onClick, disabled, color = 'pink', fontSize = 'text-xs' }) {
  return (
    <div className={`flex items-center justify-center py-4 w-40 rounded-full button shadow-md ${disabled ? 'opacity-50 cursor-not-allowed' : `shadow-${color}-800`}`}>
      <button  className={`${fontSize} dd text-center uppercase ${disabled ? 'text-gray-500' : 'text-white'}`} onClick={onClick} disabled={disabled}>
        {title}
      </button>
    </div>
  );
}

export default Button