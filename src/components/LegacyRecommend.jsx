export default function LegacyRecommend() {
  const items = [
    {
      img: "https://web.archive.org/web/20190225035628im_/https://www.wooribank.com/img/intro/news/product_20180907_4_1.png",
      title: "로보-전문가 포트폴리오",
      lines: ["로보-어드바이저/ 전문가가", "추천해드리는", "펀드 포트폴리오"],
      link: "https://web.archive.org/web/20190227033832/https://spot.wooribank.com/pot/Dream?withyou=OWIPL0001",
    },
    {
      img: "https://web.archive.org/web/20190225035631im_/https://www.wooribank.com/img/intro/news/product_20180907_4_3.png",
      title: "추천펀드",
      lines: ["우리은행이 추천해드리는", "펀드 상품으로", "스마트한 자산관리!"],
      link: "https://web.archive.org/web/20190227033832/https://spot.wooribank.com/pot/Dream?withyou=OWFDM0003",
    },
    {
      img: "https://web.archive.org/web/20190225035635im_/https://www.wooribank.com/img/intro/news/product_20180907_4_2.png",
      title: "인터넷/모바일 방카",
      lines: [
        "언제 어디서나 편리한 가입!",
        "저축보험, 연금보험,",
        "암보험, 여행보험, 레저보험",
      ],
      link: "https://web.archive.org/web/20190227033832/https://spot.wooribank.com/pot/Dream?withyou=is",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-[980px] pt-6 pb-14 border-t border-[#e6e6e6]">
        <div className="flex items-center justify-between">
          <h2 className="text-[16px] font-bold text-[#333]">추천상품 - WM</h2>
        </div>

        <div className="mt-4">
          <ul className="grid grid-cols-3 gap-6">
            {items.map((it) => (
              <li
                key={it.title}
                className="border border-[#e6e6e6] bg-white p-4 h-[110px] flex gap-10"
              >
                <div className="h-[70px] w-[70px] shrink-0 flex items-center justify-center">
                  <img alt="" className="h-[70px] w-auto" src={it.img} />
                </div>

                <div className="flex-1">
                  <h3 className="text-[13px] font-bold text-[#333]">
                    {it.title}
                  </h3>

                  {/* 레거시 p + br 느낌 */}
                  <p className="mt-1 text-[12px] text-[#666] leading-[1.35]">
                    {it.lines.map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
