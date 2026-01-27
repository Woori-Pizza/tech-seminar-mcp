import React from 'react';

const LinkCard = ({ image, title, description }) => {
  return (
    <div className="w-[304px] h-[287px] flex flex-col cursor-pointer transition-transform duration-200 hover:-translate-y-1">
      <div className="w-[304px] h-[200px] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-fill block"
        />
      </div>
      <h3 className="font-bold text-[19px] leading-[1.2] text-[#555555] text-center mt-[10px]">
        {title}
      </h3>
      <p className="font-[350] text-[14px] leading-[1.2] text-[#666666] text-center mt-[10px] whitespace-pre-line">
        {description}
      </p>
    </div>
  );
};

export default LinkCard;
