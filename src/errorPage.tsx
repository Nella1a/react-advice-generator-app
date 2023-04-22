import React from 'react';

//import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  // const error: any = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center gap-8 min-h-screen bg-dark-blue text-light-cyan font-bold">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* <p>
       <i>{error.statusText || error.message}</i>
      </p> */}
    </div>
  );
}
