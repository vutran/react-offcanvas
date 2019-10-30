"use strict";

import React, { PropTypes } from "react";

const OffCanvasBody = ({
  width = 250,
  height = 250,
  transitionDuration = 250,
  isMenuOpened = false,
  position = "left",
  effect = "push",
  children,
  className,
  style
}) => {
  // translateOpen map
  const translateOpen = {
    left: {
      overlay: "0 0",
      parallax: width / 2 + "px, 0",
      push: width + "px, 0",
    },
    right: {
      overlay: "0 0",
      parallax: -width / 2 + "px, 0",
      push: -width + "px, 0",
    },
    top: {
      overlay: "0 0",
      parallax: "0, " + height / 2 + "px",
      push: "0, " + height + "px",
    },
    bottom: {
      overlay: "0 0",
      parallax: "0, " + -height / 2 + "px",
      push: "0, " + -height + "px",
    },
  }[position][effect];
  
  const currentStyle = Object.assign({
    transitionDuration: transitionDuration + "ms",
    transform: "translate(" + (isMenuOpened ? translateOpen : "0, 0") +")",
    backfaceVisibility: "hidden"
  }, style);

  return (
    <div style={currentStyle} className={className}>
      {children}
    </div>
  );
};

OffCanvasBody.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  transitionDuration: PropTypes.number,
  isMenuOpened: PropTypes.bool,
  position: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  effect: PropTypes.oneOf(["push", "parallax", "overlay"]),
  style: PropTypes.object
};

export default OffCanvasBody;
