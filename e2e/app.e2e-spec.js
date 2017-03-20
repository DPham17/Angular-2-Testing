"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Testing Homepage', function () {
    beforeEach(function () {
        protractor_1.browser.get('/');
    });
    it('should display message saying my sandboxs', function () {
        var getTitle = protractor_1.element(protractor_1.by.className('webTitle')).getText();
        expect(getTitle).toMatch('MY SANDBOX');
    });
    it('should click every list items and compare its values', function () {
        var outputWeather;
        var icons = ['Sunny Icon', 'Flurries Icon', 'Thunder Icon', 'Rainy Icon', 'Sun-Shower', 'Cloudy Icon'];
        for (var i = 0; i < 6; i++) {
            // clicks an item on the list
            protractor_1.element.all(protractor_1.by.css('.weatherList')).get(i).click();
            // gets the output test after clicking
            outputWeather = protractor_1.element(protractor_1.by.css(".weatherTitle")).getText();
            // compare it to the static array to make sure values are correct
            expect(outputWeather).toMatch(icons[i]);
        }
    });
    it('should nagivate from homepage to service page', function () {
        // clicks a link in the header bar
        protractor_1.element(protractor_1.by.buttonText('Service')).click();
        var serviceText = protractor_1.element(protractor_1.by.css("my-service h2"));
        expect(serviceText.isPresent()).toBeTruthy();
    });
});
describe('Testing Service Page', function () {
    beforeEach(function () {
        protractor_1.browser.get('/service');
    });
    it('should navigate to service page and find services', function () {
        var serviceBtn = protractor_1.element(protractor_1.by.css('my-service h2'));
        expect(serviceBtn.isPresent()).toBeTruthy();
    });
});
describe('Testing Profilepage', function () {
    beforeEach(function () {
        protractor_1.browser.get('/profile');
    });
    it('test an element on the profile page', function () {
        var profile = protractor_1.element(protractor_1.by.css('my-profile h2'));
        expect(profile.isPresent()).toBeTruthy();
    });
});
//# sourceMappingURL=app.e2e-spec.js.map