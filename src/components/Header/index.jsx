import { useState } from "react";
import "./style.css";

import Logo from "./Logo.jsx";
import Burger from "./Burger.jsx";
import Nav from "./Nav.jsx";
import { SocialLinks } from "../UI/SocialLinks";
import { socialLinks } from "@/entities/socialLinks";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header__bar">
        <div className="header__left">
          <Logo onClick={close} />
          <Burger open={open} onClick={() => setOpen((v) => !v)} />
          <div className="qwerty">
            <Nav open={open} onClose={close} />
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
