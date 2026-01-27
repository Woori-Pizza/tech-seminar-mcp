// src/components/LegacySliderTabs.jsx
export default function LegacySliderTabs() {
  const tabs = [
    "특별한 하루",
    "우리 첫거래 감사적금",
    "개인형IRP",
    "iTouch 우리예금",
    "서민금융 대표상품",
  ];

  return (
    <div className="w-full bg-[#A4ACB1] border-b border-[#A4ACB1]">
      <div className="mx-auto w-[980px] h-[44px] flex">
        {tabs.map((t, i) => (
          <button
            key={t}
            type="button"
            data-idx={i}
            className={[
              "js-tab flex-1 h-full text-[12px] font-bold text-white",
              "border-r border-white/25",
              i === 2 ? "bg-[#2f95c9]" : "bg-[#A4ACB1]",
            ].join(" ")}
            data-testid={`legacy-tab-${i}`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
