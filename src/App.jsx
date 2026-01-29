import LegacyHeader from "./components/LegacyHeader";
import LegacyHero from "./components/LegacyHero";
import LegacyContent from "./components/LegacyContent";
import LegacyRecommend from "./components/LegacyRecommend";
import LegacyFooter from "./components/LegacyFooter";
import ProductList from "./components/ProductList";
import QuickNavBar from "./components/QuickNavBar";
import LinkCardList from "./components/LinkCardList";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <LegacyHeader />
      <QuickNavBar />
      <ProductList />
      <LinkCardList />
      <LegacyFooter />
    </div>
  );
}