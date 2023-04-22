import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GetAdvice from './components/GetAdvice';
import SearchAdvice from './components/SearchAdvice';
import ErrorPage from './errorPage';
import Home from './home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-advice" element={<GetAdvice />} />
        <Route path="/search-advice" element={<SearchAdvice />} />
        <Route path="*" element={<ErrorPage />} />{' '}
      </Routes>
    </>
  );
}

export default App;
