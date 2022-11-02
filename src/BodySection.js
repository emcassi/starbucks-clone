import React from "react";

function BodySection(props) {
  if (props.layout === 0) {
    return (
      <div className="body-section">
        <div className="body-section__img">
            {props.img}
        </div>
        <div className="body-section__info">
            
        </div>
      </div>
    );
  } else if (props.layout === 1) {
    return (
      <div className="body-section">
        <div className="body-section__info"></div>
        <div className="body-section__img"></div>
      </div>
    );
  }
}

export default BodySection;
