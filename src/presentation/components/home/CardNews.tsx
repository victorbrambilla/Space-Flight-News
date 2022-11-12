import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { ArticleModel } from '@/domain/models';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

interface IProps {
  news: ArticleModel;
  index: number;
}

const formatDate = (date: string) => {
  const d = new Date(date);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};

export const CardNews = ({ news, index }: IProps) => {
  return (
    <Card
      sx={{
        display: 'flex',
        padding: '10px',
        gap: '10px',
        backgroundColor: 'rgba(68, 68, 68, 0.08)',
        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
        maxWidth: '80%',
        minWidth: '80%',
        '@media (max-width:800px)': {
          flexDirection: 'column-reverse',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minWidth: '300px',
          flex: 2,
        }}
      >
        <CardContent>
          <Typography variant='h4' component='div'>
            {news.title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <Typography
              variant='subtitle2'
              color='text.secondary'
              component='div'
            >
              {formatDate(news.publishedAt)}
            </Typography>
            <Button
              size='small'
              variant='contained'
              color='secondary'
              href={news.url}
              target='_blank'
            >
              News Site
              <ArrowRightAltIcon />
            </Button>
          </Box>

          <Typography variant='body1' color='text.secondary' component='div'>
            {news.summary}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='large' variant='contained'>
            Ver Mais
          </Button>
        </CardActions>
      </Box>
      <CardMedia
        component='img'
        sx={{
          width: '400px',
          '@media (max-width:800px)': {
            width: '100%',
          },
        }}
        image={news.imageUrl}
        alt={news.title}
      />
    </Card>
  );
};
