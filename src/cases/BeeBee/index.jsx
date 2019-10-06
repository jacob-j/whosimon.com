import React from 'react';

import front from "./front.png";
import frontLogo from "./frontLogo.svg";

import frame1 from "./frame_1.png";
import frame2 from "./frame_2.png";
import frame3 from "./frame_3.png";
import frame4 from "./frame_4.png";
import frame5 from "./frame_5.png";
import frame6 from "./frame_6.png";

import movie from "./movie.webm";
import moviewebm from "./moviewebm.mp4";

// import frame1_mobile from "./frame1_mobile.png";
// import frame2_mobile from "./frame_2_mobile.png";
// import frame3_mobile from "./frame_3_mobile.png";
// import frame4_mobile from "./frame_4_mobile.png";

export const Data = {
  title: "BEE’n’BEE",
  url: "bee-bee",
  type: "Product",
  work: ["Conceptual thinking", "Product design", "Identity"],
  background: "#ffffff",
  frontImage: front,
  frontLogo: frontLogo,
  topImage: frame1,
  images: [frame2, frame3, frame4, frame5, frame6],
  imagesMobile: [frame2, frame3, frame4, frame5, frame6],
  movies: [
    { "video/webm": movie, "video/mp4": moviewebm }
  ],
  description: <div>
    <p>
      If you think my work is: "mjaa...". Stay calm, I got a backup plan. To make my own pomade with beeswax from Gotland. The only thing is just that beeswax is a scarce.
      <br />&nbsp;
      <br />Ah.
    </p>
  </div>,
}
