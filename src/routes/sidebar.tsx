import React, { useEffect, useState } from 'react';
import { Link, Outlet, useHref } from 'react-router-dom';
import Button from '../components/Button';

const Sidebar = () => {
  const [currentUrl, setCurrentUrl] = useState('');
  const urlPath = useHref({});

  useEffect(() => {
    const getUrlEndpoint = urlPath.split('/');
    const urlEndpoint = getUrlEndpoint[getUrlEndpoint.length - 1];
    setCurrentUrl(urlEndpoint);
  }, [urlPath]);

  return (
    <div className="flex flex-col  md:flex-row justify-center items-center md:min-h-screen bg-dark-blue text-light-cyan w-full">
      <section className="w-11/12 h-28 md:w-1/5 md:min-h-screen flex md:flex-col justify-center  items-center gap-6 border-8 border-red">
        <div>
          <Link to="/">
            <Button text={'home'} />
          </Link>
        </div>

        {currentUrl === 'search-advice' ? (
          <div>
            <Link to="get-advice">
              <Button text={'random advice'} />
            </Link>
          </div>
        ) : (
          <div>
            <Link to="search-advice">
              <Button text={'search advice'} />
            </Link>
          </div>
        )}
      </section>
      <section className="w-11/12 md:w-4/5 border-8 border-green">
        {' '}
        <Outlet />
      </section>
    </div>
  );
};

export default Sidebar;
