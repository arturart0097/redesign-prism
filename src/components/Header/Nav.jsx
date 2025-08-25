import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";
import bridgeIcon from "../../assets/images/bridgeIcons.png";
import claimReward from "../../assets/images/claimReward.png";
import nftstaking from "../../assets/images/nftstaking.png";
import nftLevel from "../../assets/images/nftLevel.png";
import prism from "../../assets/images/prism.png";
import nftt from "../../assets/images/nftt.png";
import gptLore from "../../assets/images/gptLore.png";
import whitelist from "../../assets/images/whitelist.png";
import roudmap from "../../assets/images/roudmap.png";
import eth from "../../assets/images/eth.png";
import bybit from "../../assets/images/bybit.png";
import bcd from "../../assets/images/bcd.png";
import gate from "../../assets/images/gate.png";
import abse from "../../assets/images/abse.png";
import mexc from "../../assets/images/mexc.png";
import opensea from "../../assets/images/opensea.png";
import mintify from "../../assets/images/mintify.png";
import magic from "../../assets/images/magic.png";

export default function Nav({ open, onClose }) {
  return (
    <nav id="primary-nav" className={`header__nav ${open ? "is-open" : ""}`}>
      <div className="nav__inner">
        <ul className="nav__list" role="list">
          <li className="nav__item has-submenu">
            <Link to="/duel" onClick={onClose} className="nav__link">
              Trade DUEL <img src={arrow} alt="navArrow" />
            </Link>
            <ul className="submenu" role="menu" aria-label="Other links">
              <li role="none">
                <Link role="menuitem" to="/docs" onClick={onClose} className="submenu__link">
                  <img src={eth} alt="" /> $DUEL (ETH)
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/tokenomics" onClick={onClose} className="submenu__link">
                  <img src={bybit} alt="" /> $DUEL ByBit
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/team" onClick={onClose} className="submenu__link">
                  <img src={bcd} alt="" /> $DUEL (BSC)
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/team" onClick={onClose} className="submenu__link">
                  <img src={gate} alt="" /> $DUEL Gate
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/team" onClick={onClose} className="submenu__link">
                  <img src={abse} alt="" /> $DUEL (Base)
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/team" onClick={onClose} className="submenu__link">
                  <img src={mexc} alt="" /> $DUEL MEXC
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav__item has-submenu">
            <Link to="/team" onClick={onClose} className="nav__link">
              Trade NFTs <img src={arrow} alt="navArrow" />
            </Link>
            <ul className="submenu" role="menu" aria-label="Other links">
              <li role="none">
                <Link role="menuitem" to="/docs" onClick={onClose} className="submenu__link">
                  <img src={opensea} alt="" /> Opensea
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/tokenomics" onClick={onClose} className="submenu__link">
                  <img src={mintify} alt="" /> Mintify
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/team" onClick={onClose} className="submenu__link">
                  <img src={magic} alt="" /> Magic Eden
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav__item has-submenu">
            <Link to="/docs" onClick={onClose} className="nav__link">
              Learn More <img src={arrow} alt="navArrow" />
            </Link>
            <ul className="submenu" role="menu" aria-label="Other links">
              <li role="none">
                <Link role="menuitem" to="/docs" onClick={onClose} className="submenu__link">
                  <img src={prism} alt="" /> Prism
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/tokenomics" onClick={onClose} className="submenu__link">
                  <img src={prism} alt="" /> GameGPT
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/team" onClick={onClose} className="submenu__link">
                  <img src={nftt} alt="" /> NFT
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/team" onClick={onClose} className="submenu__link">
                  <img src={whitelist} alt="" /> Whitepaper
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/team" onClick={onClose} className="submenu__link">
                  <img src={gptLore} alt="" /> GameGPT Lore
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/team" onClick={onClose} className="submenu__link">
                  <img src={roudmap} alt="" /> Roadmap
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav__item has-submenu">
            <Link to="/bridge" onClick={onClose} className="nav__link">
              Other <img src={arrow} alt="navArrow" />
            </Link>
            <ul className="submenu" role="menu" aria-label="Other links">
              <li role="none">
                <Link role="menuitem" to="/docs" onClick={onClose} className="submenu__link">
                  <img src={bridgeIcon} alt="" /> Bridge
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/tokenomics" onClick={onClose} className="submenu__link">
                  <img src={nftstaking} alt="" /> NFT Staking
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/team" onClick={onClose} className="submenu__link">
                  <img src={claimReward} alt="" /> Claim Reward
                </Link>
              </li>
              <li role="none">
                <Link role="menuitem" to="/team" onClick={onClose} className="submenu__link">
                  <img src={nftLevel} alt="" /> NFT Level Up
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
} 