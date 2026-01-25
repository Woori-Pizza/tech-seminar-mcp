// src/components/LegacyFooter.jsx
export default function LegacyFooter() {
  return (
    <footer className="w-full bg-white">
      {/* 상단 링크바 */}
      <div className="border-t border-[#d9d9d9] bg-white">
        <div className="mx-auto w-[980px] py-4 flex items-center justify-between">
          {/* hover menus */}
          <div className="flex items-center gap-4 text-[12px] text-[#333]">
            <HoverDL
              title={
                <span>
                  대표 <strong>1588-5000</strong>
                </span>
              }
            >
              <div className="w-[360px] text-left text-[12px] text-[#333]">
                <div className="font-bold mb-2">ARS 이용안내</div>
                <div className="border-t border-[#eee] pt-2 space-y-2">
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
            </HoverDL>

            <HoverDL title="기타서비스">
              <div className="w-[520px] text-left text-[12px] text-[#333]">
                <div className="font-bold mb-2">기타서비스</div>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {[
                    "법원환급금조회",
                    "미교부국민주조회",
                    "도시철도공채조회",
                    "상조회사예치금조회",
                    "예금잔액증명서발급조회",
                    "지급보증서발급조회",
                    "서울시예치금내역조회",
                  ].map((t) => (
                    <a key={t} href="#none" className="hover:underline">
                      {t}
                    </a>
                  ))}
                </div>
              </div>
            </HoverDL>

            <HoverDL title="LANGUAGE">
              <div className="w-[240px] text-left text-[12px] text-[#333]">
                <div className="font-bold mb-2">LANGUAGE</div>
                <div className="space-y-1">
                  {[
                    "English",
                    "中國語",
                    "日本語",
                    "Tagalog",
                    "tiếng Việt",
                    "Монгол хэл",
                  ].map((t) => (
                    <a key={t} href="#none" className="block hover:underline">
                      {t}
                    </a>
                  ))}
                </div>
              </div>
            </HoverDL>

            <HoverDL title="패밀리사이트">
              <div className="w-[360px] text-left text-[12px] text-[#333]">
                <div className="font-bold mb-2">패밀리사이트</div>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {[
                    "우리금융지주",
                    "우리에프아이에스",
                    "우리신용정보",
                    "우리다문화장학재단",
                    "우리펀드서비스",
                    "우리미소금융재단",
                    "우리금융경영연구소",
                    "우리종합금융",
                  ].map((t) => (
                    <a key={t} href="#none" className="hover:underline">
                      {t}
                    </a>
                  ))}
                </div>
              </div>
            </HoverDL>
          </div>

          {/* SNS icons (더미) */}
          <div className="flex items-center gap-2 text-[11px] text-[#666]">
            {[
              "facebook",
              "instagram",
              "post",
              "youtube",
              "naverTV",
              "twitter",
            ].map((t) => (
              <div
                key={t}
                className="h-6 w-6 rounded-full border border-[#d9d9d9] flex items-center justify-center hover:bg-[#f7f7f7]"
                title={t}
              >
                {t[0].toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 본문 */}
      <div className="bg-white">
        <div className="mx-auto w-[980px] py-10 flex gap-6">
          <div className="w-[140px] pt-1">
            <img
              alt="우리은행"
              className="h-[24px] w-auto opacity-80"
              src="https://web.archive.org/web/20190227033832im_/https://simg.wooribank.com/img/common/footer/icon_woori.gif"
            />
          </div>

          <div className="flex-1 text-left text-[12px] text-[#444] leading-[1.7]">
            <p className="text-[#333]">
              <a className="hover:underline" href="#none">
                은행소개
              </a>{" "}
              |{" "}
              <a className="hover:underline" href="#none">
                영업점안내
              </a>{" "}
              |{" "}
              <a className="hover:underline" href="#none">
                고객광장
              </a>{" "}
              |{" "}
              <a
                className="hover:underline font-bold text-[#0b78b6]"
                href="#none"
              >
                개인정보처리방침
              </a>{" "}
              |{" "}
              <a className="hover:underline" href="#none">
                개인정보처리보호
              </a>{" "}
              |{" "}
              <a className="hover:underline" href="#none">
                사고신고
              </a>
              <br />
              <a className="hover:underline" href="#none">
                전자민원접수
              </a>{" "}
              |{" "}
              <a className="hover:underline" href="#none">
                보호금융상품등록부
              </a>{" "}
              |{" "}
              <a className="hover:underline" href="#none">
                상품공시실
              </a>{" "}
              |{" "}
              <a className="hover:underline" href="#none">
                보안센터
              </a>{" "}
              |{" "}
              <a className="hover:underline" href="#none">
                웹접근성 이용안내
              </a>
            </p>

            <p className="mt-2 text-[#777]">
              COPYRIGHTS WOORI BANK. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* 아이콘 hover 더미 */}
          <div className="w-[240px] flex items-start justify-end gap-3">
            {["WA", "12Y", "BANKER"].map((t) => (
              <div key={t} className="group relative">
                <div className="h-[44px] w-[44px] border border-[#d9d9d9] bg-white flex items-center justify-center text-[11px] text-[#333]">
                  {t}
                </div>
                <div className="hidden group-hover:block absolute right-0 top-[52px] w-[180px] border border-[#cfcfcf] bg-white shadow p-2 text-[11px] text-[#444]">
                  {t} 인증/수상 더미 설명
                  <div className="absolute -top-1 right-4 h-2 w-2 rotate-45 bg-white border-l border-t border-[#cfcfcf]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function HoverDL({ title, children }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="px-2 py-1 rounded hover:bg-[#f3f3f3]"
        data-testid={`footer-${typeof title === "string" ? title : "menu"}`}
      >
        {title}
      </button>

      <div className="hidden group-hover:block absolute left-0 top-[28px] z-50">
        <div className="rounded border border-[#cfcfcf] bg-white shadow p-3">
          {children}
        </div>
      </div>
    </div>
  );
}
