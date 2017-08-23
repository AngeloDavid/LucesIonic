import { ProyectCamPage } from './app.po';

describe('proyect-cam App', () => {
  let page: ProyectCamPage;

  beforeEach(() => {
    page = new ProyectCamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
