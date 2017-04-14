import React, { Component } from 'react';
import * as routes from 'js/constants/routes';
import { Link } from 'react-router-dom';

import styles from './style.scss';

class AboutView extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Link to={routes.Root}>
          <div className={styles.titleContainer}>
            <span className={styles.title}>Willet</span>
            <span className={styles.subtitle}>The Intergalactic Wallet</span>
          </div>
        </Link>

        <div className={styles.description}>
          <h1>
            What is Willet ?
          </h1>
          <p>
            Willet is a web crypto-currency wallet.
          </p>
          <p>
            It allows you to store multiple currencies, exchange between them and pay.
            <br/>
            Currently supported currencies are Bitcoins and Ethers.
          </p>
          <p>
            The main advantage of Willet is that you can pay someone with a currency that you don't hold, transparently. If you hold ETH and you want to pay a shop that only receive BTC, the app will automatically do the exchange and send the BTC.
          </p>
          <h1>
            Technical
          </h1>

          <p>
            The wallet runs thanks to the <a href="https://www.stellar.org/">Stellar Network</a>. All of the datas are stored on the blockchain and most of the operation are run directly through your browser. We do not hold any secret keys and will never be able to act on your wallets. Only non-sensitive data are stored on our servers (such as public username resolution).
          </p>

          <h1>
            Stellar details
          </h1>

          <p>
            User login is processed with a federation server that resolves username to account ID. The seed is stored encrypted inside the account data with a user-chosen password.
          </p>

          <p>
            When you send or receive money, it pass through anchors via deposit/withdrawal.
            <br/>
            For an easier withdrawal/deposit address resolution, we use a service called Wilson that serves as an Anchor Discovery Service. Its role is to hold a list of well-known anchors, which assets they serve, and the ability to help stellar developers to interact with them.
          </p>

          <h1>
            Partnerships
          </h1>

          <p>
            If you want to become an anchor and want to be integrated into our wallet, feel free to ask us (@ngfar on stellar-public slack).
          </p>

          <h1>
            Roadmap
          </h1>

          <p>
            - Adding more crypto currencies
            <br/>
            - Adding fiat currency, beginning by Euro and PHP
            <br/>
            - Recover account password
          </p>

          <h1>
            Contact
          </h1>

          <p>
            <a href="https://ngfar.io">https://ngfar.io</a>
            <a href="mailto:pakokrew@gmail.com">pakokrew@gmail.com</a>
          </p>
        </div>
      </div>
    );
  }
}

export default AboutView;
