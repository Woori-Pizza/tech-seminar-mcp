export default function LegacyHeader() {
  return (
    <header className="w-full border-b border-[#d9d9d9] bg-white h-[66px]">
      <div className="inner h-full">
        {" "}
        {/* 로고 */}
        <h1 className="absolute left-0 top-[14px]">
          <img
            alt="우리은행"
            src="https://web.archive.org/web/20190227033832im_/https://simg.wooribank.com/img/intro/header/h1.png"
            className="h-[34px]"
          />
        </h1>
        {/* 상단 미니 메뉴 (로그인/인증센터) */}
        <div className="absolute left-[165px] top-[18px] flex items-center gap-4 text-[12px]">
          <div className="js-display-hover relative group cursor-pointer">
            <span className="font-bold text-[#333]">로그인</span>
            {/* 드롭다운 생략... */}
          </div>
          <div className="js-display-hover relative group cursor-pointer">
            <span className="text-[#333]">공인인증센터</span>
          </div>
        </div>
        <nav className="absolute left-[330px] top-[10px] flex items-center gap-6">
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
              className="h-[46px] text-[14px] font-bold text-[#333] hover:text-[#0b78b6]"
            >
              {label}
            </button>
          ))}
        </nav>
        {/* 전체서비스 & 검색 */}
        <div className="absolute right-0 top-[18px] flex items-center gap-3">
          <span className="text-[12px] cursor-pointer">전체서비스</span>
          <div className="flex border border-[#cfcfcf]">
            <input
              className="w-[100px] text-[11px] px-2 outline-none h-[22px]"
              defaultValue="위비멤버스"
            />
            <button className="bg-[#f5f5f5] px-2 text-[11px] border-l border-[#cfcfcf]">
              검색
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
