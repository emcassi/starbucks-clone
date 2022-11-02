import React from "react";
import './BodySection.css'

function BodySection(props) {
  // Image on the left, info on the right
  if (props.layout === 0) {
    return (
      <div className="body-section">
        <div className="body-section__img">
          <img src={props.img} alt="" />
        </div>
        <div className="info-box">
          <div className="body-section__info">
            <h1>{props.title}</h1>
            <p>{props.details}</p>
            <button>{props.buttonName}</button>
          </div>
        </div>
      </div>
    );
    // Image on the right, info on the left
  } else if (props.layout === 1) {
    return (
      <div className="body-section">
        <div className="info-box">
          <div className="body-section__info">
            <h1>{props.title}</h1>
            <p>{props.details}</p>
            <button>{props.buttonName}</button>
          </div>
        </div>
        <div className="body-section__img">
          <img src={props.img} alt="" />
        </div>
      </div>
    );
  }
}

export default BodySection;
