import { useEffect, useRef } from "react";
import $ from "jquery";
import { SLIDE_DATA } from "../data/mockData";
import { CircularBtn } from "./icons/CircularBtn";

export default function LegacySlider() {
  const rootRef = useRef(null);

  useEffect(() => {
    const $root = $(rootRef.current);
    const $items = $root.find(".js-slide");
    const $tabs = $(".js-tab");
    let currentIdx = 3;

    function render(idx) {
      currentIdx = idx;
      $items.hide().eq(currentIdx).show();
      $tabs
        .css("background-color", "#A4ACB1")
        .eq(currentIdx)
        .css("background-color", "#2f95c9");
    }

    $root.find(".js-next").on("click", () => render((currentIdx + 1) % 5));
    $root.find(".js-prev").on("click", () => render((currentIdx - 1 + 5) % 5));
    $(document).on("click", ".js-tab", function () {
      render($(this).data("idx"));
    });

    render(currentIdx);
    return () => {
      $root.find(".js-next, .js-prev").off();
      $(document).off("click", ".js-tab");
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative w-full h-[420px] overflow-hidden border-b border-[#e6e6e6]"
    >
      {SLIDE_DATA.map((s, i) => (
        <div
          key={s.key}
          className="js-slide absolute inset-0 hidden"
          style={{ background: `${s.bgColor} url(${s.bgImg}) 50% 0 no-repeat` }}
        />
      ))}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        <CircularBtn icon="‹" className="js-prev" />
        <CircularBtn icon="›" className="js-next" />
      </div>
    </section>
  );
}
