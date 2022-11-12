import React, { useEffect } from 'react';
import { ArticleModel } from '@/domain/models';
import { CardNews } from '@/presentation/components/home/CardNews';
import { Header } from '@/presentation/components/home/Header';
import { Box, Button } from '@mui/material';
import { MakeRemoteGetArticles } from '@/main/factories/usecases';
import { GetArticles } from '@/domain/usecases';
import useDebounce from '@/presentation/hooks/useDebounce';

interface IProps {
  data: ArticleModel[];
}

export const Home = ({ data }: IProps) => {
  const [params, setParams] = React.useState<GetArticles.Params>({
    _limit: 10,
    _start: 1,
  });
  const [isFirstRender, setIsFirstRender] = React.useState(true);
  const [news, setNews] = React.useState<ArticleModel[]>();
  const debouncedSearchTerm = useDebounce(params, 500);

  useEffect(() => {
    if (isFirstRender) {
      setNews(data);
    } else {
      if (debouncedSearchTerm !== '') {
        console.log('sasd');
        MakeRemoteGetArticles()
          .perform(params)
          .then((res) => {
            setNews(res);
          });
      } else {
        MakeRemoteGetArticles()
          .perform(params)
          .then((res) => {
            console.log(res);
            setNews(res);
          });
      }
    }

    if (isFirstRender) setIsFirstRender(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  return (
    <Box
      sx={{
        backdropFilter: 'brightness(0.5)',
        minHeight: '100vh',
      }}
    >
      <Header setParams={setParams} params={params} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '50px',
          height: '100%',
          marginTop: '100px',
          padding: '0 20px',
          '@media (max-width:800px)': {
            padding: '0 ',
          },
        }}
      >
        {news?.map((item, i) => {
          return <CardNews key={item.id} news={item} index={i} />;
        })}
      </Box>
    </Box>
  );
};
