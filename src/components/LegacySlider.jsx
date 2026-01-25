import { useEffect, useRef } from "react";
import $ from "jquery";

const slides = [
  {
    key: "special-day",
    bgColor: "#ebf8f6",
    bgImg:
      "https://web.archive.org/web/20190227033832im_/https://simg.wooribank.com/img/intro/home/slide01_20190131.png",
  },
  {
    key: "first-saving",
    bgColor: "#d7e7f8",
    bgImg:
      "https://web.archive.org/web/20190227033832im_/https://simg.wooribank.com/img/intro/home/slide02_20190123.png",
  },
  {
    key: "irp",
    bgColor: "#ebf7fe",
    bgImg:
      "https://web.archive.org/web/20190227033832im_/https://simg.wooribank.com/img/intro/home/slide03_20190123.png",
  },
  {
    key: "itouch",
    bgColor: "#fff5f5",
    bgImg:
      "https://web.archive.org/web/20190227033832im_/https://simg.wooribank.com/img/intro/home/slide04_20190123.png",
  },
  {
    key: "seomin",
    bgColor: "#ebf8f6",
    bgImg:
      "https://web.archive.org/web/20190227033832im_/https://simg.wooribank.com/img/intro/home/slide05_20190123.png",
  },
];

export default function LegacySlider() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const $root = $(rootRef.current);
    const $items = $root.find(".js-slide");
    const $dots = $root.find(".js-dot");
    const $count = $root.find(".js-count");
    const $tabs = $(".js-tab"); // 하단 탭 버튼들

    let idx = 3; // iTouch 우리예금 시작
    let timer = null;
    let paused = false;

    function render(newIdx) {
      idx = newIdx;
      // 슬라이드 전환
      $items.hide().css("opacity", 0);
      $items.eq(idx).show().css("opacity", 1);

      // 도트 & 카운트 업데이트
      $dots
        .css("background-color", "#c8c8c8")
        .eq(idx)
        .css("background-color", "#666");
      $count.text(`${idx + 1} / ${slides.length}`);

      // 하단 탭 스타일 업데이트
      $tabs
        .css("background-color", "#b8b2b2")
        .eq(idx)
        .css("background-color", "#2f95c9");
    }

    function next() {
      render((idx + 1) % slides.length);
    }

    function start() {
      stop();
      timer = setInterval(() => {
        if (!paused) next();
      }, 3500);
    }

    function stop() {
      if (timer) clearInterval(timer);
    }

    // 버튼 클릭 시 '재시작' 로직 포함 (타이머 리셋)
    const handleManualControl = (targetIdx) => {
      render(targetIdx);
      if (!paused) start(); // 클릭 후 다시 3.5초 대기
    };

    $root
      .find(".js-next")
      .on("click", () => handleManualControl((idx + 1) % slides.length));
    $root
      .find(".js-prev")
      .on("click", () =>
        handleManualControl((idx - 1 + slides.length) % slides.length)
      );

    $dots.on("click", function () {
      handleManualControl(parseInt($(this).attr("data-idx")));
    });

    // 하단 탭 연동
    $tabs.on("click", function () {
      const targetIdx = $(this).data("idx");
      if (targetIdx !== undefined) handleManualControl(targetIdx);
    });

    $root.find(".js-pause").on("click", function () {
      paused = !paused;
      $(this).text(paused ? "▶" : "Ⅱ");
      if (!paused) start();
    });

    render(idx);
    start();

    return () => {
      stop();
      $root.find(".js-next, .js-prev, .js-dot, .js-pause").off("click");
      $tabs.off("click");
    };
  }, []);

  return (
    <section ref={rootRef} className="relative w-full">
      <div className="relative h-[420px] overflow-hidden border-b border-[#e6e6e6]">
        {slides.map((s, i) => (
          <div
            key={s.key}
            className="js-slide absolute inset-0"
            style={{
              background: `${s.bgColor} url(${s.bgImg}) 50% 0 no-repeat`,
              display: i === 3 ? "block" : "none",
            }}
          />
        ))}

        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 z-20">
          <button
            type="button"
            className="js-pause h-9 w-9 rounded-full bg-black/20 text-white"
          >
            Ⅱ
          </button>
          <button
            type="button"
            className="js-prev h-9 w-9 rounded-full bg-black/20 text-white font-bold"
          >
            ‹
          </button>
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                data-idx={i}
                className="js-dot h-2 w-2 rounded-full bg-[#c8c8c8]"
              />
            ))}
          </div>
          <button
            type="button"
            className="js-next h-9 w-9 rounded-full bg-black/20 text-white font-bold"
          >
            ›
          </button>
          <span className="js-count ml-3 text-[12px] text-[#777]">1 / 5</span>
        </div>
      </div>
    </section>
  );
}
