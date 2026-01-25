export const CircularBtn = ({ icon, className = "", dataIdx }) => (
    <button
      type="button"
      data-idx={dataIdx}
      className={`h-9 w-9 rounded-full bg-black/30 text-white hover:bg-black/50 js-round-btn cursor-pointer ${className}`}
    >
      {icon}
    </button>
  );