import { render, fireEvent, waitFor } from '@testing-library/react';
import { CardNews } from './CardNews';
import { ArticleModel } from '../../../../domain/models';
const news: ArticleModel = {
  id: 1,
  featured: true,
  title: 'Test News',
  url: 'https://example.com',
  imageUrl: 'test-image.jpg',
  newsSite: 'Test News Site',
  summary: 'This is a test news.',
  publishedAt: '2022-01-01',
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

describe('CardNews', () => {
  it('renders the news title', () => {

    const { getByText } = render(<CardNews news={news} index={0} />);

    expect(getByText('Test News')).toBeInTheDocument();
  });

  it('opens the modal when the "Ver Mais" button is clicked', async () => {

    const { getByText } = render(<CardNews news={news} index={0} />);
    await waitFor(() => {
      fireEvent.click(getByText('Ver Mais'));
    });
    expect(getByText('Ir para site')).toBeInTheDocument();

  });

});
