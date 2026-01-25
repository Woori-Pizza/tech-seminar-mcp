export const SquareBtn = ({ icon, className = "", testId }) => (
    <button
      type="button"
      data-testid={testId}
      className={`h-[22px] w-[22px] border border-[#cfcfcf] bg-[#f5f5f5] text-[#777] js-square-btn cursor-pointer hover:bg-white flex items-center justify-center ${className}`}
    >
      {icon}
    </button>
  );