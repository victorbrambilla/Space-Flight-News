import { render, fireEvent, waitFor, getByText, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from './Modal';
import { ArticleModel } from '../../../../domain/models';

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

describe('Modal', () => {
  it('opens the modal when the "Ver Mais" button is clicked', async () => {

    const { getByText } = await act( async () => render(<Modal news={news} />));

    await waitFor(() => {
      fireEvent.click(getByText('Ver Mais'));
    });

    expect(getByText('Test News')).toBeInTheDocument();
    expect(getByText('This is a test news.')).toBeInTheDocument();
    expect(getByText('10/12/2022')).toBeInTheDocument();
    expect(getByText('Ir para site')).toBeInTheDocument();
  });

  it('closes the modal when the close button is clicked', async () => {

    const { getByLabelText, getByText } = await act( async () => render(<Modal news={news} />));

    await waitFor(() => {
      fireEvent.click(getByText('Ver Mais'));
    });
    const title = getByText('Test News');
    const summary = getByText('This is a test news.');
    const date = getByText('10/12/2022');
    const link = getByText('Ir para site');

    fireEvent.click(getByLabelText('close'));

    await waitFor(() => {
      expect(title).not.toBeInTheDocument();
      expect(summary).not.toBeInTheDocument();
      expect(date).not.toBeInTheDocument();
      expect(link).not.toBeInTheDocument();
    }
    );
  });

});
