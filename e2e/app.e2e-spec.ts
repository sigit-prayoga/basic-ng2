import { BasicNg2Page } from './app.po';

describe('basic-ng2 App', function() {
  let page: BasicNg2Page;

  beforeEach(() => {
    page = new BasicNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
