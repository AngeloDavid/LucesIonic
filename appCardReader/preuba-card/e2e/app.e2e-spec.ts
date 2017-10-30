import { PreubaCardPage } from './app.po';

describe('preuba-card App', () => {
  let page: PreubaCardPage;

  beforeEach(() => {
    page = new PreubaCardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
