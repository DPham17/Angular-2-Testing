"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("protractor/globals");
describe('Testing Homepage', function () {
    beforeEach(function () {
        globals_1.browser.get('/');
    });
    it('should display message saying my sandboxs', function () {
        var getTitle = globals_1.element(globals_1.by.css('.webTitle')).getText();
        expect(getTitle).toEqual('MY SANDBOX');
    });
    it('should click the first element of the list', function () {
        // Clicks the first element of the list
        var weatherList = globals_1.element.all(globals_1.by.css('.weatherList')).get(0).click();
        // Test the output from the click of the list
        var outputWeather = globals_1.element(globals_1.by.css(".weatherTitle")).getText();
        expect(outputWeather).toEqual('Sunny Icon');
    });
});
describe('Testing Service Page', function () {
    beforeEach(function () {
        globals_1.browser.get('/service');
    });
    it('should navigate to service page and find services', function () {
        var serviceBtn = globals_1.element(globals_1.by.css('my-service h2'));
        expect(serviceBtn.isPresent()).toBeTruthy();
    });
});
describe('Testing Profilepage', function () {
    beforeEach(function () {
        globals_1.browser.get('/profile');
    });
    it('test an element on the profile page', function () {
        var profile = globals_1.element(globals_1.by.css('my-profile h2'));
        expect(profile.isPresent()).toBeTruthy();
    });
});
//# sourceMappingURL=app.e2e-spec.js.map