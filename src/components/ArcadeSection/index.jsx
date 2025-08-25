import arcade from "@/assets/images/arcadeSection.png";
import video from "@/assets/videos/laptop.mp4";

import "./style.css";
import GameCarousel from "../GameCarousel";

export const ArcadeSections = () => {
  return (
    <>
      <div
        className="blur-row"
        style={{
          position: "relative",
          top: 30,
          height: 60,
        }}
      />
      <div className="arcadeSections-wrapper">
        <div>
          <div className="arcade-video">
            <div className="text-button">
              <h2>Arcade</h2>
              <button>Try the beta</button>
            </div>
            <img src={arcade} />
          </div>
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
          top: 20,
          height: 60,
        }}
      />
    </>
  );
};
