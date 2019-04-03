"use strict";

import React from "react";

let OffCanvas = ({
  width = 250,
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
      transitionDuration,
      isMenuOpened,
      position,
      effect
    });
  };

  // transfer the props from OffCanvas to the child
  let offCanvasChildren = React.Children.map(children, transferProps);

  return <div>{offCanvasChildren}</div>;
};

export default OffCanvas;
