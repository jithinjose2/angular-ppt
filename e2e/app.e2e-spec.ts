import { AngularPptPage } from './app.po';

describe('angular-ppt App', function() {
  let page: AngularPptPage;

  beforeEach(() => {
    page = new AngularPptPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
