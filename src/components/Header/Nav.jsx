import { useEffect, useRef, useState } from "react";
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
import { Link } from "react-router-dom";

export default function Nav({ open, onClose }) {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState({
    duel: false,
    nfts: false,
    learn: false,
    other: false,
  });
  const navRef = useRef(null);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 900);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const toggle = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const targetNode = event.target;
      const navElement = navRef.current;
      if (!navElement || !targetNode) return;

      const expandedItems = Array.from(
        navElement.querySelectorAll(
          ".nav__item.has-submenu.is-expanded"
        )
      );

      const clickInsideExpanded = expandedItems.some((li) =>
        li.contains(targetNode)
      );

      if (!clickInsideExpanded) {
        setExpanded({ duel: false, nfts: false, learn: false, other: false });
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      id="primary-nav"
      className={`header__nav ${open ? "is-open" : ""}`}
    >
      <div className="nav__inner">
        <ul className="nav__list" role="list">
          <li
            className={`nav__item has-submenu ${
              expanded.duel ? "is-expanded" : ""
            }`}
          >
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggle("duel");
              }}
              aria-expanded={expanded.duel}
              className="nav__link"
            >
              Trade DUEL <img src={arrow} alt="navArrow" />
            </Link>
            <ul className="submenu" role="menu" aria-label="Other links">
              <li role="none">
                <a
                  role="menuitem"
                  href="https://app.uniswap.org/explore"
                  onClick={onClose}
                  className="submenu__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={eth} alt="" /> $DUEL (ETH)
                </a>
              </li>
              <li role="none">
                <a
                  role="menuitem"
                  href="https://www.bybit.com/en/trade/spot/DUEL/USDT"
                  onClick={onClose}
                  className="submenu__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={bybit} alt="" /> $DUEL ByBit
                </a>
              </li>
              <li role="none">
                <a
                  role="menuitem"
                  href="https://pancakeswap.finance/swap?outputCurrency=0xa1ED0bD9A4776830c5b7bA004F26427b71152CA5"
                  onClick={onClose}
                  className="submenu__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={bcd} alt="" /> $DUEL (BSC)
                </a>
              </li>
              <li role="none">
                <a
                  role="menuitem"
                  href="https://www.gate.io/trade/DUEL_USDT"
                  onClick={onClose}
                  className="submenu__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gate} alt="" /> $DUEL Gate
                </a>
              </li>
              <li role="none">
                <a
                  role="menuitem"
                  href="https://app.uniswap.org/explore/tokens/base/0x16f1759fabbcc66d3f21eb8e4ad0d75b83a804e1"
                  onClick={onClose}
                  className="submenu__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={abse} alt="" /> $DUEL (Base)
                </a>
              </li>
              <li role="none">
                <a
                  role="menuitem"
                  href="https://www.mexc.com/exchange/DUEL_USDT"
                  onClick={onClose}
                  className="submenu__link"
                  target="_Blank"
                  rel="noopener noreferrer"
                >
                  <img src={mexc} alt="" /> $DUEL MEXC
                </a>
              </li>
            </ul>
          </li>
          <li
            className={`nav__item has-submenu ${
              expanded.nfts ? "is-expanded" : ""
            }`}
          >
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggle("nfts");
              }}
              aria-expanded={expanded.nfts}
              className="nav__link"
            >
              Trade NFTs <img src={arrow} alt="navArrow" />
            </Link>
            <ul className="submenu" role="menu" aria-label="Other links">
              <li role="none">
                <a
                  role="menuitem"
                  href="https://opensea.io/collection/official-gamegpt-nft"
                  onClick={onClose}
                  className="submenu__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={opensea} alt="" /> Opensea
                </a>
              </li>
              <li role="none">
                <a
                  role="menuitem"
                  href="https://mintify.xyz/base/0x8d933e1c14e8e5ed695aedb7b8d2808e5e0f0d80"
                  onClick={onClose}
                  className="submenu__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={mintify} alt="" /> Mintify
                </a>
              </li>
              <li role="none">
                <a
                  role="menuitem"
                  href="https://magiceden.io/collections/base/official-gamegpt-nft"
                  onClick={onClose}
                  className="submenu__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={magic} alt="" /> Magic Eden
                </a>
              </li>
            </ul>
          </li>
          <li
            className={`nav__item has-submenu ${
              expanded.learn ? "is-expanded" : ""
            }`}
          >
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggle("learn");
              }}
              aria-expanded={expanded.learn}
              className="nav__link"
            >
              Learn More <img src={arrow} alt="navArrow" />
            </Link>
            <ul className="submenu" role="menu" aria-label="Other links">
              <li role="none">
                <a
                  role="menuitem"
                  href="https://www.prism.ai/"
                  onClick={onClose}
                  className="submenu__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={prism} alt="" /> Prism
                </a>
              </li>
              <li role="none">
                <a
                  role="menuitem"
                  href="https://gamegpt.home.prism.ai/"
                  onClick={onClose}
                  className="submenu__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={prism} alt="" /> GameGPT
                </a>
              </li>
              <li role="none">
                <a
                  role="menuitem"
                  href="https://nft.prism.ai/"
                  onClick={onClose}
                  className="submenu__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={nftt} alt="" /> NFT
                </a>
              </li>
              <li role="none">
                <a
                  role="menuitem"
                  href="https://prism-whitepaper.gitbook.io/prism-whitepaper/"
                  onClick={onClose}
                  className="submenu__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={whitelist} alt="" /> Whitepaper
                </a>
              </li>
              <li role="none">
                <a
                  role="menuitem"
                  href="https://gamegpt.origins.prism.ai/"
                  onClick={onClose}
                  className="submenu__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gptLore} alt="" /> GameGPT Lore
                </a>
              </li>
              <li role="none">
                <a
                  role="menuitem"
                  href="https://roadmap.prism.ai/"
                  onClick={onClose}
                  className="submenu__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={roudmap} alt="" /> Roadmap
                </a>
              </li>
            </ul>
          </li>
          <li
            className={`nav__item has-submenu ${
              expanded.other ? "is-expanded" : ""
            }`}
          >
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggle("other");
              }}
              aria-expanded={expanded.other}
              className="nav__link"
            >
              Other <img src={arrow} alt="navArrow" />
            </Link>
            <ul className="submenu" role="menu" aria-label="Other links">
              <li role="none">
                <a
                  role="menuitem"
                  href="https://dashboard.prism.ai/bridge"
                  onClick={onClose}
                  className="submenu__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={bridgeIcon} alt="" /> Bridge
                </a>
              </li>
              <li role="none">
                <a
                  role="menuitem"
                  href="https://nft.prism.ai/stake"
                  onClick={onClose}
                  className="submenu__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={nftstaking} alt="" /> NFT Staking
                </a>
              </li>
              <li role="none">
                <a
                  role="menuitem"
                  href="https://claims.prism.ai/"
                  onClick={onClose}
                  className="submenu__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={claimReward} alt="" /> Claim Reward
                </a>
              </li>
              <li role="none">
                <a
                  role="menuitem"
                  href="https://nft.prism.ai/mystakes"
                  onClick={onClose}
                  className="submenu__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={nftLevel} alt="" /> NFT Level Up
                </a>
              </li>
            </ul>
          </li>
        </ul>
        {/* Mobile-only social actions inside menu */}
        {isMobile && (
          <button className="connect-button" onClick={onClose}>
            Connect
          </button>
        )}
      </div>
    </nav>
  );
}
