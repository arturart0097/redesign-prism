import arcade from "@/assets/images/arcadeSection.png";
import video from "@/assets/videos/laptop.mp4";

import "./style.css";
import GameCarousel from "../GameCarousel";
import { useMobile } from "@/hooks/useMobile";

export const ArcadeSections = () => {
  const { isMobile } = useMobile();

  return (
    <>
      <div
        className="blur-row"
        style={{
          position: "relative",
          top: isMobile ? 20 : 30,
          height: isMobile ? 50 : 60,
          filter: "blur(5px)"
        }}
      />
      <div className="arcadeSections-wrapper">
        <div>
          <div className="arcade-video">
            <div className="text-button">
              <h2>Arcade</h2>
              {!isMobile && <button>Try the beta</button>}
            </div>
            <img src={arcade} />
          </div>
          {isMobile && <button className="try">Try the beta</button>}
        </div>
        <div className="video-laptop">
          <video src={video} autoPlay muted loop playsInline />
        </div>
      </div>
      <div className="carousel-section">
        <h3>Compete, Create, and Cash in Rewards</h3>
        <GameCarousel />
      </div>
      <div
        className="blur-row"
        style={{
          position: "relative",
          top: isMobile ? -20 : 70,
          height: isMobile ? 40 : 60,
        }}
      />
    </>
  );
};
