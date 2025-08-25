import appstore from "@/assets/icons/appstore.svg";
import playmarket from "@/assets/icons/playmarket.svg";
import iphon from "@/assets/images/iphon.png";

import "./style.css";

export const MobileAppSection = () => {
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
        <img src={iphon} alt="" />
      </div>

      <div
        className="blur-row"
        style={{
          position: "relative",
          top: -50,
          height: 60,
        }}
      />
    </>
  );
};
