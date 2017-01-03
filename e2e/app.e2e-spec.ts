import { MakeEmGreenPage } from './app.po';

describe('make-em-green App', function() {
  let page: MakeEmGreenPage;

  beforeEach(() => {
    page = new MakeEmGreenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
