import { RemoteGetArticles } from '../../../data/usecases';
import { GetArticles } from '../../../domain/usecases';
import { ArticlesRepository } from '../../../infra/db/repository';
import { api } from '../../../infra/http';

export const MakeRemoteGetArticles = (): GetArticles => {
  return new RemoteGetArticles(new ArticlesRepository(api));
};
