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

      <LegacyContent />
      <LegacyRecommend />

      <LegacyFooter />
    </>
  );
}
