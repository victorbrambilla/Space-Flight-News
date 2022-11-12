import { ArticleModel } from '../models';

export interface GetArticles {
  perform(params: GetArticles.Params): Promise<GetArticles.Result>;
}

export namespace GetArticles {
  export type Params = {
    _limit: number;
    _start: number;
    _sort?: string;
    title_contains?: string;
  };

  export type Result = ArticleModel[];
}
