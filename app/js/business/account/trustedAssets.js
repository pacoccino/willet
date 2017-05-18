let loadedModule;

if (process.env.STELLAR_NETWORK === 'test') {
  loadedModule = require('../../../../config/trusted_assets.test.json');
} else {
  loadedModule = require('../../../../config/trusted_assets.public.json');
}

export default loadedModule;
