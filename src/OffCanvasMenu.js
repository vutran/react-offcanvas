'use strict';

import React, { PropTypes } from 'react';

let OffCanvasMenu = ({ width = 250, transitionDuration = 250, isMenuOpened = false, children }) => {

  // closed state style
  let closedStyle = {
    width: width + 'px',
    position: 'fixed',
    top: '0px',
    right: (-1 * width) + 'px',
    transform: 'translate(0px, 0px)',
    transitionDuration: transitionDuration + 'ms'
  };

  // open state style
  let openStyle = {
    transform: 'translate(' + (-1 * width) + 'px, 0px)'
  };

  // create current state styles
  let currStyle = Object.assign({}, closedStyle);
  if (isMenuOpened) {
    currStyle = Object.assign({}, currStyle, openStyle);
  }

  return (
    <div style={currStyle}>
      {children}
    </div>
  );
};

OffCanvasMenu.propTypes = {
  width: PropTypes.number,
  transitionDuration: PropTypes.number,
  isMenuOpened: PropTypes.bool
};

export default OffCanvasMenu;
