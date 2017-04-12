import React, { PropTypes } from 'react';

import styles from './style.scss';

const Layout = ({ children }) =>
  <div className={styles.layoutContainer}>
    <div className={styles.margin}>
      {children}
    </div>
  </div>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
