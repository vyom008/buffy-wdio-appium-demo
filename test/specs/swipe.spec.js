/// <reference types="@wdio/globals/types" />
const { driver } = require("@wdio/globals");
const SwipeScreen = require('../screenobjects/swipe.screen.js');

describe('Swipe screen automation', () => {

    it('should swipe horizontally and vertically to find hidden elements', async () => {

        // Open Swipe screen
        await SwipeScreen.swipeMenuBtn.click();

        // Swipe and Assert
        await SwipeScreen.fullyOpenSourceCard.waitForDisplayed({ timeout: 5000 });
        await expect(SwipeScreen.fullyOpenSourceCard).toBeDisplayed();

        // Swipe and Assert
        await SwipeScreen.swipeLeftOnCarousel();
        await SwipeScreen.greatCommunityCard.waitForDisplayed({ timeout: 5000 });
        await expect(SwipeScreen.greatCommunityCard).toBeDisplayed();

        // Swipe and Assert
        await SwipeScreen.swipeLeftOnCarousel();
        await SwipeScreen.jsFoundationCard.waitForDisplayed({ timeout: 5000 });
        await expect(SwipeScreen.jsFoundationCard).toBeDisplayed();
    });

});
