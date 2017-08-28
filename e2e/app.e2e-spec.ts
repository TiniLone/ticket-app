import { TicketAppPage } from './app.po';

describe('ticket-app App', () => {
  let page: TicketAppPage;

  beforeEach(() => {
    page = new TicketAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
