import React, { PropTypes } from 'react';

import styles from './style.scss';

const Layout = ({ children }) =>
  <div className={styles.layoutContainer}>
    {children}
  </div>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
