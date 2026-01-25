import { useEffect, useRef } from "react";
import $ from "jquery";
import { FOOTER_LINKS } from "../data/mockData";

export default function LegacyFooter() {
  const footerRef = useRef(null);

  useEffect(() => {
    const $footer = $(footerRef.current);

    // [jQuery] 트리거 버튼 클릭 시 해당 패널 토글
    $footer.find(".js-footer-trigger").on("click", function (e) {
      e.preventDefault();
      e.stopPropagation(); // 부모로 이벤트가 전달되어 즉시 닫히는 것 방지

      const $panel = $(this).siblings(".js-footer-panel");

      // 다른 열려있는 모든 푸터 패널은 숨김
      $(".js-footer-panel").not($panel).hide();

      // 현재 패널을 보여주거나 숨김
      $panel.toggle();
    });

    // [jQuery] 패널 내부를 클릭했을 때 패널이 닫히지 않도록 방지
    $footer.find(".js-footer-panel").on("click", function (e) {
      e.stopPropagation();
    });

    // [jQuery] 문서 전체 클릭 시 열려있는 모든 패널 닫기 (바탕 클릭 시 닫기)
    const handleBodyClick = () => {
      $(".js-footer-panel").hide();
    };

    $(document).on("click", handleBodyClick);

    return () => {
      $footer.find(".js-footer-trigger").off();
      $footer.find(".js-footer-panel").off();
      $(document).off("click", handleBodyClick);
    };
  }, []);

  return (
    <footer
      className="w-full bg-white border-t border-[#d9d9d9] relative z-[500]"
      ref={footerRef}
    >
      {/* 상단 링크바 (회색 영역) */}
      <div className="bg-[#F8F8F8] py-4 border-b border-[#d9d9d9]">
        <div className="mx-auto w-[980px] flex items-center justify-between">
          <div className="flex items-center gap-4 text-[12px] text-[#333]">
            {/* 대표 ARS */}
            <div className="relative">
              <button
                type="button"
                className="js-footer-trigger px-2 py-1 rounded hover:bg-[#e2e2e2] cursor-pointer transition-colors"
              >
                대표 <strong>1588-5000</strong>
              </button>
              <div className="js-footer-panel absolute bottom-[35px] left-0 hidden bg-white border border-[#cfcfcf] shadow-md p-4 w-[360px] text-left z-[501]">
                <div className="font-bold mb-2 text-[13px]">ARS 이용안내</div>
                <div className="border-t border-[#eee] pt-2 space-y-2 text-[12px]">
                  <div className="flex justify-between">
                    <span className="text-[#0b78b6] font-bold">대표전화</span>
                    <span>1588-5000 / 1599-5000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#777] font-bold">고객의 말씀</span>
                    <span>080-365-5000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 기타서비스 */}
            <div className="relative">
              <button
                type="button"
                className="js-footer-trigger px-2 py-1 rounded hover:bg-[#e2e2e2] cursor-pointer transition-colors"
              >
                기타서비스
              </button>
              <div className="js-footer-panel absolute bottom-[35px] left-0 hidden bg-white border border-[#cfcfcf] shadow-md p-4 w-[520px] text-left z-[501]">
                <div className="font-bold mb-2 text-[13px]">기타서비스</div>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-[12px]">
                  {FOOTER_LINKS.others.map((t) => (
                    <a
                      key={t}
                      href="#none"
                      className="hover:underline cursor-pointer text-[#333]"
                    >
                      {t}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* LANGUAGE */}
            <div className="relative">
              <button
                type="button"
                className="js-footer-trigger px-2 py-1 rounded hover:bg-[#e2e2e2] cursor-pointer transition-colors"
              >
                LANGUAGE
              </button>
              <div className="js-footer-panel absolute bottom-[35px] left-0 hidden bg-white border border-[#cfcfcf] shadow-md p-4 w-[240px] text-left z-[501]">
                <div className="font-bold mb-2 text-[13px]">LANGUAGE</div>
                <div className="space-y-1 text-[12px]">
                  {FOOTER_LINKS.languages.map((t) => (
                    <a
                      key={t}
                      href="#none"
                      className="block hover:underline cursor-pointer text-[#333]"
                    >
                      {t}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* 패밀리사이트 */}
            <div className="relative">
              <button
                type="button"
                className="js-footer-trigger px-2 py-1 rounded hover:bg-[#e2e2e2] cursor-pointer transition-colors"
              >
                패밀리사이트
              </button>
              <div className="js-footer-panel absolute bottom-[35px] left-0 hidden bg-white border border-[#cfcfcf] shadow-md p-4 w-[360px] text-left z-[501]">
                <div className="font-bold mb-2 text-[13px]">패밀리사이트</div>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-[12px]">
                  {FOOTER_LINKS.family.map((t) => (
                    <a
                      key={t}
                      href="#none"
                      className="hover:underline cursor-pointer text-[#333]"
                    >
                      {t}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 본문 (로고 및 링크 리스트) */}
      <div className="bg-white">
        <div className="mx-auto w-[980px] py-10 flex gap-6">
          <div className="w-[140px] pt-1">
            <img
              alt="우리은행"
              className="h-[24px] w-auto opacity-80"
              src="https://web.archive.org/web/20190225035655im_/https://simg.wooribank.com/img/common/footer/icon_woori.gif"
            />
          </div>

          <div className="flex-1 text-left text-[12px] text-[#444] leading-[1.7]">
            <p className="text-[#333]">
              {FOOTER_LINKS.bottom.map((txt, idx) => (
                <span key={txt}>
                  <a
                    href="#none"
                    className={`hover:underline cursor-pointer ${
                      txt === "개인정보처리방침"
                        ? "font-bold text-[#0b78b6]"
                        : ""
                    }`}
                  >
                    {txt}
                  </a>
                  {idx !== 5 && idx !== 10 ? " | " : idx === 5 ? <br /> : ""}
                </span>
              ))}
            </p>
            <p className="mt-2 text-[#777]">
              COPYRIGHTS WOORI BANK. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
