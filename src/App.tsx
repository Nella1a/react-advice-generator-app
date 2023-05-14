import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import RandomAdvice from './components/RandomAdvice';
import SearchAdvice from './components/SearchAdvice';
import ErrorPage from './errorPage';
import Home from './home';
import Sidebar from './routes/sidebar';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="advice" element={<Sidebar />}>
          <Route path="get-advice" element={<RandomAdvice />} />
          <Route path="search-advice" element={<SearchAdvice />} />
          {/* <Route path="search-advice/results/:id" element={<RandomAdvice />} /> */}
          <Route path="*" element={<ErrorPage />} />{' '}
        </Route>
        <Route path="*" element={<ErrorPage />} />{' '}
      </Routes>
    );
  }
}

export default App;
