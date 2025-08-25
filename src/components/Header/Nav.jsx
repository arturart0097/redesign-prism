import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SocialLinks } from "../UI/SocialLinks";
import { socialLinks } from "@/entities/socialLinks";
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
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState({
    duel: false,
    nfts: false,
    learn: false,
    other: false,
  });

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 900);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const toggle = (key) => {
    if (!isMobile) return;
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <nav id="primary-nav" className={`header__nav ${open ? "is-open" : ""}`}>
      <div className="nav__inner">
        <ul className="nav__list" role="list">
          <li className={`nav__item has-submenu ${expanded.duel ? "is-expanded" : ""}`}>
            <Link
              to="/duel"
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault();
                  toggle("duel");
                } else {
                  onClose();
                }
              }}
              aria-expanded={isMobile ? expanded.duel : undefined}
              className="nav__link"
            >
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
          <li className={`nav__item has-submenu ${expanded.nfts ? "is-expanded" : ""}`}>
            <Link
              to="/team"
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault();
                  toggle("nfts");
                } else {
                  onClose();
                }
              }}
              aria-expanded={isMobile ? expanded.nfts : undefined}
              className="nav__link"
            >
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
          <li className={`nav__item has-submenu ${expanded.learn ? "is-expanded" : ""}`}>
            <Link
              to="/docs"
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault();
                  toggle("learn");
                } else {
                  onClose();
                }
              }}
              aria-expanded={isMobile ? expanded.learn : undefined}
              className="nav__link"
            >
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
          <li className={`nav__item has-submenu ${expanded.other ? "is-expanded" : ""}`}>
            <Link
              to="/bridge"
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault();
                  toggle("other");
                } else {
                  onClose();
                }
              }}
              aria-expanded={isMobile ? expanded.other : undefined}
              className="nav__link"
            >
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
        {/* Mobile-only social actions inside menu */}
        <div className="nav__social-wrap">
          <SocialLinks links={socialLinks} />
          <ul className="nav__social" role="list">
            <li>
              <button className="connect-button" onClick={onClose}>Connect</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
} 