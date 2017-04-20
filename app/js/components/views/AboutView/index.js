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
          <h1 className={styles.h1}>
            What is Willet ?
          </h1>
          <p className={styles.p}>
            Willet is a multi-crypto-currency wallet.
          </p>
          <p className={styles.p}>
            It is simple to use, fast, decentralized and secured. It allows you to store multiple currencies, exchange and pay with them.
            <br/>
            Currently supported currencies are Bitcoins and Ethers.
            <span className={styles.warning}> Due to technical problems, Ether is currently disabled.</span>
          </p>
          <p className={styles.warning}>This application is currently in alpha testing. Use at your own risk. We do not take responsibility if digital tokens are lost. Always manipulate small amounts of money.
          </p>
          <p className={styles.p}>
            The main advantage of Willet is that you can pay someone with a currency that you don't hold, transparently. If you hold ETH and you want to pay a shop that only receive BTC, the app will automatically do the exchange and send the BTC.
          </p>
          <h1 className={styles.h1}>
            Technical
          </h1>

          <p className={styles.p}>
            The wallet runs thanks to the <a className={styles.a} href="https://www.stellar.org/" target="_blank">Stellar Network</a>. All of the datas are stored on the blockchain and most of the operation are run directly through your browser, via <a className={styles.a} href="https://www.stellar.org/developers/reference/" target="_blank">Horizon API</a>. We do not hold any secret keys and will never be able to act on your wallets. Only non-sensitive data are stored on our servers (such as public username resolution).
          </p>
          <p className={styles.p}>
            Willet also heavily relies on a custom API which is public and that can be useful for any Stellar developer. Feel free to use it, you can find documentation about it <a className={styles.a} href="https://api.willet.io/doc" target="_blank">here</a>.
          </p>

          <h1 className={styles.h1}>
            Stellar details
          </h1>

          <p className={styles.p}>
            User login is processed with a federation server that resolves username to account ID. The seed is stored encrypted inside the account data with a user-chosen password.
          </p>

          <p className={styles.p}>
            When you send or receive money, it pass through anchors via deposit/withdrawal.
            <br/>
            For an easier withdrawal/deposit address resolution, we use a service called Wilson that serves as an Anchor Discovery Service. Its role is to hold a list of well-known anchors, which assets they serve, and the ability to help stellar developers to interact with them.
          </p>

          <h1 className={styles.h1}>
            Partnerships
          </h1>

          <p className={styles.p}>
            If you want to become an anchor and want to be integrated into our wallet, feel free to ask us (@ngfar on <a className={styles.a} href="https://stellar-public.slack.com/" target="_blank">stellar-public</a> slack).
          </p>

          <h1 className={styles.h1}>
            Roadmap
          </h1>

          <p className={styles.p}>
            - Adding more crypto currencies
            <br/>
            - Improve and stabilize UX/UI
            <br/>
            - Allows path payment
            <br/>
            - Improve liquidity
            <br/>
            - Adding fiat currency, beginning by Euro and PHP
            <br/>
            - Recover account password by mail
          </p>

          <h1 className={styles.h1}>
            Contact
          </h1>

          <p className={styles.p}>
            <a className={styles.a} href="https://ngfar.io" target="_blank">https://ngfar.io</a>
            <br/>
            <a className={styles.a} href="mailto:pakokrew@gmail.com">pakokrew@gmail.com</a>
          </p>
        </div>
      </div>
    );
  }
}

export default AboutView;
