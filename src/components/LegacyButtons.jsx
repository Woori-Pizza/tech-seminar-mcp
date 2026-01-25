export default function LegacyButtons() {
  return (
    <div className="rounded-2xl border border-zinc-200 p-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-extrabold">바로가기 (껍데기)</div>
        <button className="rounded-xl border border-zinc-200 px-3 py-2 text-xs hover:bg-zinc-50">
          더보기
        </button>
      </div>

      <div className="mt-4 grid grid-cols-6 gap-3">
        {[
          "조회",
          "이체",
          "공과금",
          "예금",
          "대출",
          "외환",
          "카드",
          "자산관리",
          "펀드",
          "보험",
          "고객센터",
          "보안센터",
        ].map((t) => (
          <button
            key={t}
            className="flex flex-col items-center gap-2 rounded-2xl border border-zinc-200 p-3 hover:bg-zinc-50"
          >
            <div className="h-9 w-9 rounded-2xl bg-zinc-100" />
            <div className="text-xs font-semibold text-zinc-700">{t}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
