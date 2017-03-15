import { Angular2EndToEndPage } from './app.po';
import { browser, element, by } from 'protractor/globals';

describe('angular2-end-to-end App', function() {
  let page: Angular2EndToEndPage;

  beforeEach(() => {
    page = new Angular2EndToEndPage();
  });

  it('should display message saying my sandboxs', () => {
    browser.get("/");
    let getTitle = element(by.css('my-app h1')).getText();
    expect(getTitle).toEqual('MY SANDBOX');
  });

  it('should click the first element of the list', () => {
    browser.get("/");

    // Clicks the first element of the list
    let weatherList = element.all(by.css('.weatherList')).get(0).click();

    // Test the output from the click of the list
    let outputWeather = element(by.css(".weatherTitle")).getText();
    expect(outputWeather).toEqual('Sunny Icon')

    /* outputs to concole the value of the variable
    weatherList.getText().then(function(text) {
      console.log(text);
    });*/
  });
});
