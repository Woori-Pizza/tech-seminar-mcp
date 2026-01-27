import { SLIDE_TABS } from "../data/mockData";

export default function LegacySliderTabs() {
  return (
    <div className="w-full bg-[#A4ACB1] border-b border-[#A4ACB1]">
      <div className="mx-auto w-[980px] h-[44px] flex">
        {SLIDE_TABS.map((t, i) => (
          <button
            key={t}
            type="button"
            data-idx={i}
            className={[
              "js-tab flex-1 h-full text-[12px] font-bold text-white cursor-pointer transition-colors",
              "border-r border-white/25",
              i === 3 ? "bg-[#2f95c9]" : "bg-[#A4ACB1]",
            ].join(" ")}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}