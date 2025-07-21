import 'whatwg-fetch';
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { server } from '../../mocks/node.js';
import RandomAdvice from './';

test('renders the RandomAdvice component', async () => {
  // mock window alert
  global.alert = vi.fn();
  render(
    <BrowserRouter>
      <RandomAdvice />
    </BrowserRouter>,
  );

  expect(screen.getByText('ADVICE #')).toBeInTheDocument();
  expect(screen.getByText(/Get Random Advice/)).toBeInTheDocument();
  const containerSpan = screen.getByRole('paragraph');
  expect(
    within(containerSpan).getByText(/Need advice\? Click the button!/i),
  ).toBeInTheDocument();

  expect(screen.getByRole('button', { name: 'icon dice' })).toBeInTheDocument();
});

test('get random advice', async () => {
  // mock window alert
  global.alert = vi.fn();

  render(
    <BrowserRouter>
      <RandomAdvice />
    </BrowserRouter>,
  );

  expect(screen.getByText('ADVICE #')).toBeInTheDocument();
  const containerSpan = screen.getByRole('paragraph');
  expect(
    within(containerSpan).getByText(/Need advice\? Click the button!/i),
  ).toBeInTheDocument();

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

  expect(
    within(containerSpan).queryByText(/Need advice\? Click the button!/i),
  ).not.toBeInTheDocument();
});
