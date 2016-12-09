import { MyOrderListPage } from './app.po';

describe('my-order-list App', function() {
  let page: MyOrderListPage;

  beforeEach(() => {
    page = new MyOrderListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
