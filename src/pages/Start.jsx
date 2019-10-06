import React from 'react'
import "./style.scss";

import Header from "../components/Header";
// import Footer from "../components/Footer";

import simon from "./assets/simon_profile.png";

function Start() {
  return (
    <div>
      <Header />
      <div class="StartView">
        <img src={simon} />
        <h1>Art director, Graphic Designer, Wordpress</h1>
      </div>
    </div>
  )
}

export default Start
