import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,

  use: {
    baseURL: 'https://demowebshop.tricentis.com',
    headless: false,

  
    screenshot: 'on',

    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },

  reporter: [['html', { open: 'never' }]],

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
