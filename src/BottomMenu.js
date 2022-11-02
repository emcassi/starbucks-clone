import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faFacebook,
  faPinterest,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";

function BottomMenu() {
  library.add(
    faSpotify,
    faFacebook,
    faPinterest,
    faInstagram,
    faYoutube,
    faTwitter
  );

  return (
    <div className="bottom-menu">
      <div className="social-links">

      </div>
    </div>
  );
}

export default BottomMenu;
