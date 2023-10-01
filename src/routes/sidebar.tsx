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
      <section className="w-1/12  md:w-1/5 flex justify-center md:justify-start md:flex-col items-center gap-6  m-auto pt-3">
        <div>
          <Link to="/">
            <Button text={'Home'} />
          </Link>
        </div>

        {currentUrl === 'search-advice' ? (
          <div>
            <Link to="get-advice">
              <Button text={'Random Advice'} />
            </Link>
          </div>
        ) : (
          <div>
            <Link to="search-advice">
              <Button text={'Search Advice'} />
            </Link>
          </div>
        )}
      </section>
      <section className="w-11/12 md:w-4/5 bg-green-600">
        <Outlet />
      </section>
    </div>
  );
};

export default Sidebar;
