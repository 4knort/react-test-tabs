import React, { PropTypes } from 'react';

const PaneContent = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

PaneContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
};

export default PaneContent;
