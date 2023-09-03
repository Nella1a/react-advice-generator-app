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
    <div className="flex justify-center items-center min-h-screen bg-dark-blue text-light-cyan w-full">
      <section className="w-1/5 min-h-screen flex flex-col justify-center items-center gap-6">
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
      <section className="w-4/5">
        {' '}
        <Outlet />
      </section>
    </div>
  );
};

export default Sidebar;
