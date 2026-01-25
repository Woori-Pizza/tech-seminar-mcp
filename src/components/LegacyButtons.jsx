// src/components/LegacyButtons.jsx
import { useEffect, useRef } from "react";
import $ from "jquery";
import LegacyIconButton from "./LegacyIconButton";

const BUTTONS = [
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
];

export default function LegacyButtons() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const $root = $(rootRef.current);
    const $toggle = $root.find(".js-shortcut-toggle");
    const $more = $root.find(".js-more-toggle");
    const $panel = $root.find(".js-shortcut-panel");
    const $extraRow = $root.find(".js-extra-row");

    let open = true; // 레거시처럼 “기본 펼침” 원하면 true
    let expanded = false;

    function render() {
      $panel.toggle(open);
      $extraRow.toggle(expanded);

      // 더보기 텍스트만 바꿔줌(레거시 느낌)
      $more.text(expanded ? "접기" : "더보기");
    }

    $toggle.on("click", () => {
      open = !open;
      render();
    });

    $more.on("click", () => {
      expanded = !expanded;
      render();
    });

    render();

    return () => {
      $toggle.off("click");
      $more.off("click");
    };
  }, []);

  return (
    <section ref={rootRef} className="w-full bg-white">
      {/* 상단: “바로가기(껍데기)” + “더보기” */}
      <div className="border-b border-[#d9d9d9] bg-[#f4f4f4]">
        <div className="mx-auto w-[980px] h-[44px] flex items-center justify-between">
          <button
            type="button"
            className="js-shortcut-toggle flex items-center gap-2 text-[12px] font-bold text-[#333]"
            data-testid="legacy-shortcut-toggle"
          >
            바로가기
            <span className="text-[#777] font-normal">(껍데기)</span>
          </button>

          <button
            type="button"
            className="js-more-toggle text-[12px] text-[#333] hover:underline"
            data-testid="legacy-more-toggle"
          >
            더보기
          </button>
        </div>
      </div>

      {/* 패널: 아이콘 버튼들 */}
      <div className="js-shortcut-panel border-b border-[#d9d9d9] bg-white">
        <div className="mx-auto w-[980px] py-10">
          {/* 1행: 6개 */}
          <div className="grid grid-cols-6 gap-y-6">
            {BUTTONS.slice(0, 6).map((t, i) => (
              <LegacyIconButton
                key={t}
                label={t}
                // 레거시 vs 현재 비교 포인트: “A 스타일”
                variant="legacyA"
                dataTestId={`legacy-icon-a-${i}`}
              />
            ))}
          </div>

          {/* 2행: 6개 (기본 숨김, 더보기로 펼침) */}
          <div className="js-extra-row mt-8 hidden">
            <div className="grid grid-cols-6 gap-y-6">
              {BUTTONS.slice(6, 12).map((t, i) => (
                <LegacyIconButton
                  key={t}
                  label={t}
                  // 레거시 vs 현재 비교 포인트: “B 스타일”
                  variant="legacyB"
                  dataTestId={`legacy-icon-b-${i}`}
                />
              ))}
            </div>

            {/* 레거시 느낌의 “두 스타일이 왜 헷갈리는지”를 발표에서 보여주기 좋게
                아래에 아주 얇게 주석 같은 설명 텍스트를 추가 */}
            <div className="mt-6 text-[11px] text-[#777]">
              * 위 2행은 IconButton의 다른 스타일(legacyB)이다. 같은 기능인데
              보더/아이콘 배치/텍스트 스타일 차이로 “현재 컴포넌트” 설계 시
              헷갈릴 수 있는 케이스를 재현한다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
