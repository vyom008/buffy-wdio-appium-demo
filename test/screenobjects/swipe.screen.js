/// <reference types="@wdio/globals/types" />
const { driver } = require("@wdio/globals");

class SwipeScreen {

    get swipeMenuBtn() {
        return $('~Swipe');
    }

    get fullyOpenSourceCard() {
        return $('//*[@name="FULLY OPEN SOURCE"]');
    }

    get greatCommunityCard() {
        return $('//*[@name="GREAT COMMUNITY"]');
    }

    get jsFoundationCard() {
        return $('//*[@name="JS.FOUNDATION"]');
    }

    get carousel() {
        return $('~Carousel');
    }

    async swipeLeftOnCarousel() {
        const carouselElement = await this.carousel; // Always fresh element
        await driver.execute('mobile: swipe', {
            direction: 'left',
            element: carouselElement.elementId,
        });
    }
}

module.exports = new SwipeScreen();
