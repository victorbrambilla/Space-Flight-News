import React, { useEffect } from 'react';
import { ArticleModel } from '@/domain/models';
import { CardNews } from '@/presentation/components/home/CardNews';
import { Header } from '@/presentation/components/home/Header';
import { Box, Button } from '@mui/material';
import { MakeRemoteGetArticles } from '@/main/factories/usecases';
import { GetArticles } from '@/domain/usecases';
import useDebounce from '@/presentation/hooks/useDebounce';
import { LoadingDots } from '@/presentation/components/home/LoadingDots';

interface IProps {
  data: ArticleModel[];
}

export const Home = ({ data }: IProps) => {
  const [params, setParams] = React.useState<GetArticles.Params>({
    _limit: 10,
    _start: 0,
  });
  const [isFirstRender, setIsFirstRender] = React.useState(true);
  const [news, setNews] = React.useState<ArticleModel[]>();
  const [loading, setLoading] = React.useState(false);
  const debouncedSearchTerm = useDebounce(params, 500);

  useEffect(() => {
    setLoading(true);

    if (isFirstRender) {
      setNews(data);
      setLoading(false);
      setIsFirstRender(false);
    } else {
      if (debouncedSearchTerm) {
        MakeRemoteGetArticles()
          .perform(params)
          .then((res) => {
            setNews(res);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }

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
      {loading && <LoadingDots />}
      {!!news?.length && news ? (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Button
            variant='outlined'
            size='large'
            sx={{
              margin: '50px 0',
            }}
            disabled={loading}
            onClick={() => {
              setParams({
                ...params,
                _limit: params._limit + 10,
              });
            }}
          >
            Carregar Mais
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            width: '100%',

            textAlign: 'center',
          }}
        >
          <h1>Não há notícias para essa busca</h1>
        </Box>
      )}
    </Box>
  );
};
