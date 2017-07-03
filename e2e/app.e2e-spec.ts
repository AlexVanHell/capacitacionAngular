import { CapaAngularPage } from './app.po';

describe('capa-angular App', () => {
  let page: CapaAngularPage;

  beforeEach(() => {
    page = new CapaAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
