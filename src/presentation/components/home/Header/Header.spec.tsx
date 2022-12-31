import { render, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header } from './Header';
import { GetArticles } from '../../../../domain/usecases';

describe('Header', () => {
  it('updates the search query when the search input is changed', async  () => {
    const setParams = jest.fn();

    const params: GetArticles.Params = {
      _limit: 10,
      _start: 0,
      title_contains: '',
      _sort: 'publishedAt:desc'
    };

    const { getByLabelText } = await act( async () => render(<Header setParams={setParams} params={params} />));

    const searchInput = getByLabelText('Pesquisar');

    await waitFor(() => {
      fireEvent.change(searchInput, { target: { value: 'test' } });
    });

    expect(setParams).toHaveBeenCalledWith({
      _limit: 10,
      _start: 0,
      title_contains: 'test',
      _sort: 'publishedAt:desc'
    });
  });

  it('updates the sort field when the sort select is changed', async () => {
    const setParams = jest.fn();
    const params: GetArticles.Params = {
      _limit: 10,
      _start: 0,
      title_contains: '',
      _sort: 'publishedAt:desc'
    };
    const { getByTestId } = await act( async () => render(<Header setParams={setParams} params={params} />));

    const sortSelect = getByTestId("content-input");

    await waitFor(() => {
      fireEvent.change(sortSelect, { target: { value: 'publishedAt:asc' } });
     });

    expect(setParams).toHaveBeenCalledWith({
      _limit: 10,
      _start: 0,
      title_contains: '',
       _sort: 'publishedAt:asc'
    });

  });
});
