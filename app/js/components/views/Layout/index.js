import React, { PropTypes } from 'react';

import TopBar from 'js/containers/TopBar';

import styles from './style.scss';

const Layout = ({ children }) =>
  <div className={styles.layoutContainer}>
    <TopBar />
    <div className={styles.content}>
      {children}
    </div>
  </div>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
