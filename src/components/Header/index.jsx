import { useEffect, useState } from "react";
import "./style.css";

import Logo from "./Logo.jsx";
import Burger from "./Burger.jsx";
import Nav from "./Nav.jsx";
import { SocialLinks } from "../UI/SocialLinks";
import { socialLinks } from "@/entities/socialLinks";
import { useMobile } from "@/hooks/useMobile";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const { isMobile } = useMobile();

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
                    gap: 7,
                  }}
                />
              )}
              <Burger open={open} onClick={() => setOpen((v) => !v)} />
            </div>
          </div>
        </div>
        <div className="header__left">
          <SocialLinks links={socialLinks} />
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
