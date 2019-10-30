"use strict";

import React from "react";

const OffCanvas = ({
  width = 250,
  height = 250,
  transitionDuration = 250,
  isMenuOpened = false,
  position = "left",
  effect = "push",
  children
}) => {
  // transfer the <OffCanvas /> props to the children
  const transferProps = element => {
    return React.cloneElement(element, {
      width,
      height,
      transitionDuration,
      isMenuOpened,
      position,
      effect
    });
  };

  // transfer the props from OffCanvas to the child
  const offCanvasChildren = React.Children.map(children, transferProps);

  return <div>{offCanvasChildren}</div>;
};

export default OffCanvas;
