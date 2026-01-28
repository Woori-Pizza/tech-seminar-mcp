import React from 'react';
import pauseIcon from '../assets/pause-icon-2bb998.png';
import prevIcon from '../assets/prev-icon-6ee6b1.png';
import nextIcon from '../assets/next-icon-6ee6b1.png';

const BannerControls = ({ 
  currentSlide, 
  totalSlides, 
  onSlideChange, 
  onPrev, 
  onNext, 
  isPlaying, 
  onTogglePlay 
}) => {
  return (
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
      {/* 이전 버튼 */}
      <button
        onClick={onPrev}
        className="w-[20px] h-[24px] flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity"
        aria-label="이전 슬라이드"
      >
        <img src={prevIcon} alt="" className="w-full h-full object-contain" />
      </button>

      {/* 일시정지/재생 버튼 */}
      <button
        onClick={onTogglePlay}
        className="w-[18px] h-[20px] flex items-center justify-center hover:opacity-80 transition-opacity"
        aria-label={isPlaying ? '일시정지' : '재생'}
      >
        <img src={pauseIcon} alt="" className="w-full h-full object-contain" />
      </button>

      {/* 슬라이드 인디케이터 */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideChange(index)}
            className="relative w-[6px] h-[6px] rounded-full bg-[#777777]"
            aria-label={`슬라이드 ${index + 1}로 이동`}
          >
            <div
              className={`absolute inset-0 rounded-full bg-black transition-opacity ${
                currentSlide === index ? 'opacity-60' : 'opacity-10'
              }`}
            />
          </button>
        ))}
      </div>

      {/* 다음 버튼 */}
      <button
        onClick={onNext}
        className="w-[20px] h-[24px] flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity"
        aria-label="다음 슬라이드"
      >
        <img src={nextIcon} alt="" className="w-full h-full object-contain" />
      </button>
    </div>
  );
};

export default BannerControls;
