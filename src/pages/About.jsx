import React from 'react'
import "./style.scss";

import Header from "../components/Header";
import simon from "./assets/simon.png";

function About() {
  return <>
    <Header />
    <div className="AboutView">
      {/* <img className="AboutView__simon" src={simon} /> */}
      <p>Hello, my name is Simon and live in <a href="https://www.google.com/maps?q=visby+sweden&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjtu_is_IflAhXltYsKHQjsBAEQ_AUIEigB">Visby, Sweden</a>. My career as an art director took flight two years ago, but I have been a creator since 
      <span className="AboutView__hover"> I was a kid <img src={simon} tabindex="0" alt="Simon" /></span>. After studying Art direction at <a href="https://www.berghs.se/">Berghs</a> and working at <a href="http://knak.se/">KNAK</a> I have reached the level of skill to become a freelance creator. I do art direction, graphic design, wp websites, conceptual thinking, custom-made typfaces and photography.</p>
      <p>With a young mind, my influences are contemporary aesthetics, culture and what’s happening in everyday life. </p>
      <p>Please <a href="mailto:hello@whosimon.com">contact me</a> for a talk about whatever you want to talk about and wherever you are in the world. And if you like my work, <a href="https://www.instagram.com/who__________simon/">join me on instagram.</a></p>
      <p>Oh, and I forgot to mention. I love to DJ and would love to perform at your next event!</p>
    </div>
  </>
}

export default About
