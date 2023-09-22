/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://localhost"}
 */
import 'whatwg-fetch';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SearchAdvice from './';

const handlers = [
  rest.get('https://api.adviceslip.com/advice/search/love', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        total_results: '3',
        query: 'love',
        slips: [
          {
            id: 101,
            advice: 'Always do anything for love.',
            date: '2015-12-08',
          },
          { id: 174, advice: 'Be a good lover.', date: '2014-06-03' },
          {
            id: 184,
            advice: 'Take a chance on doing what you love.',
            date: '2017-03-10',
          },
        ],
      }),
    );
  }),
];

const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Search Advice', async () => {
  render(
    <BrowserRouter>
      <SearchAdvice />
    </BrowserRouter>,
  );

  //heading
  expect(
    screen.getByRole('heading', { name: 'Search Advice' }),
  ).toBeInTheDocument();

  // input field
  const inputField = screen.getByRole('searchbox', { name: 'Search Advice' });
  expect(inputField).toBeInTheDocument();
  expect(inputField).toHaveValue('');

  // search button
  expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();

  // add searchTerm
  await userEvent.type(inputField, 'love');
  expect(inputField).toHaveValue('love');

  // submit
  await userEvent.click(screen.getByRole('button', { name: 'Search' }));
  expect(
    await screen.findByText(/Always do anything for love/),
  ).toBeInTheDocument();
});
