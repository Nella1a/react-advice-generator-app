import 'whatwg-fetch';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { server } from '../../mocks/node.js';
import SearchAdvice from './';

test('render SearchAdvice component and  search for an advice', async () => {
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
  const inputField = screen.getByRole('searchbox', { name: '' });
  expect(inputField).toBeInTheDocument();
  expect(inputField).toHaveValue('');

  // submit button
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

test('No match for SearchTerm', async () => {
  server.use(
    http.get('https://api.adviceslip.com/advice/search/funnnn', () => {
      return HttpResponse.json({
        message: { type: 'notice', text: 'no match found' },
      });
    }),
  );

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
  const inputField = screen.getByRole('searchbox', { name: '' });
  expect(inputField).toBeInTheDocument();
  expect(inputField).toHaveValue('');

  // submit button
  expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();

  // add searchTerm
  await userEvent.type(inputField, 'funnnn');
  expect(inputField).toHaveValue('funnnn');

  // submit
  await userEvent.click(screen.getByRole('button', { name: 'Search' }));
  expect(await screen.findByText(/no match found/)).toBeInTheDocument();
});
