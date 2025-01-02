const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

// Get the default Metro configuration
const defaultConfig = getDefaultConfig(__dirname);

// Add your custom configurations here
const customConfig = {
  resolver: {
    assetExts: [...defaultConfig.resolver.assetExts, 'png'], // Ensure 'png' is included
  },
};

// Merge the default and custom configurations
const mergedConfig = mergeConfig(defaultConfig, customConfig);

// Wrap the merged configuration with Reanimated's Metro config
const finalConfig = wrapWithReanimatedMetroConfig(mergedConfig);

module.exports = finalConfig;
