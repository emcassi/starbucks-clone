import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./FindAStore.css";

function FindAStore() {
  library.add(faLocationDot);
  return (
    <div className="findastore">
      <FontAwesomeIcon icon="location-dot" />
      <p>Find a store</p>
    </div>
  );
}

export default FindAStore;
