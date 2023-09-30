import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    // <main className="flex mt-8 md:mt-0 md:justify-center flex-col md:flex-row items-center md:gap-8 min-h-screen bg-dark-blue text-light-cyan ">
    //   {children}
    // </main>
    <main className="flex md:mt-0 md:justify-center flex-col md:flex-row items-center md:gap-8 min-h-screen bg-dark-blue text-light-cyan">
      {children}
    </main>
  );
};

export default Layout;
