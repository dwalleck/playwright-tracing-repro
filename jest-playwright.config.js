// https://github.com/playwright-community/jest-playwright/#configuration
module.exports = {
    browsers: ["chromium"],
    exitOnPageError: false, 
    launchOptions: {
      headless: true
    },
    contextOptions: {
      recordVideo: {
        dir: 'videos/'
      }
    }
  }