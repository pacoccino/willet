import config from 'js/config';
import { StellarOperations, StellarTools } from 'stellar-toolkit';
import { Operation } from 'stellar-sdk';

import trustedAssets from './trustedAssets';

export const getStellarAddress = username => `${username}*${config.FEDERATION_DOMAIN}`;
export const getUsername = stellar_address => stellar_address.split('*')[0];

export const setTrustedAsset = keypair =>
  StellarOperations.sendTransaction({
    operations: trustedAssets.map(asset =>
      Operation.changeTrust({
        asset: StellarTools.AssetInstance(asset),
      })),
  }, keypair);
