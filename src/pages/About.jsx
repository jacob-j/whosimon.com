import React from 'react'
import "./style.scss";

import Header from "../components/Header";
// import simon from "./assets/simon.png";

function About() {
  return <>
    <Header />
    <div className="AboutView">
      {/* <img className="AboutView__simon" src={simon} /> */}
      <p>Hello, my name is Simon and live in Visby, Sweden. My career as an art director took flight two years ago, but I have been a creator since I was a kid. After studying Art direction at Berghs and working at KNAK I have reached the level of skill to become a freelance creator. I do art direction, graphic design, wp websites, conceptual thinking, custom-made typfaces and photography.</p>
      <p>With a young mind, my influences are contemporary aesthetics, culture and what’s happening in everyday life. </p>
      <p>Please contact me for a talk about whatever you want to talk about and wherever you are in the world. And if you like my work, join me on instagram.</p>
      <p>Oh, and I forgot to mention. I love to DJ and would love to perform at your next event!</p>
    </div>
  </>
}

export default About
