module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(js|tsx?)$':
      '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  cacheDirectory: '.jest/cache',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|react-navigation-tabs' +
      '|react-native-splash-screen' +
      '|react-native-screens' +
      '|react-native-reanimated' +
      '|@react-native' +
      '|react-native-iphone-x-helper' +
      '|react-navigation|@react-navigation/.*' +
      ')/)',
  ],
  setupFiles: ['<rootDir>/jest/setup.ts'],
};
