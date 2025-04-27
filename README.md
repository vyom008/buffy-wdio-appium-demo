# Mobile Automation Framework (WebdriverIO + Appium + JavaScript)

This project automates the testing of a demo mobile app using **WebdriverIO**, **Appium**, and **JavaScript**.

---

## Test Cases Covered

- Login with valid, invalid, and empty credentials
- WebView interaction and content validation
- Filling and validating Forms (text input, switch toggle, dropdown selection, button actions)
- Swiping carousel cards and verifying visibility

## Project Setup

```bash
npm install

## Run tests
npm test run

## Generate and open report
npm run report

## Run specific test for example
npx wdio run wdio.conf.js --spec ./test/specs/login.spec.js


