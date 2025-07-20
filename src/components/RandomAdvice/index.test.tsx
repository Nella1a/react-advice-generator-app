/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://localhost"}
 */
import 'whatwg-fetch';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RandomAdvice from './';

const handlers = [
  http.get('https://api.adviceslip.com/advice', () => {
    return HttpResponse.json({
      slip: {
        id: 224,
        advice: 'Mocked random advice.',
      },
    });
  }),
];

const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the RandomAdvice component', async () => {
  // mock window alert
  global.alert = jest.fn();
  render(
    <BrowserRouter>
      <RandomAdvice />
    </BrowserRouter>,
  );

  expect(await screen.findByText('ADVICE #224')).toBeInTheDocument();
  expect(await screen.findByText(/Mocked random advice./)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'icon dice' })).toBeInTheDocument();
});

test('get random advice', async () => {
  // mock window alert
  global.alert = jest.fn();

  render(
    <BrowserRouter>
      <RandomAdvice />
    </BrowserRouter>,
  );

  expect(await screen.findByText('ADVICE #224')).toBeInTheDocument();
  expect(await screen.findByText(/Mocked random advice./)).toBeInTheDocument();

  const requestAdviceButton = screen.getByRole('button', { name: 'icon dice' });
  server.resetHandlers();
  server.use(
    http.get('https://api.adviceslip.com/advice', () => {
      return HttpResponse.json({
        slip: {
          id: 201,
          advice: 'Mocked random advice two.',
        },
      });
    }),
  );

  // click button get new random advice
  await userEvent.click(requestAdviceButton);
  expect(await screen.findByText('ADVICE #201')).toBeInTheDocument();
  expect(
    await screen.findByText(/Mocked random advice two./),
  ).toBeInTheDocument();
});
