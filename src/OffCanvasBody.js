'use strict';

import React, { PropTypes } from 'react';

let OffCanvasBody = ({ width = 250, transitionDuration = 250, isMenuOpened = false, children }) => {

  // closed state style
  let closedStyle = {
    transitionDuration: transitionDuration + 'ms',
    transform: 'translate(0px, 0px)'
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
}

OffCanvasBody.propTypes = {
  width: PropTypes.number,
  transitionDuration: PropTypes.number,
  isMenuOpened: PropTypes.bool
};

export default OffCanvasBody;
