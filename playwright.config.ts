// @ts-check
import { defineConfig } from '@playwright/test';
import { trace } from 'node:console';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  retries:1,
  timeout:31000,
    expect:
  {
    timeout:10000,
  },
  reporter:'html',
  projects:
  [
   {
      name:'Chrome',
    use: {
           browserName:'chromium',
           headless:true,
           screenshot:'only-on-failure',//other options are on,off,only-on-failure
           video:'retain-on-failure',//on, off, retain-on-failure,'on-first-retry'
           trace:'retain-on-failure'//on, off, retain-on-failure,'on-first-retry'
        }
   },
   {
      name:'Firefox',
    use: {
           browserName:'firefox',
           headless:true,
           screenshot:'only-on-failure',//other options are on,off,only-on-failure
           video:'retain-on-failure',//on, off, retain-on-failure,'on-first-retry'
           trace:'retain-on-failure'//on, off, retain-on-failure,'on-first-retry'
        }
   },
   {
      name:'Edge',
    use: {
           browserName:'chromium',
           channel:'msedge',
           headless:true,
           screenshot:'only-on-failure',//other options are on,off,only-on-failure
           video:'retain-on-failure',//on, off, retain-on-failure,'on-first-retry'
           trace:'retain-on-failure'//on, off, retain-on-failure,'on-first-retry'
        }
   },
   {
      name:'Safari',
    use: {
           browserName:'webkit',
           headless:true,
           screenshot:'only-on-failure',//other options are on,off,only-on-failure
           video:'retain-on-failure',//on, off, retain-on-failure,'on-first-retry'
           trace:'retain-on-failure'//on, off, retain-on-failure,'on-first-retry'
        }
   }
  ]

  

  
});



