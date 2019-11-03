"use strict";

import React, { PropTypes } from "react";

const OffCanvasMenu = ({
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
  // position styles map
  const { left, right, top, bottom, translateClose, translateOpen } = {
    left: {
      left: -width + "px",
      right: "auto",
      top: 0,
      bottom: "auto",
      translateClose: -width + "px, 0",
      translateOpen: width + "px, 0",
    },
    right: {
      left: "auto",
      right: -width + "px",
      top: 0,
      bottom: "auto",
      translateClose: "0, 0",
      translateOpen: -width + "px, 0",
    },
    top: {
      left: 0,
      right: "auto",
      top: -height + "px",
      bottom: "auto",
      translateClose: "0, " + -height + "px",
      translateOpen: "0, " + height + "px",
    },
    bottom: {
      left: 0,
      right: "auto",
      top: "auto",
      bottom: -height + "px",
      translateClose: "0, 0",
      translateOpen: "0, " + -height + "px",
    },
  }[position];

  const currentStyle = Object.assign({
    width: width + "px",
    position: "fixed",
    top,
    bottom,
    left,
    right,
    transform: "translate(" + (isMenuOpened ? translateOpen : translateClose) + ")",
    transitionDuration: transitionDuration + "ms",
    backfaceVisibility: "hidden"
  }, style);

  return (
    <div style={currentStyle} className={className}>
      {children}
    </div>
  );
};

OffCanvasMenu.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  transitionDuration: PropTypes.number,
  isMenuOpened: PropTypes.bool,
  position: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  effect: PropTypes.oneOf(["push", "parallax", "overlay"]),
  style: PropTypes.object
};

export default OffCanvasMenu;
