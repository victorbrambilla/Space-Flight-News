import React from 'react';
import { ArticleModel } from '@/domain/models';
import { MakeRemoteGetArticles } from '@/main/factories/usecases';
import { Home } from '../presentation/views/Home';

interface IProps {
  data: ArticleModel[];
}

export default function HomePage({ data }: IProps) {
  return <Home data={data} />;
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const data = await MakeRemoteGetArticles().perform({
    _limit: 10,
    _start: page,
  });
  return {
    props: {
      data: data,
    },
  };
}
