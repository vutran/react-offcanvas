'use strict';

import React, { PropTypes } from 'react';

let OffCanvasMenu = ({ width = 250, transitionDuration = 250, isMenuOpened = false, position = "left", children, className, style }) => {

  // closed state style
  let left = position === 'left' ? (-1 * width) + 'px' : 'auto';
  let right = position === 'left' ? 'auto' : (-1 * width) + 'px';
  let translateX = position === 'left' ? (-1 * width) : 0;
  let closedStyle = {
    width: width + 'px',
    position: 'fixed',
    top: '0px',
    left: left,
    right: right,
    transform: 'translate(' + translateX + 'px, 0px)',
    transitionDuration: transitionDuration + 'ms',
    backfaceVisibility: 'hidden'
  };

  // open state style
  let translateOpenX = position === 'left' ? width : (-1 * width);
  let openStyle = {
    transform: 'translate(' + translateOpenX + 'px, 0px)'
  };

  // create current state styles
  let currStyle = Object.assign({}, closedStyle);
  if (isMenuOpened) {
    currStyle = Object.assign({}, currStyle, openStyle);
  }

  return (
    <div style={{...currStyle, ...style}} className={className}>
      {children}
    </div>
  );
};

OffCanvasMenu.propTypes = {
  width: PropTypes.number,
  transitionDuration: PropTypes.number,
  isMenuOpened: PropTypes.bool,
  position: PropTypes.oneOf(["left", "right"]),
  style: PropTypes.object
};

export default OffCanvasMenu;
