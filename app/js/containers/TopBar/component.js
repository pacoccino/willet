import React, { PropTypes } from 'react';
import * as routes from 'js/constants/routes';
import { Link } from 'react-router-dom';

import styles from './style.scss';
import userIcon from 'styles/icons/user-icon.svg';
import leftArrow from 'styles/icons/left-arrow.svg';

import config from 'js/config';

class TopBar extends React.Component {

  renderGoBack() {
    if (this.props.pathname === routes.Root) {
      return <div />;
    }
    const goBack = () => this.context.router.history.replace(routes.Root);
    // const goBack = () => this.context.router.history.goBack();
    return (
      <div onClick={goBack} className={styles.gobackContainer}>
        <img src={leftArrow} className={styles.leftArrow} />
      </div>
    );
  }

  renderAccount() {
    return (
      <Link to={routes.Account}>
        <span className={styles.account}>{this.props.federationName}</span>
        <img src={userIcon} className={styles.userIcon} />
      </Link>
    );
  }

  renderLogin() {
    return (
      <Link to={routes.Login}>
        <span className={styles.signin}>Sign up / Sign In</span>
        <img src={userIcon} className={styles.userIcon} />
      </Link>
    );
  }
  render() {
    if (config.DEMO) {
      return null;
    }

    const {
      loggedPublic,
    } = this.props;

    return (
      <div>
        <div className={styles.container}>
          <div className={styles.topLeft}>
            {this.renderGoBack()}
          </div>
          <div>
            {loggedPublic &&
            <Link to={routes.Root}>
              <span className={styles.centerTitle}>
                Willet
              </span>
            </Link>
            }
          </div>
          <div className={styles.topRight}>
            {
              loggedPublic ?
                this.renderAccount()
                :
                this.renderLogin()
            }
          </div>
        </div>
      </div>
    );
  }
}

TopBar.propTypes = {
  loggedPublic: PropTypes.bool,
  federationName: PropTypes.string,
  pathname: PropTypes.string,
};
TopBar.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default TopBar;
