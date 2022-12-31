import React from 'react';
import {
  Box,
  Divider,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import { GetArticles } from '@/domain/usecases';

import SearchIcon from '@mui/icons-material/Search';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export interface IProps {
  setParams: (params: GetArticles.Params) => void;
  params: GetArticles.Params;
}
export const Header = ({ setParams, params }: IProps) => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
          gap: 2,
          padding: 4,
        }}
      >
        <TextField
          label='Pesquisar'
          variant='outlined'
          onChange={(e) => {
            setParams({ ...params, title_contains: e.target.value });
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          id='filled-select-currency'
          select
          label='Ordenar'
          variant='outlined'
          onChange={(e) => {
            setParams({ ...params, _sort: e.target.value });
          }}
          inputProps={{ "data-testid": "content-input" }}
          sx={{
            width: 200,
          }}
        >
          <MenuItem value={'publishedAt:asc'}>Mais Antigas</MenuItem>
          <MenuItem value={'publishedAt:desc'}>Mais Novas</MenuItem>
        </TextField>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid white',
            borderRadius: '50%',
            width: 100,
            height: 100,
          }}
        >
          <RocketLaunchIcon fontSize='large' color='primary' />
        </Box>
        <Typography variant='h4' component='div' gutterBottom>
          Space Flight News
        </Typography>
        <Divider
          color='white'
          sx={{
            width: '90%',
          }}
        />
      </Box>
    </Box>
  );
};
