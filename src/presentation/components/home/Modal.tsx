import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
} from '@mui/material';
import { ArticleModel } from '@/domain/models';

const formatDate = (date: string) => {
  const d = new Date(date);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};

interface IProps {
  news: ArticleModel;
}
export default function Modal({ news }: IProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size='large' variant='contained' onClick={handleClickOpen}>
        Ver Mais
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        sx={{
          '& .MuiDialog-paper': {
            maxWidth: '50%',
          },
          '@media (max-width:800px)': {
            '& .MuiDialog-paper': {
              maxWidth: '100%',
            },
            flexDirection: 'column-reverse',
          },
        }}
      >
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Card
          sx={{
            display: 'flex',
            padding: '40px',
            gap: '10px',
            backgroundColor: 'rgba(68, 68, 68, 0.08)',
            flexDirection: 'row',
            '@media (max-width:800px)': {
              overflowY: 'auto',
              flexDirection: 'column',
              padding: '10px',
            },
          }}
        >
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
              </Box>

              <Typography
                variant='body1'
                color='text.secondary'
                component='div'
              >
                {news.summary}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size='large'
                variant='contained'
                href={news.url}
                target='_blank'
              >
                Ir para site
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Dialog>
    </div>
  );
}
