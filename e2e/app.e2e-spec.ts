import { RandomJokeProjectPage } from './app.po';

describe('random-joke-project App', () => {
  let page: RandomJokeProjectPage;

  beforeEach(() => {
    page = new RandomJokeProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
