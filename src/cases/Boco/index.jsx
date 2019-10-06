import React from 'react';

import front from "./front.png";
import frontLogo from "./frontLogo.svg";

import frame1 from "./frame_1.png";
import frame2 from "./frame_2.png";
import frame3 from "./frame_3.png";
import frame4 from "./frame_4.png";

// import frame1_mobile from "./frame1_mobile.png";
import frame2_mobile from "./frame_2_mobile.png";
import frame3_mobile from "./frame_3_mobile.png";
import frame4_mobile from "./frame_4_mobile.png";

export const Data = {
  title: "BO&CO",
  url: "boco",
  type: "Restaurant",
  work: ["Visual identity", "Name"],
  background: "#deeae5",
  frontImage: front,
  frontLogo: frontLogo,
  topImage: frame1,
  images: [frame2, frame3, frame4],
  imagesMobile: [frame2_mobile, frame3_mobile, frame4_mobile],
  description: <div>
    <p>
      Bo’s chocolate has been active for three generations with their secret chocolate recipes. When Bo’s grandson later took over the company the brand was in need of a new name and identity to meet a new target group - young international people. I changed the name from ”Bosses Choklad” to ”BO&CO chocolate” and gave the identity playful colors to talk about the secret recipe and the flavors.
    </p>
  </div>,
}
