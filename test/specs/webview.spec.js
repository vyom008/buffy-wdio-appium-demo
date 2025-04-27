/// <reference types="@wdio/globals/types" />
const { driver } = require("@wdio/globals");
const WebViewScreen = require("../screenobjects/webview.screen.js");

describe('iOS Webview', () => {

    it('Working with dynamic view', async () => {

        await WebViewScreen.webviewMenuBtn.click();

        // Switch to webview context
        await WebViewScreen.switchToWebViewContext();

        // Inside WebView
        await WebViewScreen.heroSubtitle.waitForDisplayed({ timeout: 5000 });
        const subtitleText = await WebViewScreen.heroSubtitle.getText();
        await expect(subtitleText).toContain('Next-gen browser and mobile automation test framework for Node.js');

        // Switch back to native app
        await WebViewScreen.switchToNativeContext();
        await WebViewScreen.homeBtn.click();

        await WebViewScreen.webdriverText.waitForDisplayed({ timeout: 5000 });
        await expect(WebViewScreen.webdriverText).toBeDisplayed();
    });
});
