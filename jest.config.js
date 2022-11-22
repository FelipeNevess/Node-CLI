module.exports = {
  clearMocks: true,

  collectCoverage: true,

  collectCoverageFrom: ['<rootDir>/app/src/**/*.ts'],

  coverageDirectory: 'coverage',

  roots: [
    '<rootDir>/app/src'
  ],

  testEnvironment: 'jest-environment-node',

  transform: {
    '.+\\.ts$': 'ts-jest'
  },

}