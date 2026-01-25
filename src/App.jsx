// src/App.jsx
import LegacyHeader from "./components/LegacyHeader";
import LegacyHero from "./components/LegacyHero";
import LegacyContent from "./components/LegacyContent";
import LegacyRecommend from "./components/LegacyRecommend";
import LegacyFooter from "./components/LegacyFooter";

export default function App() {
  return (
    <>
      <LegacyHeader />
      <LegacyHero />

      {/* ✅ 여기부터 기능 없는 UI 섹션 */}
      <LegacyContent />
      <LegacyRecommend />

      <LegacyFooter />
    </>
  );
}
