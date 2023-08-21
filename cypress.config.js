require('dotenv').config()
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    url: process.env.URL,
    user: process.env.USER,
    password: process.env.PASSWORD,
  }
});
