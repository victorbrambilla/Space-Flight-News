import { GetArticlesRepository } from '@/data/protocols';
import { GetArticles } from '@/domain/usecases';

export class RemoteGetArticles implements GetArticles {
  constructor(private readonly getArticlesRepository: GetArticlesRepository) {}

  async perform(params: GetArticles.Params): Promise<GetArticles.Result> {
    return await this.getArticlesRepository.GetArticles(params);
  }
}
