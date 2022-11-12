import { GetArticles } from '../../domain/usecases';

export interface GetArticlesRepository {
  GetArticles(
    params: GetArticlesRepository.Params
  ): Promise<GetArticlesRepository.Result>;
}
export namespace GetArticlesRepository {
  export type Params = GetArticles.Params;
  export type Result = GetArticles.Result;
}
