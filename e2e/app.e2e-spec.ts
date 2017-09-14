import { MovieInfoPage } from './app.po';

describe('movie-info App', () => {
  let page: MovieInfoPage;

  beforeEach(() => {
    page = new MovieInfoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
