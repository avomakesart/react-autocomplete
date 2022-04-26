module.exports = {
  collectCoverageFrom: ['src/**/*.{ts,tsx,js}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\$test(.*)$': '<rootDir>/test/$1',
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  timers: 'modern',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/**/*.(spec|test).{ts,tsx,js,jsx}'],
  testURL: 'http://localhost',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  watchPlugins: [
    require.resolve('jest-watch-typeahead/filename'),
    require.resolve('jest-watch-typeahead/testname'),
  ],
};
