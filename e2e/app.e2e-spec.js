"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
var globals_1 = require("protractor/globals");
describe('angular2-end-to-end App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.Angular2EndToEndPage();
    });
    it('should display message saying my sandboxs', function () {
        globals_1.browser.get("/");
        var getTitle = globals_1.element(globals_1.by.css('my-app h1')).getText();
        expect(getTitle).toEqual('MY SANDBOX');
    });
    it('should click the first element of the list', function () {
        globals_1.browser.get("/");
        // Clicks the first element of the list
        var weatherList = globals_1.element.all(globals_1.by.css('.weatherList')).get(0).click();
        // Test the output from the click of the list
        var outputWeather = globals_1.element(globals_1.by.css(".weatherTitle")).getText();
        expect(outputWeather).toEqual('Sunny Icon');
        /* outputs to concole the value of the variable
        weatherList.getText().then(function(text) {
          console.log(text);
        });*/
    });
});
//# sourceMappingURL=app.e2e-spec.js.map