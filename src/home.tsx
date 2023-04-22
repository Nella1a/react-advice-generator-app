import React from 'react';
import { Link } from 'react-router-dom';
import Button from './components/Button';
import Layout from './components/layout';

export default function Home() {
  return (
    <Layout>
      <Link to="/get-advice">
        <Button text={'Get Advice'} />
      </Link>
      <Link to="/search-advice">
        {' '}
        <Button text={'Search Advice'} />
      </Link>
    </Layout>
  );
}
