import React, { PropTypes } from 'react';

const Pane = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

Pane.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Pane;
