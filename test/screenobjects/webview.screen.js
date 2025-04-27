class WebViewScreen {

    get webviewMenuBtn() {
        return $('~Webview');
    }

    get heroSubtitle() {
        return browser.$('.hero__subtitle');
    }

    get homeBtn() {
        return $('~Home');
    }

    get webdriverText() {
        return $('//*[@name="WEBDRIVER"]');
    }

    async switchToWebViewContext() {
        await driver.waitUntil(async () => {
            const contexts = await driver.getContexts();
            return contexts.length > 1;
        }, { timeout: 30000, timeoutMsg: 'Timed out waiting for another context' });

        const contexts = await driver.getContexts();
        await driver.switchContext(contexts.find(context => context.includes('WEBVIEW')));
    }

    async switchToNativeContext() {
        await driver.switchContext('NATIVE_APP');
    }
}

module.exports = new WebViewScreen();
