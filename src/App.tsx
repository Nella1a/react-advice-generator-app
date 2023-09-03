import React from 'react';
import { FetcherWithComponents, Route, Routes } from 'react-router-dom';
import RandomAdvice from './components/RandomAdvice';
import SearchAdvice from './components/SearchAdvice';
import ErrorPage from './errorPage';
import Home from './home';
import Sidebar from './routes/sidebar';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="advice" element={<Sidebar />}>
        <Route path="get-advice" element={<RandomAdvice />} />
        <Route path="search-advice" element={<SearchAdvice />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
