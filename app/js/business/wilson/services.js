export function findAsset(balance, knownAnchors) {
  return knownAnchors.find(asset => (
    asset.code === balance.asset_code &&
    asset.issuer === balance.asset_issuer
  ));
}
