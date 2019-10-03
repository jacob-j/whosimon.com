import React from 'react';

import front from "./front.png";
import frontLogo from "./frontLogo.svg";

import frame1 from "./frame_1.png";
import frame2 from "./frame_2.png";
import frame3 from "./frame_3.png";
import frame4 from "./frame_4.png";
import frame5 from "./frame_5.png";
import frame6 from "./frame_6.png";
import frame7 from "./frame_7.png";
import frame8 from "./frame_8.png";
import frame9 from "./frame_9.png";
import frame10 from "./frame_10.png";

import frame1mobile from "./frame_1_mobile.png";
import frame2mobile from "./frame_2_mobile.png";
import frame3mobile from "./frame_3_mobile.png";
import frame4mobile from "./frame_4_mobile.png";
import frame5mobile from "./frame_5_mobile.png";
import frame6mobile from "./frame_6_mobile.png";
import frame7mobile from "./frame_7_mobile.png";
import frame8mobile from "./frame_8_mobile.png";
import frame9mobile from "./frame_9_mobile.png";
import frame10mobile from "./frame_10_mobile.png";

import movie1 from "./SUPERDUPERR_1.mp4";
import movie1webm from "./SUPERDUPERR_1.webm";

import movie2 from "./WOW_1.mp4";
import movie2webm from "./WOW_1.webm";

export const Data = {
  title: "WHOSIMON Sans",
  url: "whosimon-sans",
  type: "Typeface",
  work: ["Custom made typeface"],
  background: "#fcfcfc",
  frontImage: front,
  frontLogo: frontLogo,
  topImage: frame1,
  movies: [
    { "video/webm": movie1webm, "video/mp4": movie1 },
    { "video/webm": movie2webm, "video/mp4": movie2 }
  ],
  images: [frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10],
  imagesMobile: [frame1mobile, frame2mobile, frame3mobile, frame4mobile, frame5mobile, frame6mobile, frame7mobile, frame8mobile, frame9mobile, frame10mobile],
  description: <div>
    <p>
    This is one of my very own typefaces.
    <br />It was supposed to be
    <br />1. Super duper
    <br />2. Wow!!!
    <br />&nbsp;
    <br />To industry!
    </p>
  </div>,
}
