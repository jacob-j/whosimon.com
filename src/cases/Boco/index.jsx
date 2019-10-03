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
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
    </p>
  </div>,
}
