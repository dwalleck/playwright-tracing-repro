module.exports = {
    verbose: true,
    preset: 'jest-playwright-preset',
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
    setupFiles: [],
    testEnvironment: './customEnvironment.js',
    testRunner: "jest-circus/runner"
  }