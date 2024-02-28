import React from 'react';
import Button from './Button';

const HeroSection = ({ title, description, image, buttonTitle, className,show }) => {
  return (
    <div className={`hero-section ${className}`}>
        <div className="hero-section-image flex items-center justify-center">
        <img src={image} alt="" />
      </div>
      <div className="hero-section-content text-center flex gap-4 items-center justify-center px-52 max-md:px-0 flex-col">
        <h1 className="font-sans text-3xl  md:text-5xl dd text-[#4c1e51]">
          {title}
        </h1>
        <p>{description}</p>
        {show === true ? <a href="/dd"><Button title={buttonTitle} /></a> : null }
      </div>
      
    </div>
  );
};

export default HeroSection;