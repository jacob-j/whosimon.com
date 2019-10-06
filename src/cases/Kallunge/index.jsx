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
  title: "KÄLLUNGE TEGELBRUK",
  url: "kallunge-tegelbruk",
  type: "Restaurant",
  work: ["Visual identity", "Name"],
  background: "#f9ddd8",
  frontImage: front,
  frontLogo: frontLogo,
  topImage: frame1,
  images: [frame2, frame3, frame4],
  imagesMobile: [frame2_mobile, frame3_mobile, frame4_mobile],
  description: <div>
    <p>
      KÄLLUNGE TEGELBRUK™ is a company from Gotland that designs and build brick constellations. They see them selfs as artist in their genre. 
      <br />&nbsp;
      <br />Their dilemma was that they easily get associated with regular bricksbusiness. So I changed their name and made them a brand new brand to make a completely different perception.  The idea was to go more the architecture-way than the construction. My solution was to ditch wall shovels and bring forth the bricks and sketches!
    </p>
  </div>,
}
