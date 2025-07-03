import { defineConfig } from 'cypress'

export default defineConfig({
  defaultCommandTimeout: 15000,
  requestTimeout: 120000,
  responseTimeout: 120000,
  e2e: {
    baseUrl: 'https://my.pcassa.am/',
    watchForFileChanges: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: 'cypress/Tests/**/*.{cy,spec}.{js,ts}'
  }
})