import { RECOMMEND_ITEMS } from "../data/mockData";

export default function LegacyRecommend() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-[980px] pt-6 pb-14 border-t border-[#e6e6e6]">
        <h2 className="text-[16px] font-bold text-[#333] mb-4">추천상품 - WM</h2>
        <ul className="grid grid-cols-3 gap-6">
          {RECOMMEND_ITEMS.map((it) => (
            <li key={it.title} className="border border-[#e6e6e6] bg-white p-4 h-[110px] flex gap-4 cursor-pointer">
              <img alt="" className="h-[70px] w-[70px]" src={it.img} />
              <div className="text-left">
                <h3 className="text-[13px] font-bold">{it.title}</h3>
                <p className="text-[11px] text-[#666] mt-1">{it.lines.join(' ')}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}