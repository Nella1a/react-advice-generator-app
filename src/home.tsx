import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './components/Button';
import Layout from './components/Layout';

class Home extends Component {
  render() {
    return (
      <Layout>
        <Link to="/advice/get-advice">
          <Button text={'Get Random Advice'} />
        </Link>
        <Link to="/advice/search-advice">
          {' '}
          <Button text={'Search Advice'} />
        </Link>
      </Layout>
    );
  }
}

export default Home;
