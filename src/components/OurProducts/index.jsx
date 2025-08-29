import "./style.css";

import agents from "@/assets/videos/Agents.mp4";
import Arcade from "@/assets/videos/Arcade.mp4";
import GameGPT from "@/assets/videos/GameGPT.mp4";
import { useMobile } from "@/hooks/useMobile";

export const OurProducts = () => {
  const { isMobile } = useMobile();

  return (
    <>
      <div
        className="blur-row"
        style={{
          position: "relative",
          top: isMobile ? 30 : 30,
          height: isMobile ? 50 : "",
        }}
      />
      <div className="products-wrapper">
        <h2>OUR PRODUCTS</h2>
        <div className="products">
          <div className="products-video">
            <video
              src={agents}
              autoPlay
              muted
              loop
              playsInline
              style={{ borderRadius: "12px" }}
            ></video>
            <h2>agents</h2>
          </div>
          <div className="products-video">
            <video
              src={GameGPT}
              autoPlay
              muted
              loop
              playsInline
              style={{ borderRadius: "12px" }}
            ></video>
            <h2>Gamegpt</h2>
          </div>
          <div className="products-video">
            <video
              src={Arcade}
              autoPlay
              muted
              loop
              playsInline
              style={{ borderRadius: "12px" }}
            ></video>
            <h2>arcade</h2>
          </div>
        </div>
      </div>
    </>
  );
};
