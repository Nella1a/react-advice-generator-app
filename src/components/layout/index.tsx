import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <main className="flex justify-center items-center gap-8 min-h-screen bg-dark-blue text-light-cyan ">
      {children}
    </main>
  );
};

export default Layout;
