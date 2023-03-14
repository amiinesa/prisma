module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  testMatch: ["**/*.test.js"],
  testEnvironment: 'jest-environment-jsdom'
};
