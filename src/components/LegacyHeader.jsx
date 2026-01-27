// src/components/LegacyHeader.jsx
export default function LegacyHeader() {
  return (
    <header className="w-full border-b border-[#d9d9d9] bg-white">
      <div className="mx-auto w-[980px] h-[66px] flex items-center">
        {/* 왼쪽: 로고 + 로그인/공인인증센터 */}
        <div className="flex items-center gap-6 min-w-[260px]">
          <h1 className="flex items-center">
            <img
              alt="우리은행"
              src="https://web.archive.org/web/20190227033832im_/https://simg.wooribank.com/img/intro/header/h1.png"
              className="h-[34px]"
            />
          </h1>

          <div className="flex items-center gap-1 text-[12px] ">
            <button
              type="button"
              className="h-[22px] px-2 rounded bg-[#6E6E6E] border border-[#6E6E6E] font-bold hover:bg-[#eaeaea] text-[#fff]"
              data-testid="header-login"
            >
              로그인
            </button>

            <button
              type="button"
              className="h-[22px] px-3 rounded bg-[#fff] hover:bg-[#eaeaea]"
              data-testid="header-cert"
            >
              공인인증센터
            </button>
          </div>
        </div>

        {/* 가운데: GNB */}
        <nav className="flex-1 flex items-center justify-center gap-2">
          {[
            "개인",
            "기업",
            "카드",
            "자산관리",
            "금융상품",
            "우리사랑e나눔터",
          ].map((label) => (
            <button
              key={label}
              type="button"
              className="h-[46px] text-[14px] font-bold text-[#333] hover:text-[#0b78b6]"
              data-testid={`gnb-${label}`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* 오른쪽: 전체서비스 + Language + 검색 */}
        <div className="flex items-center justify-end gap-4 min-w-[260px]">
          <button
            type="button"
            className="h-[46px] text-[14px] font-bold text-[#333] hover:text-[#0b78b6]"
            data-testid="header-all"
          >
            전체서비스
          </button>

          {/* Language는 오른쪽 영역 안에서 살짝 더 오른쪽 느낌 나게 */}
          <button
            type="button"
            className="h-[27px] px-2 text-[12px] font-bold text-white bg-[#0083CB] rounded whitespace-nowrap"
            data-testid="header-language"
          >
            Language
          </button>

          <div className="flex items-center gap-1">
            <input
              className="h-[22px] w-[96px] px-2 text-[11px] outline-none border-b text-[#777777]"
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
