import { browser, by, element } from 'protractor';

export class FarMetaGeneratorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fm-root h1')).getText();
  }
}
