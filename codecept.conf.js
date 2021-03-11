const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './specs/*.specs.js',
  output: './output',
  multiple: {
    parallel: {
      chunks: process.env.THREADS || 30,
      browsers: [{
        browser: 'chromium',
        windowSize: '1920x1080',
      },
      {
        browser: 'firefox',
        windowSize: '1920x1080',
      },
      {
        browser: 'webkit',
        windowSize: '1920x1080',
      }],
    },
    multiple: {
      chunks: process.env.THREADS || 30,
      browsers: [{
        browser: 'chrome',
        windowSize: '1920x1080',
      },
      {
        browser: 'firefox',
        windowSize: '1920x1080',
      },
      {
        browser: 'safari',
        windowSize: '1920x1080',
      }],
    },
    basic: {
      browsers: ["chrome", "firefox"]
    }
  },
  helpers: {
    // Playwright: {
    //   url: "http://ics-website-qa.s3-website-us-east-1.amazonaws.com",
    //   show: true,
    //   browser: 'chromium'
    // },
    WebDriver: {
      url: 'http://cinch-qa-website.s3-website-us-east-1.amazonaws.com/',
      browser: 'safari',
      host: '127.0.0.1',
      port: 4444,
      restart: false,
      smartWait: 5000,
      windowSize: '1920x1680',
      desiredCapabilities: {
        chromeOptions: {
          args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox"]
        }
      }
    },
    Mochawesome: {
      uniqueScreenshotNames: true,
      consoleReporter: true
    }
  },
  testomat: {
    enabled: true,
    require: '@testomatio/reporter/lib/adapter/codecept',
    apiKey: 'z4248b0703cj',
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/Login.js'
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
      reportDir: "output"
    }
  },
  name: 'codeceptjs_demo',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    autoDelay: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  }
}