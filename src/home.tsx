import React from 'react';
import { Link } from 'react-router-dom';
import ButtonLarge from './components/ButtonLarge';
import Layout from './components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="w-full h-[35rem] flex flex-col justify-center items-center gap-4 md:w-11/12 md:flex-row">
        <Link to="/advice/get-advice">
          <ButtonLarge text={'Get Random Advice'} />
        </Link>
        <Link to="/advice/search-advice">
          {' '}
          <ButtonLarge text={'Search Advice'} />
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
