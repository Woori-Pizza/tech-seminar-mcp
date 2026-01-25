// src/components/LegacyIconButton.jsx
export default function LegacyIconButton({
  label,
  variant = "legacyA",
  dataTestId,
}) {
  const isA = variant === "legacyA";

  return (
    <button
      type="button"
      data-testid={dataTestId}
      className={[
        "group flex flex-col items-center justify-start",
        "select-none",
      ].join(" ")}
      onClick={() => {
        // playwright 클릭 체크용
        console.log(`[LegacyIconButton] clicked: ${label} (${variant})`);
      }}
    >
      {/* 아이콘 영역 */}
      <div
        className={[
          "flex items-center justify-center",
          isA
            ? "h-[54px] w-[54px] rounded-full border border-[#d9d9d9] bg-white group-hover:bg-[#f7fbff]"
            : "h-[54px] w-[54px] rounded-[10px] border-2 border-[#cfd6dd] bg-[#f8f8f8] group-hover:bg-white",
        ].join(" ")}
      >
        {/* placeholder icon */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          className={isA ? "opacity-70" : "opacity-80"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3L20 7V17L12 21L4 17V7L12 3Z"
            stroke={isA ? "#5a5a5a" : "#4a4a4a"}
            strokeWidth="1.6"
          />
          <path
            d="M8 10H16"
            stroke={isA ? "#5a5a5a" : "#4a4a4a"}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M8 14H13"
            stroke={isA ? "#5a5a5a" : "#4a4a4a"}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* 라벨 */}
      <div
        className={[
          "mt-2 text-[12px] leading-tight",
          isA
            ? "text-[#333] font-bold"
            : "text-[#2f2f2f] font-extrabold tracking-[-0.2px]",
        ].join(" ")}
      >
        {label}
      </div>

      {/* legacyB는 아래 보조 텍스트(약간 레거시한 느낌) */}
      {!isA && <div className="mt-0.5 text-[10px] text-[#777]">바로가기</div>}
    </button>
  );
}
