import HoverDropdown from "./HoverDropdown";

export default function LegacyHeader() {
  return (
    <header className="w-full border-b border-[#d9d9d9] bg-white">
      <div className="mx-auto w-[980px] h-[66px] flex items-center">
        {/* 왼쪽: 로고 + 로그인/공인인증센터 */}
        <div className="flex items-center gap-4 min-w-[210px]">
          <h1 className="flex items-center">
            <img
              alt="우리은행"
              src="https://web.archive.org/web/20190227033832im_/https://simg.wooribank.com/img/intro/header/h1.png"
              className="h-[34px]"
            />
          </h1>

          <div className="flex items-center gap-1 text-[12px] whitespace-nowrap">
            {/* 로그인 hover */}
            <HoverDropdown
              align="left"
              trigger={
                <button
                  type="button"
                  className="h-[22px] px-2 rounded bg-[#6E6E6E] border border-[#6E6E6E] font-bold text-white hover:bg-[#5f5f5f] whitespace-nowrap"
                  data-testid="header-login"
                >
                  로그인
                </button>
              }
            >
              <div className="px-3 py-2 text-[12px] text-[#333] whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <a className="hover:underline" href="#">
                    개인뱅킹
                  </a>
                  <span className="text-[#999]">|</span>
                  <a className="hover:underline" href="#">
                    기업뱅킹
                  </a>
                </div>
              </div>
            </HoverDropdown>

            {/* 공인인증센터 hover */}
            <HoverDropdown
              align="left"
              trigger={
                <button
                  type="button"
                  className="h-[22px] px-3 rounded bg-white hover:bg-[#eaeaea] text-[#333] border border-transparent whitespace-nowrap"
                  data-testid="header-cert"
                >
                  공인인증센터
                </button>
              }
            >
              <div className="px-3 py-2 text-[12px] text-[#333] whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <a className="hover:underline" href="#">
                    개인
                  </a>
                  <span className="text-[#999]">|</span>
                  <a className="hover:underline" href="#">
                    기업
                  </a>
                </div>
              </div>
            </HoverDropdown>
          </div>
        </div>

        {/* 가운데: GNB */}
        <nav className="flex-1 flex items-center justify-center gap-1 flex-nowrap whitespace-nowrap">
          {/* 개인 (hover 메뉴) */}
          <HoverDropdown
            align="center"
            trigger={
              <button
                type="button"
                className="h-[46px] px-2 text-[13px] font-bold text-[#333] hover:text-[#0b78b6] whitespace-nowrap"
                data-testid="gnb-개인"
              >
                개인
              </button>
            }
          >
            <div className="px-4 py-3 text-[12px] text-[#333] whitespace-nowrap">
              <div className="font-bold mb-2">개인뱅킹</div>
              <ul className="space-y-1">
                {[
                  "조회",
                  "이체",
                  "공과금",
                  "예금/신탁",
                  "펀드",
                  "보험",
                  "대출",
                  "외환/골드",
                  "퇴직연금",
                  "뱅킹관리",
                  "ISA",
                ].map((t) => (
                  <li key={t}>
                    <a href="#" className="hover:underline">
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </HoverDropdown>

          {/* 기업 (hover 메뉴) */}
          <HoverDropdown
            align="center"
            trigger={
              <button
                type="button"
                className="h-[46px] px-2 text-[13px] font-bold text-[#333] hover:text-[#0b78b6] whitespace-nowrap"
                data-testid="gnb-기업"
              >
                기업
              </button>
            }
          >
            <div className="px-4 py-3 text-[12px] text-[#333] whitespace-nowrap">
              <div className="font-bold mb-2">기업뱅킹</div>
              <ul className="space-y-1">
                {[
                  "조회",
                  "이체",
                  "공과금",
                  "전자결제",
                  "수표어음",
                  "자금관리",
                  "예금/신탁",
                  "대출",
                  "펀드/보험",
                  "외환",
                  "퇴직연금",
                  "뱅킹관리",
                ].map((t) => (
                  <li key={t}>
                    <a href="#" className="hover:underline">
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </HoverDropdown>

          {/* 카드 (그냥 버튼) */}
          <button
            type="button"
            className="h-[46px] px-2 text-[13px] font-bold text-[#333] hover:text-[#0b78b6] whitespace-nowrap"
            data-testid="gnb-카드"
          >
            카드
          </button>

          {/* 자산관리 (hover 메뉴) */}
          <HoverDropdown
            align="center"
            trigger={
              <button
                type="button"
                className="h-[46px] px-2 text-[13px] font-bold text-[#333] hover:text-[#0b78b6] whitespace-nowrap"
                data-testid="gnb-자산관리"
              >
                자산관리
              </button>
            }
          >
            <div className="px-4 py-3 text-[12px] text-[#333] whitespace-nowrap">
              <div className="font-bold mb-2">자산관리</div>
              <ul className="space-y-1">
                {["로보/전문가설계", "펀드마켓", "은퇴설계", "재무설계"].map(
                  (t) => (
                    <li key={t}>
                      <a href="#" className="hover:underline">
                        {t}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </HoverDropdown>

          {/* 금융상품 (hover 메뉴) */}
          <HoverDropdown
            align="center"
            trigger={
              <button
                type="button"
                className="h-[46px] px-2 text-[13px] font-bold text-[#333] hover:text-[#0b78b6] whitespace-nowrap"
                data-testid="gnb-금융상품"
              >
                금융상품
              </button>
            }
          >
            <div className="px-4 py-3 text-[12px] text-[#333] whitespace-nowrap">
              <div className="font-bold mb-2">금융상품</div>
              <ul className="space-y-1">
                {[
                  "추천상품",
                  "예금",
                  "펀드",
                  "대출",
                  "외환",
                  "골드",
                  "신탁",
                  "보험",
                  "퇴직연금",
                  "We'llRich100",
                  "ISA",
                ].map((t) => (
                  <li key={t}>
                    <a href="#" className="hover:underline">
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </HoverDropdown>

          {/* 우리사랑e나눔터 (그냥 버튼) */}
          <button
            type="button"
            className="h-[46px] px-1 text-[13px] font-bold text-[#333] hover:text-[#0b78b6] whitespace-nowrap"
            data-testid="gnb-우리사랑e나눔터"
          >
            우리사랑e나눔터
          </button>
        </nav>

        {/* 오른쪽: 전체서비스 + Language + 검색 */}
        <div className="flex items-center justify-end gap-3 min-w-[210px]">
          {/* 전체서비스 hover */}
          <HoverDropdown
            align="right"
            trigger={
              <button
                type="button"
                className="h-[46px] px-1 text-[13px] font-bold text-[#333] hover:text-[#0b78b6] whitespace-nowrap"
                data-testid="header-all"
              >
                전체서비스
              </button>
            }
          >
            <div className="p-4 text-[12px] text-[#333] w-[420px]">
              <div className="font-bold mb-2">전체서비스</div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1">
                  <div className="font-bold text-[#666]">바로가기</div>
                  {[
                    "자산/펀드",
                    "보험센터",
                    "론센터",
                    "외환센터",
                    "주택도시기금(주택청약)",
                  ].map((t) => (
                    <a key={t} href="#" className="block hover:underline">
                      {t}
                    </a>
                  ))}
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-[#666]">스마트</div>
                  {[
                    "스마트금융",
                    "투체어스PB",
                    "제휴우대클럽",
                    "머핀",
                    "이벤트",
                  ].map((t) => (
                    <a key={t} href="#" className="block hover:underline">
                      {t}
                    </a>
                  ))}
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-[#666]">고객</div>
                  {[
                    "고객광장",
                    "보안센터",
                    "은행소개/IR",
                    "영업점안내",
                    "웹진좋은예감",
                  ].map((t) => (
                    <a key={t} href="#" className="block hover:underline">
                      {t}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </HoverDropdown>

          {/* Language hover */}
          <HoverDropdown
            align="right"
            trigger={
              <button
                type="button"
                className="h-[27px] px-2 text-[12px] font-bold text-white bg-[#0083CB] rounded whitespace-nowrap"
                data-testid="header-language"
              >
                Language
              </button>
            }
          >
            <div className="px-4 py-3 text-[12px] text-[#333] w-[220px]">
              <div className="font-bold mb-2">LANGUAGE</div>
              <ul className="space-y-1">
                {[
                  "English",
                  "Chinese (中國語 )",
                  "Japanese (日本語)",
                  "Filipino (Tagalog)",
                  "Vietnamese (tiếng Việt)",
                  "Mongolian (Монгол хэл)",
                ].map((t) => (
                  <li key={t}>
                    <a href="#" className="hover:underline">
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </HoverDropdown>

          {/* 검색 */}
          <div className="flex items-center gap-1">
            <input
              className="h-[22px] w-[86px] px-2 text-[11px] outline-none border-b text-[#777777]"
              defaultValue="위비멤버스"
              data-testid="header-search-input"
            />
            <button
              type="button"
              className="h-[22px] w-[22px] border border-[#cfcfcf] flex items-center justify-center text-[#777] bg-[#f5f5f5]"
              data-testid="header-search-btn"
              title="검색"
            >
              🔍
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
