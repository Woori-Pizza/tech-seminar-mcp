export default function HoverDropdown({
  trigger,
  children,
  align = "left",
  className = "",
}) {
  const alignClass =
    align === "center"
      ? "left-1/2 -translate-x-1/2"
      : align === "right"
      ? "right-0"
      : "left-0";

  return (
    <div className={`relative group ${className}`}>
      {trigger}

      {/* dropdown */}
      <div
        className={`absolute top-[44px] ${alignClass} z-50 hidden group-hover:block`}
      >
        {/* arrow */}
        <div className="relative">
          <span
            className={[
              "absolute -top-[6px] h-0 w-0",
              "border-l-[6px] border-r-[6px] border-b-[6px]",
              "border-l-transparent border-r-transparent border-b-white",
              align === "center" ? "left-1/2 -translate-x-1/2" : "left-6",
            ].join(" ")}
          />
        </div>

        {/* panel */}
        <div className="min-w-[160px] rounded border border-[#d9d9d9] bg-white shadow-md">
          {children}
        </div>
      </div>
    </div>
  );
}
