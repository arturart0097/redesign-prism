import { useEffect, useState } from "react";
import "./style.css";

import Logo from "./Logo";
import Burger from "./Burger";
import Nav from "./Nav";
import { socialLinks } from "../../entities/socialLinks";
import { SocialLinks } from "../UI/SocialLinks";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 900);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <header className="site-header">
      <div className="header__bar">
        <div
          className="header__left"
          style={{
            width: "100%",
            justifyContent: "flex-start",
          }}
        >
          <Logo onClick={close} />
          <div className="qwerty">
            <Nav open={open} onClose={close} />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              {isMobile && (
                <SocialLinks
                  links={socialLinks}
                  style={{
                    width: 140,
                  }}
                  styleImg={{
                    width: isMobile ? 34 : 84,
                  }}
                />
              )}
              <Burger open={open} onClick={() => setOpen((v) => !v)} />
            </div>
          </div>
        </div>
        <div className="header__left">
          <SocialLinks links={socialLinks} style={{}} />
          <ul className="nav__social" role="list">
            <li>
              <button className="connect-button">Connect</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
