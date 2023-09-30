import React from 'react';
import { Link } from 'react-router-dom';
import ButtonLarge from './components/ButtonLarge';
import Layout from './components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="w-full h-[53rem] flex flex-col justify-center items-center md:items-start gap-4 md:w-11/12 md:flex-row md:mt-96">
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
