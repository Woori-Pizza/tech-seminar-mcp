import React from 'react';

const IconButton = ({ icon, text, className = '', textClassName = '', onHover }) => {
  return (
    <div 
      className={`flex flex-col items-center justify-center transition-all duration-200 cursor-pointer ${className}`}
      // 보고 체계(onHover)는 유지
      onMouseEnter={() => onHover && onHover(true)} 
      onMouseLeave={() => onHover && onHover(false)}
    >
      <div className="flex items-center justify-center w-[54px] h-[44px] mb-1">
        <img 
          src={icon} 
          alt={`${text} icon`}
          className="w-full h-full object-contain"
        />
      </div>
      {/* 텍스트 색상도 부모가 주는 대로 적용 (textClassName) */}
      <div className={`text-center font-normal text-[15px] leading-[1.2em] tracking-[-0.0666666667em] ${textClassName}`}>
        {text}
      </div>
    </div>
  );
};

export default IconButton;