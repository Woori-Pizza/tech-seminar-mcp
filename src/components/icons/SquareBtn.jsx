export const SquareBtn = ({ icon, className = "", dataIdx, onMouse }) => (
  <button
    type="button"
    data-idx={dataIdx}
    className={`h-[22px] w-[22px] border border-[#cfcfcf] bg-[#f5f5f5] text-[#777] js-square-btn cursor-pointer hover:bg-white flex items-center justify-center ${className}`}
    onMouseEnter={() => onMouse && onMouse(true)}
    onMouseLeave={() => onMouse && onMouse(false)}
  >
    {icon}
  </button>
);
