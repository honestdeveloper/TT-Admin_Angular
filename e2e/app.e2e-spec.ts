import { TTAdminPage } from './app.po';

describe('ttadmin App', () => {
  let page: TTAdminPage;

  beforeEach(() => {
    page = new TTAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
