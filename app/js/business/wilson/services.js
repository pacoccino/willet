export function findAsset(balance, knownAnchors) {
  if (balance.asset.isNative()) {
    return null;
  }
  return knownAnchors.find(asset => (
    asset.code === balance.asset_code &&
    asset.issuer === balance.asset_issuer
  ));
}
