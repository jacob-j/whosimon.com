import React from 'react';

import front from "./front.png";
import frontLogo from "./frontLogo.svg";

import videowebm from "./video.webm"; 
import video from "./video.mp4"; 

import frame1 from "./frame_1.png";
import frame2 from "./frame_2.png";
import frame3 from "./frame_3.png";
import frame4 from "./frame_4.png";
import frame5 from "./frame_5.png";

import frame1mobile from "./frame_1_mobile.png";
import frame2mobile from "./frame_2_mobile.png";
import frame3mobile from "./frame_3_mobile.png";
import frame4mobile from "./frame_4_mobile.png";
import frame5mobile from "./frame_5_mobile.png";

export const Data = {
  title: "BAR KEMI",
  url: "bar-kemi",
  type: "Restaurant",
  work: ["Visual identity", "Wordpress", "Photography"],
  frontImage: front,
  frontLogo: frontLogo,
  background: "#ddefeb",
  topImage: frame1,
  topImageMobile: frame1mobile,
  images: [frame2, frame3, frame4, frame5],
  imagesMobile: [frame2mobile, frame3mobile, frame4mobile, frame5mobile],
  movies: [
    { "video/webm": videowebm, "video/mp4": video },
  ],
  description: <div>
<p>
In years Robin has worked behind bardisks around the world. When I first met his he talked about to one day open his own restaurant. The years went by and finally 2019 the doors were opened to his absolute own restaurant in the middle of vibrant street in Visby - Hästgatan. Well done, buddy!
<br />&nbsp;
<br />I made the identity, a WP-website and kickstarted the social media with some pictures. It was an honor! 
</p>
  </div>,
  
}
