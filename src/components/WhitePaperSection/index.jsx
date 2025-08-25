import prismpaper from "@/assets/images/prismpaper.png";
import agentspaper from "@/assets/images/agentspaper.png";
import arcadepaper from "@/assets/images/arcadepaper.png";
import gamepaper from "@/assets/images/gamepaper.png";

import "./style.css";

export const WhitePaperSection = () => {
  return (
    <>
      <div
        className="blur-row"
        style={{
          position: "relative",
          top: 35,
          height: 70,
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
    </>
  );
};
