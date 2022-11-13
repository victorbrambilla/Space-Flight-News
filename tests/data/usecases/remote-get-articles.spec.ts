import { RemoteGetArticles } from '@/data/usecases';
import { GetArticles } from '@/domain/usecases';
import { ArticlesRepository } from '@/infra/db/repository';
import { api } from '@/infra/http';

const makeSut = (): GetArticles => {
  const sut = new RemoteGetArticles(new ArticlesRepository(api));
  return sut;
};

describe('usecase - getArticles', () => {
  it('should return a list of articles', async () => {
    const sut = makeSut();
    const articles = await sut.perform({
      _limit: 10,
      _start: 0,
    });
    expect(articles).toBeTruthy();
  });

  it('should return 30 articles', async () => {
    const sut = makeSut();
    const articles = await sut.perform({
      _limit: 30,
      _start: 0,
    });
    expect(articles.length).toBe(30);
  });
  it('should return articles the right title searched', async () => {
    const sut = makeSut();
    const articles = await sut.perform({
      _limit: 30,
      _start: 0,
      title_contains: 'elon',
    });
    expect(articles.length).toBe(30);
    for (let article of articles) {
      expect(article.title).toContain('Elon');
    }
  });
});
