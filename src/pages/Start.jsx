import React from 'react'
import "./style.scss";

import Header from "../components/Header";
// import Footer from "../components/Footer";

import whosimon from "./assets/WHOSIMON_4.gif";

function Start() {
  return (
    <div>
      <Header />
      <div className="StartPage__image">
        <img src={whosimon} />
      </div>
    </div>
  )
}

export default Start
