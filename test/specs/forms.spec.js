/// <reference types="@wdio/globals/types" />
const { driver } = require("@wdio/globals");
const FormsScreen = require("../screenobjects/forms.screen");

describe('Forms screen automation', () => {

    before(async () => {
        await FormsScreen.formsMenuBtn.click();
        await browser.pause(500);
    });

    it('should complete the form successfully', async () => {

        // Input field
        await FormsScreen.inputField.setValue('Buffy is the best!');
        await driver.keys(['\uE007']);

        await browser.pause(500);

        const typedResultText = await FormsScreen.inputTextResult.getText();
        await expect(typedResultText).toContain('Buffy is the best!');

        // Switch
        let switchValue = await FormsScreen.switchElement.getAttribute('value');
        if (switchValue === '0') {
            await FormsScreen.switchElement.click();
        }

        await expect(await FormsScreen.switchText.getText()).toContain('Click to turn the switch OFF');

        // Dropdown
        await FormsScreen.dropdownField.click();
        await FormsScreen.pickerWheel.setValue('Appium is awesome');
        await FormsScreen.doneButton.click();

        const selectedDropdownValue = await FormsScreen.dropdownField.getText();
        await expect(selectedDropdownValue).toContain('Appium is awesome');

        // Buttons
        await FormsScreen.scrollDown();

        await FormsScreen.activeButton.click();

        await expect(await FormsScreen.popupText1.getText()).toContain('This button is');
        await expect(await FormsScreen.popupText2.getText()).toContain('This button is active');
        await expect(await FormsScreen.inactiveButton.getText()).toContain('Inactive');

        await driver.acceptAlert();
    });
});
