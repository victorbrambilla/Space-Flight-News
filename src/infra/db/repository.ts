import { GetArticlesRepository } from '@/data/protocols';
import { Axios } from 'axios';

export class ArticlesRepository implements GetArticlesRepository {
  constructor(private readonly api: Axios) {}

  async GetArticles(
    params: GetArticlesRepository.Params
  ): Promise<GetArticlesRepository.Result> {
    const response = await this.api.get('/v3/articles', {
      params: {
        _limit: params._limit,
        _start: params._start,
        _sort: params._sort,
        title_contains: params.title_contains,
      },
    });
    return response.data;
  }
}
