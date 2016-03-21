'use strict';

import React, { PropTypes } from 'react';

let OffCanvasBody = ({ width = 250, transitionDuration = 250, isMenuOpened = false, position = "left", children, className, style }) => {

  // closed state style
  let translateX = position === 'left' ? 0 : 0;
  let closedStyle = {
    transitionDuration: transitionDuration + 'ms',
    transform: 'translate(' + translateX + 'px, 0px)',
    backfaceVisibility: 'hidden'
  };

  // open state style
  let translateOpenX = position === 'left' ? width : -1 * width;
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

OffCanvasBody.propTypes = {
  width: PropTypes.number,
  transitionDuration: PropTypes.number,
  isMenuOpened: PropTypes.bool,
  position: PropTypes.oneOf(["left", "right"]),
  style: PropTypes.object
};

export default OffCanvasBody;
