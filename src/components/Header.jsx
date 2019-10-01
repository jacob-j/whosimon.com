import React from 'react'
import "./Header.scss";
import { Link } from "react-router-dom";

import moving from "./moving.svg";

function Header() {
  return (
    <header className="MainHeader">
      <div className="MainHeader__moving">
        <div className="MainHeader__moving__wrapper">
          <img src={moving} alt="LOGOTYPE•IDENTITYDESIGN•CUSTOMMADETYPOGRAPHY•CONCEPTTHINKING•WP-WEBSITES•" />
          <img src={moving} alt="LOGOTYPE•IDENTITYDESIGN•CUSTOMMADETYPOGRAPHY•CONCEPTTHINKING•WP-WEBSITES•" />
          <img src={moving} alt="LOGOTYPE•IDENTITYDESIGN•CUSTOMMADETYPOGRAPHY•CONCEPTTHINKING•WP-WEBSITES•" />
          <img src={moving} alt="LOGOTYPE•IDENTITYDESIGN•CUSTOMMADETYPOGRAPHY•CONCEPTTHINKING•WP-WEBSITES•" />
        </div>
      </div>
      <nav className="MainHeader__menu">
        <div className="MainHeader__menu__links">
          <Link to="/about">About</Link>
          <Link to="/work" className="blink">Work</Link>
          <a href="mailto:hello@whosimon.com">hello@whosimon.com</a>
          <a href="mailto:+46707877849">+4670 78 77 849</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
