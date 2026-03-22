const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://buggy.justtestit.org',
    viewportWidth: 1280,
    viewportHeight: 720,
    screenshotOnRunFailure: true,
    video: false,
    setupNodeEvents(on, config) {},
  },
  env: {
    envCode: 'bcr-test',
  },
})