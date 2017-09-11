import { PrBBlPage } from './app.po';

describe('pr-bbl App', () => {
  let page: PrBBlPage;

  beforeEach(() => {
    page = new PrBBlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
