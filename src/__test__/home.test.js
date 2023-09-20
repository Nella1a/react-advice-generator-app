/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://localhost"}
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../home.tsx';

test('two buttons on screen', async () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );
  expect(
    screen.getByRole('button', { name: 'Get Random Advice' }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: 'Search Advice' }),
  ).toBeInTheDocument();
});

test('link "Get Random Advice" works without errors', async () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );
  expect(
    screen.getByRole('button', { name: 'Get Random Advice' }),
  ).toBeInTheDocument();
});
