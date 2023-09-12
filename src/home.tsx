import React from 'react';
import { Link } from 'react-router-dom';
import ButtonLarge from './components/ButtonLarge';
import Layout from './components/Layout';

const Home = () => {
  return (
    <Layout>
      <Link to="/advice/get-advice">
        <ButtonLarge text={'Get Random Advice'} />
      </Link>
      <Link to="/advice/search-advice">
        {' '}
        <ButtonLarge text={'Search Advice'} />
      </Link>
    </Layout>
  );
};

export default Home;
