const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/integration/examples/*.js',
    // specPattern: 'cypress/integration/examples/BDD/*.feature',
    defaultCommandTimeout : 12000,
    pageLoadTimeout : 12000,
    env: 
    {
      url1: "https://sarathiaapka.com/",
      url2: "https://google.com/"
    },
    reporter: "mochawesome",
    retries: {
      runMode: 1}
  },
});

