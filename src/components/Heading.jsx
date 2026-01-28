import React from 'react';

const Heading = ({ level = 2, children, className = '' }) => {
  const baseClasses = 'font-bold text-black';
  
  const levelStyles = {
    1: 'text-[28px] leading-[1.2]',
    2: 'text-[22px] leading-[1.2]',
    3: 'text-[18px] leading-[1.2]',
  };

  const HeadingTag = `h${level}`;
  const levelClass = levelStyles[level] || levelStyles[2];

  return React.createElement(
    HeadingTag,
    { className: `${baseClasses} ${levelClass} ${className}` },
    children
  );
};

export default Heading;
