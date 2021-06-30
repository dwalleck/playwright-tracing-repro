module.exports = {
    verbose: true,
    preset: 'jest-playwright-preset',
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
    setupFiles: [],
    testRunner: "jest-circus/runner"
  }