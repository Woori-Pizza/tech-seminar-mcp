export default function LegacyContent() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-[980px] pt-[18px] pb-[10px]">
        <div className="grid grid-cols-3 gap-8">
          <NewsBox />
          <NoticeBox />
          <EventBox />
        </div>
      </div>
    </section>
  );
}

function BoxHeader({ title, moreLabel, showNewsTabs }) {
  return (
    <div className="flex items-center justify-between pb-2">
      <div className="flex items-center gap-3">
        <h3 className="text-[14px] font-bold text-[#333]">{title}</h3>

        {showNewsTabs && (
          <div className="flex items-center gap-2 text-[14px] font-bold text-[#333]">
            <span>보안뉴스</span>
            <span>상품/약관 공시</span>
          </div>
        )}
      </div>

      <a
        href="#none"
        className="text-[12px] text-[#666] hover:underline"
        title={`${moreLabel} 더보기`}
      >
        <span className="sr-only">{moreLabel}</span>더보기
      </a>
    </div>
  );
}

function NewsBox() {
  const items = [
    "[공지]3·1운동 및 대한민국임시정부 수립 100...",
    "[공지]「인터넷뱅킹 예금잔액증명 발급」시행 안내",
    "[공지] '#우리은행_역사찾기' 공모전",
  ];

  return (
    <div>
      <BoxHeader title="우리뉴스" moreLabel="우리뉴스" showNewsTabs />

      <div className="border-t border-[#e6e6e6] pt-3 space-y-2">
        {items.map((t) => (
          <a
            key={t}
            href="#none"
            className="block text-[12px] text-[#333] hover:underline"
          >
            {t}
          </a>
        ))}
      </div>
    </div>
  );
}

function NoticeBox() {
  return (
    <div>
      <div className="flex items-center justify-between pb-2">
        <h3 className="text-[14px] font-bold text-[#333]">우리알림</h3>
      </div>

      <div className="border border-[#e6e6e6] bg-white h-[110px] flex overflow-hidden">
        <div className="w-[110px] shrink-0 flex items-center justify-center bg-white">
          <img
            alt=""
            className="h-[86px] w-auto"
            src="https://web.archive.org/web/20190225035525im_/https://www.wooribank.com/img/intro/home/notice_20180907_01.png"
          />
        </div>

        <div className="flex-1 py-3 pr-3">
          <h4 className="text-[13px] font-bold text-[#333]">
            '소비자정보포털' 안내
          </h4>
          <p className="mt-1 text-[12px] text-[#666] leading-[1.35]">
            민원접수부터 유익한
            <br />
            소비자정보까지 한 눈에
          </p>
        </div>
      </div>
    </div>
  );
}

function EventBox() {
  return (
    <div>
      <BoxHeader title="이벤트" moreLabel="이벤트" />

      <div className="border border-[#e6e6e6] bg-white h-[110px] overflow-hidden flex items-center justify-center">
        <img
          alt="예적금 가입하고 다양한 경품도 받고"
          className="h-[97px] w-auto"
          src="https://web.archive.org/web/20190225035544im_/https://www.wooribank.com/img/smart/intro/INTPOT_ALL_INTRO_EVT3/1899_297.gif"
        />
      </div>
    </div>
  );
}
