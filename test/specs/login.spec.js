/// <reference types="@wdio/globals/types" />
const { driver } = require("@wdio/globals");
const LoginScreen = require("../screenobjects/login.screen");

describe('Login Tests', () => {

    it('user is able to login successfully with valid credentials', async () => {

        // Select login
        await LoginScreen.loginMenuBtn.click();
        await driver.pause(500);

        // Assert screen displayed
        await expect(await LoginScreen.loginScreenTitle.getText()).toContain('Login / Sign up Form');

        // Enter valid credentials and login
        await LoginScreen.login('Buffy@buffy.com', 'Buffy123');

        // Assert footer text
        await expect(await LoginScreen.footerText.getText()).toContain('When the device has Touch/FaceID');

        // Wait for success
        await LoginScreen.successTitle.waitForExist({ timeout: 10000 });
        await expect(await LoginScreen.successTitle.getText()).toContain('Success');
        await expect(await LoginScreen.successMessage.getText()).toContain('You are logged in!');
        await LoginScreen.okBtn.click();
    });

    it('user should not be able login successfully without providing any credentials', async () => {

        // Clear text
        await LoginScreen.clearLoginFields();

        await LoginScreen.loginBtn.click();

        //Assert
        await expect(await LoginScreen.emailError.getText()).toContain('Please enter a valid email address');
        await expect(await LoginScreen.passwordError.getText()).toContain('Please enter at least 8 characters');
    });

    it('user should not be able login successfully with invalid credentials', async () => {

        await LoginScreen.login('Buffy.com', 'Buffy');

        //Assert
        await expect(await LoginScreen.emailError.getText()).toContain('Please enter a valid email address');
        await expect(await LoginScreen.passwordError.getText()).toContain('Please enter at least 8 characters');
    });
});
