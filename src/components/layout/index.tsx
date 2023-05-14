import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  return (
    <main className="flex justify-center items-center gap-8 min-h-screen bg-dark-blue text-light-cyan ">
      {props.children}
    </main>
  );
}
