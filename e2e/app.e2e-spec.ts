import { browser, element, by } from 'protractor/globals';

describe('Testing Homepage', function() {
  beforeEach(() => {
    browser.get('/');
  });

  it('should display message saying my sandboxs', () => {
    let getTitle = element(by.css('.webTitle')).getText();
    expect(getTitle).toEqual('MY SANDBOX');
  });

  it('should click the first element of the list', () => {

    // Clicks the first element of the list
    let weatherList = element.all(by.css('.weatherList')).get(0).click();

    // Test the output from the click of the list
    let outputWeather = element(by.css(".weatherTitle")).getText();

    expect(outputWeather).toEqual('Sunny Icon')

  });

});

describe('Testing Service Page', function() {
  beforeEach(() => {
    browser.get('/service');
  });

  it('should navigate to service page and find services', () => {
    let serviceBtn = element(by.css('my-service h2'));
    expect(serviceBtn.isPresent()).toBeTruthy();
  });

});

describe('Testing Profilepage', function() {
  beforeEach(() => {
    browser.get('/profile');
  });

  it('test an element on the profile page', () => {
    let profile = element(by.css('my-profile h2'));
    expect(profile.isPresent()).toBeTruthy();
  });

});
