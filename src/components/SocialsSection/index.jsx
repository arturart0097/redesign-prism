import eth from "../../assets/images/eth2.png";
import qwe2 from "../../assets/images/qwe2.png";
import qwe from "../../assets/images/qwe1.png";
import qwe3 from "../../assets/images/qwe3.png";

import gate from "../../assets/images/gate.png";
import bybit from "../../assets/images/bybit.png";
import opensea from "../../assets/images/opensea.png";
import mexc from "../../assets/images/mexc.png";
import magic from "../../assets/images/magic.png";

import "./style.css";

export const SocialSection = () => {
  return (
    <div className="socialSection_wrapper">
      <div>
        <h3>DUEL</h3>
        <div className="socials-gap">
          <img src={eth} alt="" />
          <img src={qwe2} alt="" />
          <img src={qwe3} alt="" />
          <img src={gate} alt="" />
          <img src={bybit} alt="" />
          <img src={mexc} alt="" />
        </div>
      </div>
      <div>
        <h3>NFTS</h3>
        <div className="socials-gap">
          <img src={opensea} alt="" />
          <img src={mexc} alt="" />
          <img src={qwe} alt="" />
          <img src={magic} alt="" />
        </div>
      </div>
    </div>
  );
};
