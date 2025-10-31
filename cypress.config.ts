import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'wj6o6b',
  defaultCommandTimeout: 15000,
  requestTimeout: 120000,
  responseTimeout: 120000,
  e2e: {
    baseUrl: 'https://dev.ekey.am/',
    watchForFileChanges: false,
    experimentalRunAllSpecs: true,
    experimentalStudio: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: 'cypress/Tests/**/*.{cy,spec}.{js,ts}'
  }
})