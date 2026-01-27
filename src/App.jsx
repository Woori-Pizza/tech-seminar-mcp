import LegacyHeader from "./components/LegacyHeader";
import LegacySlider from "./components/LegacySlider";
import LegacyFooter from "./components/LegacyFooter";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#222]">
      <LegacyHeader />
      <main className="flex-1 mx-auto w-full">
        <LegacySlider />

        {/* 중간 회색 탭바(스크린샷 감성) */}
        <section className="mt-0">
          <div className="inner grid grid-cols-6 text-white text-[13px]">
            {[
              "특별한 하루",
              "우리 첫거래 감사적금",
              "개인형IRP",
              "iTouch 우리예금",
              "서민금융 대표상품",
              "",
            ].map((t, i) => (
              <button
                key={i}
                data-idx={i}
                className={`js-tab h-12 flex items-center justify-center border-r border-white/20 transition-colors 
          cursor-pointer hover:bg-[#2f95c9] 
          ${i === 3 ? "bg-[#2f95c9] font-bold" : "bg-[#b8b2b2]"}
        `}
              >
                {t}
              </button>
            ))}
          </div>
        </section>

        {/* 아래는 껍데기만 */}
        <section className="py-10">
          <div className="grid grid-cols-3 gap-10 border-t border-[#e5e5e5] pt-8">
            <div>
              <div className="flex items-end gap-3">
                <h3 className="text-[20px] font-bold">우리뉴스</h3>
                <span className="text-[12px] text-[#777]">
                  보안뉴스 | 상품/약관 공시
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-[13px] text-[#444]">
                <li className="truncate">
                  [공지]3·1운동 및 대한민국임시정부 수립 100...
                </li>
                <li className="truncate">
                  [공지] 인터넷뱅킹 예금잔액증명 발급_시행 안내
                </li>
                <li className="truncate">[공지] #우리은행_역사찾기 공모전</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[20px] font-bold">우리알림</h3>
              <div className="mt-4 h-24 rounded border border-[#e5e5e5] bg-white p-3 text-[13px] text-[#444]">
                소비자정보포털 안내(더미)
              </div>
            </div>

            <div>
              <h3 className="text-[20px] font-bold">이벤트</h3>
              <div className="mt-4 h-24 rounded border border-[#e5e5e5] bg-[#f7f7f7] p-3 text-[13px] text-[#444]">
                이벤트 배너 영역(더미)
              </div>
            </div>
          </div>
        </section>
      </main>

      <LegacyFooter />
    </div>
  );
}
