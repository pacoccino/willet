import { StellarServer, Federation, Wilson } from 'stellar-toolkit';

const config = {
  FEDERATION_DOMAIN: process.env.FEDERATION_DOMAIN || 'stellar-wilson.herokuapp.com',
  STELLAR_NETWORK: process.env.STELLAR_NETWORK || 'test',
  API_SERVER: process.env.API_SERVER || 'http://localhost:3000',
  DEMO: !!process.env.DEMO || false,
  PROD: process.env.NODE_ENV === 'production',
};

StellarServer.switchNetwork(config.STELLAR_NETWORK);
Federation.setUrl(`${config.API_SERVER}/federation`);
Wilson.setUrl(`${config.API_SERVER}/wilson`);

export default config;