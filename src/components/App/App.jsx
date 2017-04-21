import React, { PropTypes } from 'react';
import { Nav } from 'components';

const App = ({ children }) => (
  <div className="app">
    <div className="wrap">
      <Nav />
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.any.isRequired,
};

export default App;
