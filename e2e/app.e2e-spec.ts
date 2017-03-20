import { browser, element, by } from 'protractor';

describe('Testing Homepage', function() {
  beforeEach(() => {
    browser.get('/');
  });

  it('should display message saying my sandboxs', () => {
    let getTitle = element(by.className('webTitle')).getText();
    expect(getTitle).toMatch('MY SANDBOX');
  });


  it('should click every list items and compare its values', () => {
    let outputWeather;
    let icons = ['Sunny Icon', 'Flurries Icon', 'Thunder Icon', 'Rainy Icon', 'Sun-Shower', 'Cloudy Icon'];

    for(var i = 0; i < 6; i++){
      // clicks an item on the list
      element.all(by.css('.weatherList')).get(i).click();

      // gets the output test after clicking
      outputWeather = element(by.css(".weatherTitle")).getText();

      // compare it to the static array to make sure values are correct
      expect(outputWeather).toMatch(icons[i]);
    }
  });


  it('should nagivate from homepage to service page', () => {
    // clicks a link in the header bar
    element(by.buttonText('Service')).click();

    let serviceText = element(by.css("my-service h2"));

    expect(serviceText.isPresent()).toBeTruthy();
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
