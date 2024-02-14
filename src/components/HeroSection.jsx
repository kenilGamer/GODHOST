/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Button';

const HeroSection = ({ title, description, image, buttonTitle, className }) => {
  return (
    <div className={`hero-section ${className}`}>
        <div className="hero-section-image flex items-center justify-center">
        <img src={image} alt="" />
      </div>
      <div className="hero-section-content text-center flex items-center justify-center px-52 max-md:px-0 flex-col mb-10">
        <h1 className="font-sans text-3xl  md:text-5xl font-extrabold text-[#4c1e51]">
          {title}
        </h1>
        <p>{description}</p>
        <Button title={buttonTitle} />
      </div>
      
    </div>
  );
};

export default HeroSection;