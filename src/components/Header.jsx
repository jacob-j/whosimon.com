import React from 'react'
import "./Header.scss";
import { Link } from "react-router-dom";

import moving from "./moving.svg";

function Header(props) {

  const [isSticky, setIsSticky] = React.useState(props.sticky);

  const menu = React.createRef();
  const placeholder = React.createRef();

  function onScroll(){
    if(!menu || !menu.current){
      return false;
    }
    const rects = isSticky && placeholder ? placeholder.current.getBoundingClientRect() : menu.current.getBoundingClientRect();
    if(rects.top < 0 && !isSticky){
      setIsSticky(true);
    }
    console.log(rects.top);
    if(rects.top > 0 && isSticky){
      setIsSticky(false);
    }
  }

  React.useEffect(() => {
    if(!props.sticky){
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
      }
    }
  })

  const links = <div className="MainHeader__menu__links">
    <Link to="/portfolio/">HOME</Link>
    <Link to="/portfolio/about">ABOUT</Link>
    <Link to="/portfolio/work" className="blink">WORK</Link>
    <a href="mailto:hello@whosimon.com">hello@whosimon.com</a>
    <a href="tel:+46707877849">+4670 78 77 849</a>
  </div>

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
      <nav style={{ display: isSticky && !props.sticky ? "block" : "none" }} className={`MainHeader__menu MainHeader__menu--placeholder`} ref={placeholder}>
        { links }
      </nav>
      <nav className={`MainHeader__menu ${isSticky ? "MainHeader__menu--sticky": ""}`} ref={menu}>
        { links }
      </nav>
    </header>
  )
}

export default Header
