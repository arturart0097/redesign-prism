import appstore from "@/assets/icons/appstore.svg";
import playmarket from "@/assets/icons/playmarket.svg";
import iphon from "@/assets/images/iphon.png";

import "./style.css";
import { useMobile } from "@/hooks/useMobile";

export const MobileAppSection = () => {
  const { isMobile } = useMobile();

  return (
    <>
      <div
        className="blur-row"
        style={{
          position: "relative",
          top: 40,
          height: 80,
        }}
      />

      <div className="mobile_wrapper">
        <h3>Prism Mobile app</h3>
        <p>
          Coming soon to <img src={appstore} alt="" /> and
          <img src={playmarket} alt="" />
        </p>
        <img className="iphon" src={iphon} alt="" />
      </div>

      <div
        className="blur-row"
        style={{
          position: "relative",
          top: -50,
          height: isMobile ? 30 : 60,
        }}
      />
    </>
  );
};
