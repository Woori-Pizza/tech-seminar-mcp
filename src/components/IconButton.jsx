import React from 'react';

const IconButton = ({ icon, text, className = '', textClassName = '', onHover }) => {
  const handleClick = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/user");

      if (!res.ok) {
        throw new Error("API request failed");
      }

      const data = await res.json();

      // MCP 시나리오 테스트 포인트
      if (!("userName" in data)) {
        console.error(
          "[API Schema Error] userName field is missing",
          data
        );
      } else {
        console.log("userName:", data.userName);
      }
    } catch (err) {
      console.error("API 호출 중 에러 발생", err);
    }
  };

  return (
    <div 
      className={`flex flex-col items-center justify-center transition-all duration-200 cursor-pointer ${className}`}
      onClick={handleClick}
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