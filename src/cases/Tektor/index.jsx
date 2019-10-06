import React from 'react';

import front from "./front.png";
import frontLogo from "./frontLogo.svg";

import frame1 from "./frame_1.png";
import frame2 from "./frame_2.png";
import frame3 from "./frame_3.png";
import frame4 from "./frame_4.png";

import frame1mobile from "./frame_1_mobile.png";
import frame2mobile from "./frame_2_mobile.png";
import frame3mobile from "./frame_3_mobile.png";
import frame4mobile from "./frame_4_mobile.png";

export const Data = {
  title: "TEKTOR CIGARS",
  url: "tektor-cigars",
  type: "Product",
  work: ["Identity update", "WP-website", "Print"],
  background: "#040506",
  textColor: "#f0e0cb",
  frontImage: front,
  frontLogo: frontLogo,
  topImage: frame1,
  images: [frame2, frame3, frame4],
  imagesMobile: [frame2mobile, frame3mobile, frame4mobile],
  description: <div>
    <p>
      Since the first 14 plants thrived in 2006 Joakim Widell has been learning everything about cigar production. With organic growth Tektor Cigars today got over 500 plants and aim to roll 15 000 cigars in 2019. By hand! That’s impressive. In early 2019 I updated Tektor Cigars visual identity with a brand new design and a WP-website. The idea was to let Tektors dark history lie in the background, whilst showing off the cigars in their most exclusive form - surrounded by Gotlandic greenery.
    </p>
  </div>,
}
