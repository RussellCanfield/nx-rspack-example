const { composePlugins, withNx } = require('@nrwl/rspack');
const path = require('path');

/** @type {import('@rspack/cli').Configuration} */
module.exports = composePlugins(withNx(), (config) => {
  config.output = {
    ...config.output,
    path: path.resolve(__dirname, 'dist/src'),
    filename: 'index.js',
    clean: false,
    library: {
      name: 'my-lib',
      target: 'web',
      type: 'umd',
      export: 'default',
    },
  };
  return config;
});
