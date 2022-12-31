import { render, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Home } from './Home';
import { ArticleModel } from '../../domain/models';
import { GetArticles } from '@/domain/usecases';

const news: ArticleModel = {
  id: 1,
  featured: true,
  title: 'Test News',
  url: 'https://example.com',
  imageUrl: 'test-image.jpg',
  newsSite: 'Test News Site',
  summary: 'This is a test news.',
  publishedAt: '2022-12-10T16:54:14.000Z',
  launches: [
    {
      id: 'launch-1',
      provider: 'Test Provider'
    }
  ],
  events: [
    {
      id: 'event-1',
      provider: 'Test Provider'
    }
  ]
};

describe('Home', () => {
  it('should render the component', () => {
    const { getByText } = render(<Home data={[]} />);
    expect(getByText('Não há notícias para essa busca')).toBeInTheDocument();
  });

  it('should render the "Load More" button and update the component when clicked', async () => {

    const { getByText, getAllByTestId } =  await act( async () => render(<Home data={[news]} />));


    expect(getByText('Carregar Mais')).toBeInTheDocument();
    await waitFor(() => {
    fireEvent.click(getByText('Carregar Mais'));
    });

    setTimeout(() => {
      const cards =  getAllByTestId("card-news");
      expect(cards).toHaveLength(30);
      expect(cards).toBeInTheDocument();
   ;}, 1000);

  });
});
