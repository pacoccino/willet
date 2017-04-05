import React, { PropTypes } from 'react';

const Layout = ({ children }) =>
  <div className="layout-container">
    {children}
  </div>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
