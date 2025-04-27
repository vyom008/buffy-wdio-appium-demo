class LoginScreen {

    get loginMenuBtn() {
        return $('~Login');
    }

    get loginScreenTitle() {
        return $('//*[@name="Login / Sign up Form"]');
    }

    get emailInput() {
        return $('~input-email');
    }

    get passwordInput() {
        return $('~input-password');
    }

    get footerText() {
        return $('~When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login.');
    }

    get loginBtn() {
        return $('//*[@name="LOGIN"]');
    }

    get successTitle() {
        return $('//*[@name="Success"]');
    }

    get successMessage() {
        return $('~You are logged in!');
    }

    get emailError() {
        return $('~Please enter a valid email address');
    }

    get passwordError() {
        return $('~Please enter at least 8 characters');
    }

    get okBtn() {
        return $('~OK');
    }


    async login(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await browser.pause(500);
        await this.loginBtn.click();
    }

    async clearLoginFields() {
        await this.emailInput.clearValue();
        await this.passwordInput.clearValue();
    }

}

module.exports = new LoginScreen();
