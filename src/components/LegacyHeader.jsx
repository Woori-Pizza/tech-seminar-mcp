import { useEffect, useRef } from "react";
import $ from "jquery";
import { GNB_DATA, ALL_SERVICE_DATA, LANGUAGES } from "../data/mockData";
import { SquareBtn } from "./icons/SquareBtn";

export default function LegacyHeader() {
  const headerRef = useRef(null);
  
  useEffect(() => {
    const $header = $(headerRef.current);
    
    // [jQuery] 클릭 시 메뉴 토글 로직
    $header.find(".js-click-item").on("click", function (e) {
      e.stopPropagation();
      const $panel = $(this).find(".js-dropdown-panel");
      $(".js-dropdown-panel").not($panel).hide();
      $panel.toggle();
    });
    
    $(document).on("click", () => $(".js-dropdown-panel").hide());
    
    return () => {
      $header.find(".js-click-item").off();
      $(document).off("click");
    };
  }, []);

  return (
    <header className="w-full border-b border-[#d9d9d9] bg-white relative z-[1000]" ref={headerRef}>
      <div className="mx-auto w-[980px] h-[66px] flex items-center justify-between">
        
        {/* 왼쪽: 로고 + 로그인/공인인증센터 (정렬 수정) */}
        <div className="flex items-center gap-5">
          <h1 className="flex items-center cursor-pointer">
            <img
              alt="우리은행"
              src="https://web.archive.org/web/20190227033832im_/https://simg.wooribank.com/img/intro/header/h1.png"
              className="h-[34px]"
            />
          </h1>
          <div className="flex items-center gap-1 h-full">
            {/* 로그인 */}
            <div className="js-click-item relative cursor-pointer">
              <button
                type="button"
                className="h-[26px] px-2 rounded bg-[#6E6E6E] text-white font-bold text-[12px] whitespace-nowrap pointer-events-none cursor-pointer"
              >
                로그인
              </button>
              <div className="js-dropdown-panel absolute top-[34px] left-0 hidden bg-white border border-[#d9d9d9] shadow-md p-3 min-w-[150px] text-[12px] z-50">
                <a className="hover:underline cursor-pointer" href="#">개인뱅킹</a> |{" "}
                <a className="hover:underline cursor-pointer" href="#">기업뱅킹</a>
              </div>
            </div>
            {/* 공인인증센터 (텍스트 줄바꿈 방지) */}
            <div className="js-click-item relative cursor-pointer">
              <button
                type="button"
                className="h-[26px] px-2 rounded bg-white text-[#333] border border-[#ccc] text-[12px] whitespace-nowrap pointer-events-none cursor-pointer"
              >
                공인인증센터
              </button>
              <div className="js-dropdown-panel absolute top-[34px] left-0 hidden bg-white border border-[#d9d9d9] shadow-md p-3 min-w-[120px] text-[12px] z-50">
                <a className="hover:underline cursor-pointer" href="#">개인</a> |{" "}
                <a className="hover:underline cursor-pointer" href="#">기업</a>
              </div>
            </div>
          </div>
        </div>

        {/* 가운데: GNB */}
        <nav className="flex items-center gap-1">
          {GNB_DATA.map((menu) => (
            <div key={menu.label} className="js-click-item relative cursor-pointer">
              <button
                type="button"
                className="h-[66px] px-1 text-[14px] font-bold text-[#333] whitespace-nowrap pointer-events-none cursor-pointer hover:text-[#0b78b6]"
              >
                {menu.label}
              </button>
              <div className="js-dropdown-panel absolute top-[66px] left-1/2 -translate-x-1/2 hidden bg-white border border-[#d9d9d9] shadow-md p-4 min-w-[160px] z-50">
                <div className="font-bold mb-2 text-left text-[#0b78b6]">{menu.label}뱅킹</div>
                <ul className="space-y-1 text-[12px] text-left">
                  {menu.dropdown.map((d) => (
                    <li key={d}>
                      <a href="#" className="hover:underline cursor-pointer text-[#666]">{d}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <button type="button" className="h-[66px] px-3 text-[14px] font-bold text-[#333] cursor-pointer hover:text-[#0b78b6]">카드</button>
          <button type="button" className="h-[66px] px-3 text-[14px] font-bold text-[#333] cursor-pointer hover:text-[#0b78b6]">우리사랑e나눔터</button>
        </nav>

        {/* 오른쪽: 전체서비스 + Language + 검색 (텍스트 잘림 현상 수정) */}
        <div className="flex items-center gap-2">
          <div className="js-click-item relative cursor-pointer">
            <button
              type="button"
              className="h-[66px] px-1 text-[13px] font-bold text-[#333] whitespace-nowrap pointer-events-none cursor-pointer hover:text-[#0b78b6]"
            >
              전체서비스
            </button>
            <div className="js-dropdown-panel absolute top-[66px] right-0 hidden bg-white border border-[#d9d9d9] shadow-md p-5 w-[420px] z-50">
              <div className="font-bold mb-3 text-left border-b pb-2">전체서비스</div>
              <div className="grid grid-cols-3 gap-4 text-[12px] text-left">
                <div>
                  <div className="font-bold text-[#666] mb-1">바로가기</div>
                  {ALL_SERVICE_DATA.shortcut.map((t) => (
                    <a key={t} className="block py-0.5 hover:underline cursor-pointer">{t}</a>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-[#666] mb-1">스마트</div>
                  {ALL_SERVICE_DATA.smart.map((t) => (
                    <a key={t} className="block py-0.5 hover:underline cursor-pointer">{t}</a>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-[#666] mb-1">고객</div>
                  {ALL_SERVICE_DATA.customer.map((t) => (
                    <a key={t} className="block py-0.5 hover:underline cursor-pointer">{t}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="js-click-item relative cursor-pointer">
            <button
              type="button"
              className="h-[27px] px-2 text-[12px] font-bold text-white bg-[#0083CB] rounded whitespace-nowrap pointer-events-none cursor-pointer"
            >
              Language
            </button>
            <div className="js-dropdown-panel absolute top-[34px] right-0 hidden bg-white border border-[#d9d9d9] shadow-md p-3 w-[200px] text-left z-50">
              <div className="font-bold mb-2 text-[12px] border-b pb-1">LANGUAGE</div>
              <ul className="space-y-1 text-[12px]">
                {LANGUAGES.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:underline cursor-pointer">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex items-center border-b border-[#cfcfcf] ml-1">
            <input
              className="h-[22px] w-[80px] px-1 text-[11px] outline-none"
              defaultValue="위비멤버스"
            />
            <SquareBtn icon="🔍" testId="header-search-btn" />
          </div>
        </div>
      </div>
    </header>
  );
}