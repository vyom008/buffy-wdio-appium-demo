class FormsScreen {

    get formsMenuBtn() {
        return $('~Forms');
    }

    get inputField() {
        return $('~text-input');
    }

    get inputTextResult() {
        return $('~input-text-result');
    }

    get switchElement() {
        return $('~switch');
    }

    get switchText() {
        return $('~switch-text');
    }

    get dropdownField() {
        return $('~text_input');
    }

    get pickerWheel() {
        return $('XCUIElementTypePickerWheel');
    }

    get doneButton() {
        return $('~done_button');
    }

    get activeButton() {
        return $('//*[@name="Active"]');
    }

    get inactiveButton() {
        return $('//*[@name="Inactive"]');
    }

    get popupText1() {
        return $('//*[@name="This button is"]');
    }

    get popupText2() {
        return $('//*[@name="This button is active"]');
    }

    async scrollDown() {
        await driver.execute("mobile: scroll", { direction: "down" });
    }

}

module.exports = new FormsScreen();
