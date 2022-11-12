import { GetArticles } from '../../domain/usecases';
import { GetArticlesRepository } from '../protocols';

export class RemoteGetArticles implements GetArticles {
  constructor(private readonly getArticlesRepository: GetArticlesRepository) {}

  async perform(params: GetArticles.Params): Promise<GetArticles.Result> {
    return await this.getArticlesRepository.GetArticles(params);
  }
}
