import prismpaper from "@/assets/images/prismpaper.png";
import agentspaper from "@/assets/images/agentspaper.png";
import arcadepaper from "@/assets/images/arcadepaper.png";
import gamepaper from "@/assets/images/gamepaper.png";

import "./style.css";
import { useMobile } from "@/hooks/useMobile";

export const WhitePaperSection = () => {
  const { isMobile } = useMobile();

  return (
    <div style={{
      marginTop: -100
    }}>
      <div
        className="blur-row"
        style={{
          position: "relative",
          top: isMobile ? 25 : 35,
          height: isMobile ? 50 : 70,
        }}
      />

      <div className="whitepaperBg">
        <h3>THE WHITEPAPER</h3>
        <div className="whitepaper_wrapper">
          <img src={prismpaper} alt="" />
          <img src={agentspaper} alt="" />
          <img src={arcadepaper} alt="" />
          <img src={gamepaper} alt="" />
        </div>
        <button>READ IT</button>
      </div>
    </div>
  );
};
