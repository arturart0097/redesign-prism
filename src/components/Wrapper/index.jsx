import { ArcadeSections } from "../ArcadeSection";
import { Bunner } from "../Bunner";
import { GameGptSection } from "../GameGptSection";
import Header from "../Header";
import { OurProducts } from "../OurProducts";
import GameCarousel from "../GameCarousel";
import "./style.css";
import { AgentsSection } from "../AgentsSection";
import { SocialSection } from "../SocialsSection";
import { MobileAppSection } from "../MobileAppSection";
import { WhitePaperSection } from "../WhitePaperSection";
import { Footer } from "../Footer";

export const Wrapper = () => {
  return (
    <>
      <div className="bunner-header_wrapper">
        <Header />
        <Bunner />
      </div>
      <OurProducts />
      <GameGptSection />
      <ArcadeSections />
      <AgentsSection />
      <SocialSection />
      <MobileAppSection />
      <WhitePaperSection />
      <Footer />
    </>
  );
};
