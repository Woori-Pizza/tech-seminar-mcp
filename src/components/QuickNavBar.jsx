import React, { useState, useEffect, useRef } from 'react';
import banner1 from '../assets/banner1-56586a.png';
import arrowRight from '../assets/arrow-right-56586a.png';
import BannerControls from './BannerControls';

const QuickNavBar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: banner1,
      alt: '은행권 소상공인 금융지원 방안 안내'
    },
    {
      id: 2,
      image: banner1,
      alt: '슬라이드 2'
    },
    {
      id: 3,
      image: banner1,
      alt: '슬라이드 3'
    },
    {
      id: 4,
      image: banner1,
      alt: '슬라이드 4'
    }
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  // 자동 재생 기능
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        handleNextSlide();
      }, 5000); // 5초마다 슬라이드 변경
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, currentSlide]);

  return (
    <div className="w-full pb-8">
      {/* 상단 이미지 슬라이더 - 전체 너비 배경 */}
      <div className="relative w-full h-[520px] bg-[#B5DAF7] mb-5">
        {/* 중앙 정렬된 슬라이더 컨테이너 */}
        <div className="relative w-full max-w-[980px] h-full mx-auto overflow-hidden">
          {/* 슬라이더 래퍼 */}
          <div className="w-full h-full overflow-hidden">
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="min-w-full h-full flex-shrink-0">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 배너 컨트롤 (인디케이터, 이전/다음 버튼, 재생/정지) */}
          <BannerControls
            currentSlide={currentSlide}
            totalSlides={slides.length}
            onSlideChange={handleSlideChange}
            onPrev={handlePrevSlide}
            onNext={handleNextSlide}
            isPlaying={isPlaying}
            onTogglePlay={handleTogglePlay}
          />
        </div>
      </div>

      {/* 하단 네비게이션 바 */}
      <div className="flex items-center bg-[#3A8DFD] rounded-[60px] h-[76px] shadow-[0px_2px_10px_0px_rgba(128,128,128,1)] w-[772px] mx-auto">
        {/* 다른금융 정보조회 - 활성화된 첫 번째 아이템 */}
        <div className="flex items-center justify-center h-full w-[170px] bg-[#0082CD] rounded-l-[60px]">
          <span className="text-white font-bold text-[20px] text-center leading-[1.3em]">
            다른금융
            <br />
            정보조회
          </span>
        </div>

        {/* 조회 */}
        <div className="flex items-center justify-center h-full w-[144px] relative">
          <span className="text-white font-bold text-[22px] text-center leading-[1.27em]">
            조회
          </span>
          <div className="absolute right-0 top-[30px] w-[1px] h-[16px] bg-[#9CC5FD]" />
        </div>

        {/* 이체 */}
        <div className="flex items-center justify-center h-full w-[144px] relative">
          <span className="text-white font-bold text-[22px] text-center leading-[1.27em]">
            이체
          </span>
          <div className="absolute right-0 top-[30px] w-[1px] h-[16px] bg-[#9CC5FD]" />
        </div>

        {/* 환율 */}
        <div className="flex items-center justify-center h-full w-[144px]">
          <span className="text-white font-bold text-[22px] text-center leading-[1.27em]">
            환율
          </span>
        </div>

        {/* 빠른메뉴 */}
        <div className="flex items-center justify-center h-full w-[170px] bg-white rounded-r-[60px] gap-2">
          <span className="text-black font-bold text-[22px] text-center leading-[1.27em]">
            빠른메뉴
          </span>
          <img
            src={arrowRight}
            alt=""
            className="w-[12px] h-[22px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default QuickNavBar;
