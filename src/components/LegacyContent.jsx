import { NEWS_ITEMS } from "../data/mockData";

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

function NewsBox() {
  return (
    <div>
      <div className="flex items-center justify-between pb-2">
        <h3 className="text-[14px] font-bold text-[#333]">우리뉴스</h3>
        <a href="#" className="text-[12px] text-[#666] cursor-pointer">더보기</a>
      </div>
      <div className="border-t border-[#e6e6e6] pt-3 space-y-2">
        {NEWS_ITEMS.map((t) => (
          <a key={t} href="#" className="block text-[12px] text-[#333] hover:underline cursor-pointer">{t}</a>
        ))}
      </div>
    </div>
  );
}

function NoticeBox() {
  return (
    <div>
      <h3 className="text-[14px] font-bold text-[#333] pb-2">우리알림</h3>
      <div className="border border-[#e6e6e6] bg-white h-[110px] flex cursor-pointer">
        <div className="w-[110px] flex items-center justify-center">
          <img className="h-[86px]" src="https://web.archive.org/web/20190225035525im_/https://www.wooribank.com/img/intro/home/notice_20180907_01.png" alt="" />
        </div>
        <div className="flex-1 py-3 pr-3 text-left">
          <h4 className="text-[13px] font-bold">'소비자정보포털' 안내</h4>
          <p className="text-[12px] text-[#666] mt-1">민원접수부터 유익한 소비자정보까지</p>
        </div>
      </div>
    </div>
  );
}

function EventBox() {
  return (
    <div>
      <h3 className="text-[14px] font-bold text-[#333] pb-2">이벤트</h3>
      <div className="border border-[#e6e6e6] bg-white h-[110px] flex items-center justify-center cursor-pointer">
        <img className="h-[97px]" src="https://web.archive.org/web/20190225035544im_/https://www.wooribank.com/img/smart/intro/INTPOT_ALL_INTRO_EVT3/1899_297.gif" alt="" />
      </div>
    </div>
  );
}